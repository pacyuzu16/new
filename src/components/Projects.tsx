import React from 'react';
import { ExternalLink, Github, Calendar, Code, Palette, ShoppingBag, Building, Star, TrendingUp, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Titanium Smart Life Website',
      description: 'A modern e-commerce platform for smart home products and lifestyle solutions. Built with responsive design and optimized user experience.',
      image: 'images/tsl.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      liveUrl: 'https://titaniumsmartlife.com',
      githubUrl: null,
      category: 'E-commerce',
      status: 'Live',
      date: '2024',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      metrics: { users: '1K+', performance: '95%', uptime: '99.9%' }
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills, experience, and projects. Features an admin panel for managing contact messages.',
      image: 'images/port.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://pacyuzu16.vercel.app/',
      githubUrl: 'https://github.com/pacyuzu16/Portfolio',
      category: 'Portfolio',
      status: 'Live',
      date: '2024',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      metrics: { visitors: '500+', speed: '98%', responsive: '100%' }
    },
    {
      title: 'LaDoucé Fashion Shop',
      description: 'An elegant e-commerce platform for fashion retail, featuring product catalogs, shopping cart functionality, and modern design aesthetics.',
      image: 'images/ladu.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: null,
      githubUrl: null,
      category: 'E-commerce',
      status: 'In Development',
      date: '2024',
      icon: ShoppingBag,
      color: 'from-pink-500 to-rose-500',
      featured: false,
      metrics: { progress: '75%', features: '12+', design: '90%' }
    },
    {
      title: 'Skyline Consultancy & Engineering',
      description: 'A professional corporate website for engineering consultancy services, featuring service portfolios, project showcases, and client testimonials.',
      image: 'images/sky.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: null,
      githubUrl: null,
      category: 'Corporate',
      status: 'In Development',
      date: '2024',
      icon: Building,
      color: 'from-gray-600 to-gray-800',
      featured: false,
      metrics: { progress: '60%', pages: '8+', animations: '15+' }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-700 border-green-200 shadow-green-100';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200 shadow-yellow-100';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200 shadow-gray-100';
    }
  };

  const projectStats = [
    { icon: Code, label: 'Projects Completed', value: '4+', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Happy Clients', value: '3+', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '100%', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, label: 'Technologies Used', value: '10+', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-600 mb-6">
            <Code size={16} className="mr-2" />
            My work showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in web development, from e-commerce platforms to corporate websites
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${project.featured ? 'ring-2 ring-blue-200' : ''}`}>
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-center">
                  <div className="flex items-center justify-center text-sm font-medium">
                    <Star size={14} className="mr-1 fill-current" />
                    Featured Project
                  </div>
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-xl`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-xs font-bold border shadow-lg ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">{project.category}</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Project Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="flex items-center px-6 py-3 bg-gray-100 text-gray-500 rounded-lg text-sm font-semibold">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects and opportunities. Let's create something amazing together!
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Start a Project
                </button>
                <a
                  href="/cv-cyuzuzo-pacifique.pdf"
                  download="Cyuzuzo_Pacifique_CV.pdf"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;