// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-orange-100 via-orange-200 to-amber-200 text-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Abstract shapes in the background */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="text-center relative z-10 px-6">
        <p className="text-lg md:text-xl text-orange-600 font-semibold tracking-wide uppercase mb-4">Hey, I'm Shreyash Naik</p>
        <h2 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
          AI <span className="text-orange-500">Developer</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Passionate about building intelligent systems and machine learning models that solve real-world problems.
        </p>
        <a href="#projects" className="bg-gray-900 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          View My Work
        </a>
      </div>
    </section>
  );
}