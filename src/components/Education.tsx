import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'A0 Diploma in Computer Engineering',
      institution: 'University of Rwanda - College of Science and Technology (UR-CST)',
      period: '2023-Current',
      status: 'In Progress',
      description: 'Pursuing comprehensive education in computer engineering, covering both software and hardware aspects.',
    },
    {
      degree: 'A2 Diploma in Mathematics, Physics, and Computer Science (MPC)',
      institution: 'Ecole des Sciences Byimana',
      period: '2019-2022',
      status: 'Completed',
      description: 'Completed advanced secondary education with focus on STEM subjects, building strong foundation in mathematics, physics, and computer science.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in computer science and engineering
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <GraduationCap size={16} className="text-white" />
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {edu.status}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{edu.institution}</span>
                  </div>
                  
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;