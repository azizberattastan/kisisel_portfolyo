import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Mobil Geliştirme',
      items: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 85 },
      ],
    },
    {
      category: 'Programlama Dilleri',
      items: [
        { name: 'Python', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'React', level: 70 },
      ],
    },
    {
      category: 'Veritabanı',
      items: [
        { name: 'SQLite', level: 85 },
      ],
    },
    {
      category: 'Araçlar & Teknolojiler',
      items: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Android Studio', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Yeteneklerim</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Sürekli Öğrenme</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Yazılım geliştirme alanında sürekli kendimi geliştiriyor ve yeni teknolojileri öğreniyorum. 
            Mobil uygulama geliştirme ve Python programlama konularında uzmanlaşmaya odaklanıyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills; 