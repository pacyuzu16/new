import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// Store messages in localStorage for admin panel
const saveMessage = (message: any) => {
  const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  const newMessage = {
    ...message,
    id: Date.now(),
    timestamp: new Date().toISOString(),
    read: false
  };
  messages.unshift(newMessage);
  localStorage.setItem('contactMessages', JSON.stringify(messages));
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Save message to localStorage
      saveMessage(formData);
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const references = [
    {
      name: 'NIYONKURU Aime Sincere',
      title: 'CEO of AtSince24',
      phone: '+250 788 825 011'
    },
     {
      name: 'NGIRIMANA Patience',
      title: 'CEO of Titanium Smart Life',
      phone: '+250 789 296 633'
    },
    {
      name: 'UKURIKIYEYESU Dieudonne',
      title: 'Lecturer at UR-CST',
      phone: '+250 785 684 484'
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pacyuzu16@gmail.com',
      href: 'mailto:pacyuzu16@gmail.com',
      description: 'Send me an email anytime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+250 789 171 532',
      href: 'tel:+250789171532',
      description: 'Call me during business hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kigali, Rwanda',
      href: '#',
      description: 'Based in the heart of Africa',
      color: 'from-purple-500 to-pink-500'
    }
  ];
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-600 mb-6">
            <MessageSquare size={16} className="mr-2" />
            Let's connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-blue-600 font-semibold mb-1">{method.value}</p>
              <p className="text-gray-500 text-sm">{method.description}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Send size={28} className="mr-3 text-blue-600" />
              Send Message
            </h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <div>
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-600 text-sm">I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle size={20} className="text-red-600 mr-3" />
                <div>
                  <p className="text-red-800 font-medium">Something went wrong!</p>
                  <p className="text-red-600 text-sm">Please try again or contact me directly.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none disabled:opacity-50 transition-all duration-200"
                    placeholder="Your message here..."
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <Clock size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-700 mb-4">
                I typically respond to messages within <span className="font-bold text-blue-600">24 hours</span> during business days.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Business Hours</p>
                  <p className="text-gray-600">Mon-Fri: 8AM-6PM EAT</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Weekend</p>
                  <p className="text-gray-600">Limited availability</p>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User size={24} className="mr-3 text-green-600" />
                References
              </h3>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">{ref.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{ref.title}</p>
                    <a href={`tel:${ref.phone}`} className="text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors">
                      {ref.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;