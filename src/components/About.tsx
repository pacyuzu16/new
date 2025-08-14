import React from 'react';
import { Users, Brain, Globe, Wrench, Code, Cloud, TrendingUp, Award, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Teamwork & Project Collaboration', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { name: 'Problem-Solving & Analytical Thinking', icon: Brain, color: 'bg-green-100 text-green-600' },
    { name: 'Online ICT Tools & Digital Collaboration', icon: Globe, color: 'bg-purple-100 text-purple-600' },
    { name: 'Computer Hardware & Maintenance', icon: Wrench, color: 'bg-orange-100 text-orange-600' },
    { name: 'Programming', icon: Code, color: 'bg-red-100 text-red-600' },
    { name: 'Cloud Computing', icon: Cloud, color: 'bg-cyan-100 text-cyan-600' },
  ];

  const languages = [
    { name: 'Kinyarwanda', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'French', level: 'Intermediate', percentage: 70 },
    { name: 'Japanese', level: 'Beginner', percentage: 30 },
  ];

  const achievements = [
    { icon: Award, title: 'Academic Excellence', description: 'Consistent high performance in Computer Engineering studies' },
    { icon: TrendingUp, title: 'Professional Growth', description: 'Rapid advancement from IT Assistant to Web Developer' },
    { icon: Target, title: 'Project Success', description: 'Successfully delivered multiple web development projects' },
    { icon: Zap, title: 'Innovation Focus', description: 'Always seeking creative solutions to complex problems' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-600 mb-6">
            <Users size={16} className="mr-2" />
            Get to know me better
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Engineering student with a passion for innovation and problem-solving. 
            Through academic projects, teamwork, and volunteering, I've developed strong technical 
            and leadership skills.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Code size={28} className="mr-3 text-blue-600" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center sm:text-left border border-gray-100 group"
                >
                  <div className={`w-14 h-14 ${skill.color} rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Globe size={28} className="mr-3 text-green-600" />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="space-y-3 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900 text-base sm:text-lg">{language.name}</span>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{language.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${language.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">{language.percentage}% Proficiency</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                <Target size={20} className="mr-2 text-blue-600" />
                My Approach
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                I believe in continuous learning and collaboration. Every challenge is an 
                opportunity to grow, and I'm committed to delivering quality results while 
                maintaining strong professional relationships.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life with innovative solutions and cutting-edge technology.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;