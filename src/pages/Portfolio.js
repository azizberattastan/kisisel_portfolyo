import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Etsy Mağaza Projesi',
      description: 'Online mağaza yönetimi ve ürün takibi konularında işlevsellik sağlayan bir Python projesi. Mağaza yönetimi ve ürün takibi için geliştirilmiş kapsamlı bir çözüm.',
      image: '/images/etsy-project.jpg',
      technologies: ['Python', 'SQLite', 'PyQt5'],
      link: 'https://github.com/azizberattastan/Etsy_magaza_projem'
    },
    {
      title: 'Kelime İşlemci',
      description: 'Metin düzenleme ve kelime işlem yetenekleri içeren, kullanıcıların metin oluşturma ve düzenleme ihtiyaçlarına çözüm sunan bir Python uygulaması.',
      image: '/images/word-processor.jpg',
      technologies: ['Python', 'Tkinter', 'SQLite'],
      link: 'https://github.com/azizberattastan/kelime_islemci'
    },
    {
      title: 'Soru Bankası',
      description: 'Eğitim amaçlı hazırlanmış, farklı konularda soruları depolayıp yönetmeye olanak tanıyan bir Python projesi.',
      image: '/images/question-bank.jpg',
      technologies: ['Python', 'SQLite', 'Tkinter'],
      link: 'https://github.com/azizberattastan/soru_bankasi'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projelerim</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl flex flex-col items-center p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition duration-300 font-semibold"
              >
                GitHub'da Görüntüle
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto">
            Tüm projelerimde Python programlama dilini kullanıyor, temiz kod yazıyor ve 
            kullanıcı deneyimini ön planda tutuyorum. Her projede yeni teknolojiler öğreniyor 
            ve kendimi geliştiriyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 