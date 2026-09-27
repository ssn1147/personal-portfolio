// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    { 
      title: 'NetShield AI 🛡️', 
      desc: 'Network anomaly detection and threat-monitoring system using ML and cybersecurity analytics.', 
      tech: ['Python', 'FastAPI', 'Machine Learning', 'Cybersecurity'] 
    },
    { 
      title: 'REICH 💰', 
      desc: 'India-focused personal finance and habit-building app with AI advice and unified dashboard.', 
      tech: ['Kotlin', 'Jetpack Compose', 'AI/ML'] 
    },
    { 
      title: 'GrowThem 🌱', 
      desc: 'AI-powered plant-care app with disease recognition, reminders, and e-commerce.', 
      tech: ['Kotlin', 'MVVM', 'AI'] 
    },
    { 
      title: 'vocal2local 📍', 
      desc: 'Hyperlocal marketplace with buying, selling, and WebSocket-based live bidding.', 
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'] 
    },
    { 
      title: 'PayloadCars 🚗', 
      desc: 'Car catalogue and management platform using Payload CMS, Next.js, and MongoDB.', 
      tech: ['Next.js', 'Payload CMS', 'MongoDB'] 
    },
    { 
      title: 'Infosys Cybersecurity 🔐', 
      desc: 'Threat-alerting workflows, incident management, and security-analytics dashboards.', 
      tech: ['Security Analytics', 'Threat Intel', 'Dashboards'] 
    },
  ];

  return (
    <section id="projects" className="bg-orange-50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-900">Selected Work</h2>
        <p className="text-gray-500 mb-16 text-center text-lg max-w-2xl mx-auto">A collection of projects spanning AI, Cybersecurity, Full-Stack, and Android development.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-50 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                <span className="text-5xl font-black text-white opacity-30 select-none">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}