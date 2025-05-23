import React, { useEffect, useRef, useState } from 'react';

function AnimatedCode() {
  const codeLines = [
    'class MobileApp {',
    '  void main() {',
    '    runApp(MyApp());',
    '  }',
    '}'];
  const [displayed, setDisplayed] = useState('');
  const line = useRef(0);
  const char = useRef(0);

  useEffect(() => {
    if (line.current < codeLines.length) {
      if (char.current < codeLines[line.current].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + codeLines[line.current][char.current]);
          char.current++;
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setDisplayed((prev) => prev + '\n');
        line.current++;
        char.current = 0;
        setTimeout(() => {}, 300);
      }
    }
  }, [displayed]);

  return (
    <pre className="text-green-400 font-mono text-sm whitespace-pre-line bg-gray-900 rounded-lg p-4 w-full h-32 overflow-auto mb-2">
      {displayed}
      <span className="animate-pulse">|</span>
    </pre>
  );
}

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Sol Taraf - Kişisel Bilgiler */}
        <div className="text-center md:text-left">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              <span className="inline-flex flex-wrap gap-2 justify-center md:justify-start">
                <span>Aziz Berat</span>
                <span>Taştan</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Mobile Development
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-center"
            >
              Projelerimi Gör
            </a>
            <a
              href="#contact"
              className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition duration-300 text-center"
            >
              İletişime Geç
            </a>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/azizberattastan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/azizberattastan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/berat.tastann?igsh=MTdhZG11dXNwZWh6NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
              <span className="text-sm sm:text-base">Instagram</span>
            </a>
          </div>
        </div>

        {/* Sağ Taraf - Bilgisayar Ekranları */}
        <div className="relative mt-8 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kod Ekranı - Sol */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-xl">
              <div className="bg-gray-900 rounded p-3 mb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="font-mono text-sm text-gray-300">
                <p className="text-blue-400">class</p>
                <p className="text-yellow-400">MobileApp</p>
                <p className="text-gray-400">{'{'}</p>
                <p className="text-purple-400">void</p>
                <p className="text-white">main()</p>
                <p className="text-gray-400">{'{'}</p>
                <p className="text-green-400">runApp</p>
                <p className="text-gray-400">(</p>
                <p className="text-yellow-400">MyApp</p>
                <p className="text-gray-400">());</p>
                <p className="text-gray-400">{'}'}</p>
                <p className="text-gray-400">{'}'}</p>
              </div>
            </div>

            {/* Kod Ekranı - Sağ */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-xl">
              <div className="bg-gray-900 rounded p-3 mb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="font-mono text-sm text-gray-300">
                <p className="text-blue-400">class</p>
                <p className="text-yellow-400">CounterWidget</p>
                <p className="text-gray-400">{'{'}</p>
                <p className="text-purple-400">int</p> <span className="text-white">counter = 0;</span>
                <p className="text-purple-400">void</p> <span className="text-white">increment()</span> <span className="text-gray-400">{'{'}</span>
                <span className="text-green-400">counter++;</span>
                <span className="text-gray-400">{'}'}</span>
                <p className="text-gray-400">{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 