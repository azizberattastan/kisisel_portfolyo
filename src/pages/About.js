import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Hakkımda</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sol Taraf - Kişisel Bilgiler */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Kişisel Bilgiler</h3>
              <p className="text-gray-300 leading-relaxed">
                Merhaba! Ben Aziz Berat Taştan, mobil uygulama geliştirme konusunda tutkulu bir yazılım geliştiricisiyim. 
                Dart ve Flutter teknolojileri ile modern, kullanıcı dostu ve performanslı mobil uygulamalar geliştiriyorum. 
                Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Eğitim</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium text-white">Mobil Uygulama Geliştirme</h4>
                  <p className="text-gray-400">Flutter & Dart</p>
                  <p className="text-gray-300">2023 - Devam Ediyor</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white">Bilgisayar Mühendisliği</h4>
                  <p className="text-gray-400">Üniversite</p>
                  <p className="text-gray-300">2023 - 2027</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">İlgi Alanları</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-900 text-blue-200 rounded-full">Mobile Development</span>
                <span className="px-4 py-2 bg-blue-900 text-blue-200 rounded-full">Flutter</span>
                <span className="px-4 py-2 bg-blue-900 text-blue-200 rounded-full">Dart</span>
                <span className="px-4 py-2 bg-blue-900 text-blue-200 rounded-full">Clean Code</span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Yetenekler */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Yetenekler</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Flutter</span>
                    <span className="text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Dart</span>
                    <span className="text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Python</span>
                    <span className="text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">C#</span>
                    <span className="text-gray-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">React</span>
                    <span className="text-gray-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Diller</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Türkçe</span>
                    <span className="text-gray-400">Anadil</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">İngilizce</span>
                    <span className="text-gray-400">İyi</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 