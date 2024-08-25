import React from 'react';
import { FaCoffee, FaAward, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative min-h-screen bg-lightBrown text-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-coffee-pattern bg-cover bg-center opacity-30"></div>

      <div className="relative container mx-auto px-6 py-12 md:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-8">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQH3mum_3OPGKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723529703833?e=1730332800&v=beta&t=_X9snaPQNPTzYKJYajxP71VJO_UGy7HSx1-QY7DO-2c" 
              alt="Manu Shukla"
              className="w-64 h-64 rounded-full border-4 border-coffeeDark shadow-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-coffeeDark mt-6 mb-4 relative">
            Welcome to my cozy corner, I'm <span className="text-coffeeLight">Manu Shukla</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I’m a passionate software developer who loves crafting innovative web applications and engaging user experiences. Let's brew some great ideas together!
          </p>
          <div className="mt-8 flex space-x-4">
            <a 
              href="mailto:manu31shukla@gmail.com" 
              className="bg-coffeeDark text-gray-200 px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-coffeeLight focus:outline-none focus:ring-2 focus:ring-coffeeDark"
            >
              Hire Me
            </a>
            <a 
              href="https://drive.google.com/file/d/1QvHK3t0KXV7V0fUaJIoB1KSMaE5adgz-/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coffeeDark text-gray-200 px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-coffeeLight focus:outline-none focus:ring-2 focus:ring-coffeeDark"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="mt-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-coffeeDark mb-4 flex items-center">
            <FaCoffee className="mr-2 text-coffeeDark" />
            Hobbies
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            <li>☕ Exploring new tech trends</li>
            <li>🎨 Designing creative UI/UX</li>
            <li>🎮 Playing video games</li>
            <li>🌍 Traveling and exploring new cultures</li>
            <li>📺 Watching anime — ping me if you love Anime ^-^</li>
            <li>📖 Love story-writing too</li>
          </ul>
        </div>

        <div className="mt-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-coffeeDark mb-4 flex items-center">
            <FaAward className="mr-2 text-coffeeDark" />
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            <li>💻 Solved 250+ problems on Data Structures and algorithms across platforms.</li>
            <li>🔒 Mastered advanced techniques and hands-on Linux and defensive strategies against modern cyber threats in a physical mode setting</li>
            <li>🎨 Led UI/UX design, frontend development, and video editing with Team Conatus, organized technical workshops & seminars.</li>
            <li>📝 Co-authored a research paper on Analysis of Different Objects using AI/ML, published in GRENZE International Journal of Engineering and Technology</li>
          </ul>
        </div>
        </div>

         <div className="mt-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-coffeeDark mb-4 flex items-center">
            <FaUserGraduate className="mr-2 text-coffeeDark" />
            Education
          </h2>
          <div className="flex items-center mb-8">
            <img 
              src="https://www.akgec.ac.in/wp-content/uploads/2019/09/b.tech_.jpg" 
              alt="Ajay Kumar Garg Engineering College" 
              className="w-32 h-32 rounded-lg object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-coffeeDark">
                Bachelor's Degree in Information Technology
              </h3>
              <p className="text-gray-800">
                <strong>Ajay Kumar Garg Engineering College</strong>
                <br />
                Graduated with DIV-1 (7.41 CGPA). Relevant coursework included Advanced Web Development and Data Structures. During this time, I was an active member of Team Conatus, a college-based technical society where I honed my skills in teamwork and leadership through various projects and workshops.
                <br />
                <a 
                  href="https://www.akgec.ac.in/" 
                  className="text-blue-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit College Website
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <img 
              src="https://th.bing.com/th/id/OIP.2mlu_qccM-1pXmaN7UYnDgAAAA?rs=1&pid=ImgDetMain" 
              alt="Gurukul Montessori School" 
              className="w-32 h-32 rounded-lg object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-coffeeDark">
                Intermediate
              </h3>
              <p className="text-gray-800">
                <strong>Gurukul Montessori School</strong>
                <br />
                Percentage - 82.3. As the Academic Captain of the School Council, I learned valuable leadership and discipline skills that contributed to my overall growth and development.
                <br />
                <a 
                  href="https://gmsallahabad.com/" 
                  className="text-blue-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit School Website
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Gurukul Montessori School High School" 
              className="w-32 h-32 rounded-lg object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-coffeeDark">
                High School
              </h3>
              <p className="text-gray-800">
                <strong>Gurukul Montessori School</strong>
                <br />
                CGPA - 10. Achieved a perfect score and was recognized as a regional topper.
                <br />
                <a 
                  href="https://gmsallahabad.com/" 
                  className="text-blue-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit School Website
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
