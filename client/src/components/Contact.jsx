// src/components/Contact.jsx
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // NOTE: When we deploy, we will change this localhost URL to your live Render URL!
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error connecting to the server.');
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Let's build something great.</h2>
          <p className="text-gray-400 text-lg">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-800 p-10 rounded-3xl shadow-2xl space-y-6 border border-gray-700">
          <div>
            <label className="block text-sm mb-2 text-gray-300 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 focus:border-orange-500 outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-2 text-gray-300 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 focus:border-orange-500 outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-2 text-gray-300 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 focus:border-orange-500 outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors duration-300 transform hover:scale-[1.02]"
          >
            Send Message
          </button>
          
          {status && <p className="text-center text-orange-400 mt-4 font-medium">{status}</p>}
        </form>

        {/* Direct Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>
          <div className="flex justify-center items-center space-x-6">
            <a href="mailto:naikshreyash1147@gmail.com" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
              naikshreyash1147@gmail.com
            </a>
            <span className="text-gray-600">|</span>
            <a href="https://github.com/ssn1147" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}