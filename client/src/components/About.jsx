// src/components/About.jsx
export default function About() {
  const skills = [
    { category: 'Languages', items: ['Java', 'Kotlin', 'JavaScript', 'Python', 'SQL'] },
    { category: 'AI & Cybersecurity', items: ['Machine Learning', 'Scikit-learn', 'XGBoost', 'Anomaly Detection', 'Threat Monitoring'] },
    { category: 'Development', items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Android'] },
    { category: 'Databases & Tools', items: ['MongoDB', 'PostgreSQL', 'Docker', 'Git', 'Figma'] }
  ];
  
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Text Side */}
          <div className="sticky top-24">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">About Me</h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              I’m Shreyash Naik, a BCA student from Goa with a strong interest in technology, software development, and innovation. I enjoy building practical projects, exploring AI and cybersecurity, and learning new technologies.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I’m also interested in entrepreneurship, UI/UX design, and content creation, with a goal of turning creative ideas into useful digital products.
            </p>
            <a href="#contact" className="inline-block bg-orange-100 text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-orange-200 transition-colors">
              Let's Collaborate
            </a>
          </div>

          {/* Skills Side */}
          <div className="space-y-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-orange-50 p-8 rounded-3xl shadow-sm border border-orange-100">
                <h3 className="text-xl font-bold mb-5 text-gray-900">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm border border-gray-100 hover:scale-110 hover:text-orange-500 transition-transform cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}