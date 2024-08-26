import React from 'react';
import { FaCoffee, FaAward, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative min-h-screen bg-lightBrown text-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-coffee-pattern bg-cover bg-center opacity-30"></div>

      <div className="relative container mx-auto px-4 py-8 md:px-8 mt-16">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-8">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQH3mum_3OPGKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723529703833?e=1730332800&v=beta&t=_X9snaPQNPTzYKJYajxP71VJO_UGy7HSx1-QY7DO-2c" 
              alt="Manu Shukla"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-coffeeDark shadow-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-coffeeDark mt-4 md:mt-6 mb-4 relative">
            Welcome to <span className="text-coffeeLight">Manu's Brew</span> - Where Code Meets Coffee
          </h1>
          <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6 px-4 md:px-0">
            Savor the rich blend of technology and creativity with every line of code. Just like the perfect cup of coffee, my approach to software development is crafted with precision, passion, and a dash of innovation. Let’s brew something extraordinary together!
          </p>
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
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
          <div className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-coffeeDark mb-4 flex items-center">
              <FaCoffee className="mr-2 text-coffeeDark" />
              Hobbies - The Special Blends
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>☕ Exploring new tech trends - like discovering the perfect roast</li>
              <li>🎨 Designing creative UI/UX - crafting the visual flavor of the web</li>
              <li>🎮 Playing video games - a shot of fun and adrenaline</li>
              <li>🌍 Traveling - because every trip is like a fresh coffee experience</li>
              <li>📺 Watching anime - for a taste of diverse stories</li>
              <li>📖 Story-writing - blending words like a master barista</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-coffeeDark mb-4 flex items-center">
              <FaAward className="mr-2 text-coffeeDark" />
              Achievements - Brewed to Perfection
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>💻 Solved 250+ coding challenges - grinding through algorithms</li>
              <li>🔒 Mastered Linux and cybersecurity - protecting the brew</li>
              <li>🎨 Led UI/UX design projects - pouring creativity into every pixel</li>
              <li>📝 Published research on AI/ML - a deep dive into the science of coffee and code</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-coffeeDark mb-4 flex items-center">
            <FaUserGraduate className="mr-2 text-coffeeDark" />
            Education - The Art of Brewing Knowledge
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
              <img 
                src="https://www.akgec.ac.in/wp-content/uploads/2019/09/b.tech_.jpg" 
                alt="Ajay Kumar Garg Engineering College" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-coffeeDark">
                  Bachelor's Degree in Information Technology
                </h3>
                <p className="text-gray-800 text-sm md:text-base">
                  <strong>Ajay Kumar Garg Engineering College</strong>
                  <br />
                  Graduated with DIV-1 (7.41 CGPA). Relevant coursework included Advanced Web Development and Data Structures. During this time, I was an active member of Team Conatus, a college-based technical society where I honed my skills in teamwork and leadership through various projects and workshops.
                  <br />
                  <a 
                    href="https://www.akgec.ac.in/" 
                    className="inline-block mt-2 text-white bg-brown hover:bg-coffee px-2 py-1 rounded-md shadow-md transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit College Website
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
              <img 
                src="https://th.bing.com/th/id/OIP.2mlu_qccM-1pXmaN7UYnDgAAAA?rs=1&pid=ImgDetMain" 
                alt="Gurukul Montessori School" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-coffeeDark">
                  Intermediate
                </h3>
                <p className="text-gray-800 text-sm md:text-base">
                  <strong>Gurukul Montessori School</strong>
                  <br />
                  Percentage - 82.3. As the Academic Captain of the School Council, I learned valuable leadership and discipline skills that contributed to my overall growth and development.
                  <br />
                  <a 
                    href="https://gmsallahabad.com/" 
                    className="inline-block mt-2 text-white bg-brown hover:bg-coffee px-2 py-1 rounded-md shadow-md transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit School Website
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center">
              <img 
                src="https://th.bing.com/th/id/OIP.F3YwCjhLrK760XppHWXl_gHaDt?w=313&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Gurukul Montessori School High School" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-coffeeDark">
                  High School
                </h3>
                <p className="text-gray-800 text-sm md:text-base">
                <strong>Gurukul Montessori School</strong>
                <br />
                CGPA - 10. Achieved a perfect score and was recognized as a regional topper.
                <br />
                <a 
                  href="https://gmsallahabad.com/" 
                  className="inline-block mt-2 text-white bg-brown hover:bg-coffee px-2 py-1 rounded-md shadow-md transition-colors"
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
    </div>
  );
}

export default About;
