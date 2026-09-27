// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-900">Portfolio.</h1>
        <ul className="hidden md:flex space-x-8 items-center">
          <li><a href="#hero" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">About</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Projects</a></li>
          <li><a href="#contact" className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-orange-500 transition-colors font-medium">Get in touch</a></li>
        </ul>
      </div>
    </nav>
  );
}