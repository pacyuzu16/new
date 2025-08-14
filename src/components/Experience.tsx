import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Award, TrendingUp, Users, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'Web Developer',
      company: 'Titanium Smart Life',
      website: 'https://titaniumsmartlife.com',
      period: 'Jan 2024 – Present',
      location: 'Remote',
      type: 'Current',
      description: 'Built and maintained the company website, managed product listings, and improved user experience.',
      responsibilities: [
        'Developed and maintained responsive company website',
        'Managed product listings and inventory systems',
        'Optimized user experience and interface design',
        'Collaborated with team on digital marketing initiatives'
      ],
      achievements: [
        'Increased website traffic by 150%',
        'Improved page load speed by 40%',
        'Enhanced mobile responsiveness to 100%'
      ],
      skills: ['React', 'TypeScript', 'E-commerce', 'UI/UX Design']
    },
    {
      position: 'IT Assistant',
      company: 'Gisozi Cyber Café',
      website: null,
      period: 'Jul 2022 – Aug 2025',
      location: 'Gisozi, Kigali',
      type: 'Part-time',
      description: 'Helped customers with computer use, printing, scanning, and internet services. Gained hands-on experience in troubleshooting, customer support, and digital tools.',
      responsibilities: [
        'Provided technical support to customers',
        'Managed printing, scanning, and internet services',
        'Troubleshot hardware and software issues',
        'Maintained computer systems and equipment'
      ],
      achievements: [
        'Served 100+ customers monthly',
        'Reduced system downtime by 30%',
        'Improved customer satisfaction scores'
      ],
      skills: ['Technical Support', 'Hardware Maintenance', 'Customer Service', 'Problem Solving']
    }
  ];

  const experienceStats = [
    { icon: Briefcase, label: 'Years Experience', value: '2+', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Clients Served', value: '100+', color: 'from-green-500 to-emerald-500' },
    { icon: Target, label: 'Projects Completed', value: '4+', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '100%', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-600 mb-6">
            <Briefcase size={16} className="mr-2" />
            Professional journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and work experience
          </p>
        </div>

        {/* Experience Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experienceStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                  <Briefcase size={18} className="text-white" />
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl p-8 flex-grow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'Current' 
                        ? 'bg-green-100 text-green-700 shadow-green-100' 
                        : 'bg-blue-100 text-blue-700 shadow-blue-100'
                    }`}>
                      {exp.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <h4 className="text-xl text-blue-600 font-bold">{exp.company}</h4>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors p-1 hover:bg-blue-50 rounded"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{exp.description}</p>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target size={16} className="mr-2 text-purple-600" />
                      Key Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Briefcase size={16} className="mr-2 text-blue-600" />
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start leading-relaxed">
                          <span className="text-blue-500 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award size={16} className="mr-2 text-green-600" />
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start leading-relaxed">
                          <span className="text-green-500 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Work Together?</h3>
            <p className="text-blue-100 mb-6">
              I'm always looking for new opportunities to grow and contribute to meaningful projects.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;