import React, { useState, useEffect } from 'react';
import { 
  Lock, Mail, Trash2, Eye, EyeOff, ArrowLeft, Calendar, User, 
  BarChart3, MessageCircle, Clock, TrendingUp, Download, 
  Search, Filter, RefreshCw, Archive, Star
} from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
  starred?: boolean;
  archived?: boolean;
}

interface Analytics {
  totalMessages: number;
  unreadMessages: number;
  todayMessages: number;
  weekMessages: number;
  monthMessages: number;
  averageResponseTime: string;
}

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'unread' | 'starred' | 'archived'>('all');
  const [analytics, setAnalytics] = useState<Analytics>({
    totalMessages: 0,
    unreadMessages: 0,
    todayMessages: 0,
    weekMessages: 0,
    monthMessages: 0,
    averageResponseTime: '2.5 hours'
  });

  // Password: Kigali@123 (encoded as mathematical formula)
  const getCorrectPassword = () => {
    const base = 'Kigali';
    const symbol = String.fromCharCode(64); // @
    const number = (100 + 20 + 3).toString(); // 123
    return base + symbol + number;
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadMessages();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    calculateAnalytics();
  }, [messages]);

  const loadMessages = () => {
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    setMessages(storedMessages);
  };

  const calculateAnalytics = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    const todayMessages = messages.filter(msg => 
      new Date(msg.timestamp) >= today
    ).length;

    const weekMessages = messages.filter(msg => 
      new Date(msg.timestamp) >= weekAgo
    ).length;

    const monthMessages = messages.filter(msg => 
      new Date(msg.timestamp) >= monthAgo
    ).length;

    setAnalytics({
      totalMessages: messages.length,
      unreadMessages: messages.filter(msg => !msg.read).length,
      todayMessages,
      weekMessages,
      monthMessages,
      averageResponseTime: '2.5 hours'
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === getCorrectPassword()) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setSelectedMessage(null);
  };

  const markAsRead = (messageId: number) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  };

  const toggleStar = (messageId: number) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, starred: !msg.starred } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  };

  const toggleArchive = (messageId: number) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, archived: !msg.archived } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  const deleteMessage = (messageId: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = messages.filter(msg => msg.id !== messageId);
      setMessages(updatedMessages);
      localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    }
  };

  const exportMessages = () => {
    const dataStr = JSON.stringify(messages, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `contact-messages-${new Date().toISOString().split('T')[0]}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getFilteredMessages = () => {
    let filtered = messages;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(msg =>
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    switch (filterType) {
      case 'unread':
        filtered = filtered.filter(msg => !msg.read);
        break;
      case 'starred':
        filtered = filtered.filter(msg => msg.starred);
        break;
      case 'archived':
        filtered = filtered.filter(msg => msg.archived);
        break;
      default:
        filtered = filtered.filter(msg => !msg.archived);
    }

    return filtered;
  };

  const filteredMessages = getFilteredMessages();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Lock size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Secure access to portfolio dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Administrator Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12 transition-all duration-200"
                  placeholder="Enter secure password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {error && (
                <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Portfolio
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={exportMessages}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Download size={16} className="mr-1" />
                Export
              </button>
              <button
                onClick={loadMessages}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <RefreshCw size={16} className="mr-1" />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Messages</p>
                <p className="text-3xl font-bold text-gray-900">{analytics.totalMessages}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageCircle size={24} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unread</p>
                <p className="text-3xl font-bold text-orange-600">{analytics.unreadMessages}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Mail size={24} className="text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-3xl font-bold text-green-600">{analytics.weekMessages}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp size={24} className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Response</p>
                <p className="text-2xl font-bold text-purple-600">{analytics.averageResponseTime}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock size={24} className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Mail size={20} className="mr-2" />
                    Messages ({filteredMessages.length})
                  </h2>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Filters */}
                <div className="flex space-x-2 mb-4">
                  {[
                    { key: 'all', label: 'All', icon: MessageCircle },
                    { key: 'unread', label: 'Unread', icon: Mail },
                    { key: 'starred', label: 'Starred', icon: Star },
                    { key: 'archived', label: 'Archived', icon: Archive }
                  ].map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setFilterType(key as any)}
                      className={`flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        filterType === key
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Icon size={12} className="mr-1" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {filteredMessages.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    {searchTerm ? 'No messages match your search' : 'No messages yet'}
                  </div>
                ) : (
                  filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => {
                        setSelectedMessage(message);
                        if (!message.read) markAsRead(message.id);
                      }}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                        !message.read ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      } ${selectedMessage?.id === message.id ? 'bg-blue-100' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900 truncate flex-1">{message.name}</h3>
                        <div className="flex items-center space-x-1 ml-2">
                          {message.starred && <Star size={12} className="text-yellow-500 fill-current" />}
                          {!message.read && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">{message.subject}</p>
                      <p className="text-xs text-gray-500">{formatDate(message.timestamp)}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Message Details */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {selectedMessage.subject}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <User size={16} className="mr-1" />
                          {selectedMessage.name}
                        </div>
                        <div className="flex items-center">
                          <Mail size={16} className="mr-1" />
                          <a
                            href={`mailto:${selectedMessage.email}`}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            {selectedMessage.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {formatDate(selectedMessage.timestamp)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => toggleStar(selectedMessage.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          selectedMessage.starred
                            ? 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100'
                            : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                        }`}
                        title={selectedMessage.starred ? 'Remove star' : 'Add star'}
                      >
                        <Star size={20} className={selectedMessage.starred ? 'fill-current' : ''} />
                      </button>
                      <button
                        onClick={() => toggleArchive(selectedMessage.id)}
                        className="text-gray-600 hover:text-gray-700 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        title={selectedMessage.archived ? 'Unarchive' : 'Archive'}
                      >
                        <Archive size={20} />
                      </button>
                      <button
                        onClick={() => deleteMessage(selectedMessage.id)}
                        className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete message"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {selectedMessage.message}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t flex space-x-4">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
                    >
                      <Mail size={16} className="mr-2" />
                      Reply via Email
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedMessage.email);
                        alert('Email copied to clipboard!');
                      }}
                      className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      Copy Email
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Mail size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Message Selected</h3>
                <p className="text-gray-600">Select a message from the list to view its details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;