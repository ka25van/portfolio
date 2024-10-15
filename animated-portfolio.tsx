import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const galaxyColors = ['#8A2BE2', '#4B0082', '#9370DB', '#BA55D3', '#9932CC'];

const Star = ({ top, left, size }) => (
  <div 
    className="absolute rounded-full bg-white"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animation: `twinkle ${Math.random() * 5 + 3}s infinite`
    }}
  />
);

const AnimatedPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1
    }));
    setStars(newStars);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 relative overflow-hidden">
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
      <header className="text-center mb-12 relative z-10">
        <motion.h1 
          className="text-5xl font-bold mb-2 text-purple-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          KAVERAPPA M M
        </motion.h1>
        <motion.p 
          className="text-2xl text-purple-200"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          FullStack + DevOps Engineer
        </motion.p>
      </header>

      <nav className="mb-8 relative z-10">
        <ul className="flex justify-center space-x-4">
          {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((section, index) => (
            <motion.li 
              key={section}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`px-4 py-2 rounded-full text-lg ${activeSection === section.toLowerCase() ? 'bg-purple-600 text-white' : 'bg-gray-800 text-purple-300'}`}
                onClick={() => setActiveSection(section.toLowerCase())}
                style={{ backgroundColor: activeSection === section.toLowerCase() ? galaxyColors[index % galaxyColors.length] : 'rgba(26, 32, 44, 0.8)' }}
              >
                {section}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="relative z-10">
        {activeSection === 'about' && (
          <motion.section
            key="about"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">About Me</h2>
            <p className="text-gray-300">Senior System Engineer with years of thorough experience seeking a stimulating role to leverage technical expertise and analytical skills in driving data-driven solutions. Proven ability to design, implement, and optimize complex systems. Eager to contribute to a high-performing team and solve complex problems.</p>
          </motion.section>
        )}

        {activeSection === 'experience' && (
          <motion.section
            key="experience"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-200">Senior System Engineer</h3>
              <p className="text-gray-400">Infosys Limited, Mysore | April 2022-Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Designed and developed high-quality components for optimal performance and user satisfaction.</li>
                <li>Enhanced user experience and efficiency by streamlining processes and improving features.</li>
                <li>Maintained a scalable codebase and collaborative workflow to drive project success.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-200">System Administrator</h3>
              <p className="text-gray-400">Diya Systems Pvt Ltd (Glow Touch), Mysore</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Provided top-notch web advisory services, resolved complex issues, and recommended optimal solutions.</li>
                <li>Demonstrated effective communication skills and delivered tailored solutions.</li>
                <li>Leveraged expertise in marketing, customer requirements, and technical skills.</li>
              </ul>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section
            key="projects"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Projects</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-200">Meridian-Events</h3>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Developed Live Q&A Feature with Angular and Node.js, tracking responses in graphs.</li>
                <li>Created a Chatbot using existing API's to enhance user engagement and support. Additionally built a RAG chatbot using LLM, by utilizing the platform data.</li>
                <li>Enhanced features and fixed bugs reported in JIRA, contributing to project stability and functionality.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-200">CampMaster-DevOps Project</h3>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Developed a highly secure AWS EKS cluster with robust security rules, incorporating Docker and Kubernetes for efficient containerization and orchestration.</li>
                <li>Implemented CI/CD pipelines using Jenkins, integrating SonarQube for code quality analysis and Nexus for artifact management.</li>
                <li>Leveraged Grafana for comprehensive monitoring, utilizing Linux as the foundation for stability and flexibility, and logging tools for optimized performance and user experience.</li>
              </ul>
              <a href="https://github.com/ka25van/CampMaster-" className="text-purple-400 hover:underline">Project Link</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-200">Advanced Backend Development</h3>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Engineered a robust Node.js backend for a video hosting platform, integrating essential features like user authentication, video upload, and social interactions.</li>
                <li>Fortified security with JWT, bcrypt, and access/refresh tokens, adhering to industry best practices.</li>
                <li>Meticulously crafted a comprehensive project, investing significant time and effort to deliver a valuable learning experience.</li>
              </ul>
              <a href="https://github.com/ka25van/backendAdvanced" className="text-purple-400 hover:underline">Project Link</a>
            </div>
          </motion.section>
        )}

        {activeSection === 'skills' && (
          <motion.section
            key="skills"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Skills</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Full-stack development expertise: Proficient in frontend (HTML, CSS, JS, Angular, React) and backend (Python, Node.js, MongoDB, REST API) technologies.</li>
              <li>Cloud and DevOps mastery: Experience with AWS, Docker, Kubernetes, CI/CD pipelines, and security best practices.</li>
              <li>Data-driven insights: Skilled in data science (Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, SQL) and machine learning deployment.</li>
              <li>Comprehensive toolset: Familiar with testing (Postman), version control (GitHub), and soft skills essential for collaborative projects.</li>
            </ul>
          </motion.section>
        )}

        {activeSection === 'education' && (
          <motion.section
            key="education"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Education</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-200">Bachelor of Engineering</h3>
              <p className="text-gray-400">Coorg Institute Of Technology | 2021</p>
              <p className="text-gray-300">GPA: 8.0</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-200">Pre-University</h3>
              <p className="text-gray-400">Vidyanikethana PU College, Gonikoppal | 2017</p>
              <p className="text-gray-300">GPA: 80.33</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-200">SSLC</h3>
              <p className="text-gray-400">St.Thomas English Medium School, Gonikoppal | 2015</p>
              <p className="text-gray-300">GPA: 90.56</p>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="mt-12 text-center relative z-10">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/ka25van" className="text-purple-300 hover:text-purple-100 text-2xl" aria-label="GitHub">
            &#x1F4BB;
          </a>
          <a href="https://www.linkedin.com/in/kaverappa-mm" className="text-purple-300 hover:text-purple-100 text-2xl" aria-label="LinkedIn">
            &#x1F4BC;
          </a>
          <a href="mailto:kavankaverappa5@gmail.com" className="text-purple-300 hover:text-purple-100 text-2xl" aria-label="Email">
            &#x2709;
          </a>
          <a href="tel:9740495812" className="text-purple-300 hover:text-purple-100 text-2xl" aria-label="Phone">
            &#x260E;
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AnimatedPortfolio;
