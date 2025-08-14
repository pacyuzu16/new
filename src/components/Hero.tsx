import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Calendar, Award, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Calendar },
    { label: 'Projects Completed', value: '4+', icon: Award },
    { label: 'Technologies', value: '10+', icon: Sparkles },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Animated Background Elements  */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-4 shadow-lg border border-blue-100">
              <MapPin size={16} className="mr-2" />
              Based in Kigali, Rwanda
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Cyuzuzo Pacifique
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 sm:mb-4 font-medium">
              Computer Engineering Student & Web Developer
            </p>
            
            <p className="text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about innovation and problem-solving with strong technical 
              and leadership skills. Eager to grow, learn, and make a meaningful 
              impact in any opportunity I'm given.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon size={14} className="text-white" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6">
              <a
                href="/cv-cyuzuzo-pacifique.pdf"
                download="Cyuzuzo_Pacifique_CV.pdf"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex space-x-3 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/cyuzuzo-pacifique-588671280/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20"
              >
                <Linkedin size={16} className="sm:size-5" />
              </a>
              <a
                href="https://github.com/pacyuzu16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20"
              >
                <Github size={16} className="sm:size-5" />
              </a>
              <a
                href="mailto:pacyuzu16@gmail.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20"
              >
                <Mail size={16} className="sm:size-5" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2 relative z-10">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-bounce delay-700"></div>
              <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce delay-1000"></div>
              
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="absolute inset-2 rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
                
                <img
                  src="images/picc.png"
                  alt="Cyuzuzo Pacifique"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white relative z-10 hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Status Indicatorr */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-400">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Hero;