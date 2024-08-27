import React, {useState} from 'react';

const HomeInfo = ({ currentStage }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);


  const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'},
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'},
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'},
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'},
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'},
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'},
    { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'},
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg'},
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'},
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'},
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'},
    { name: ' C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'},
  ];

  const projects = [
    {
      name: 'Score if you Can!',
      description: 'Classic Pong game with a modern twist',
      techStack: 'https://img.icons8.com/?size=100&id=8fkW1CkMYnE8&format=png&color=000000',
      image: 'https://github.com/manu31shukla/Phaser-game/blob/main/public/assets/Demo-video.gif?raw=true',
      longDescription: `Developed a classic Pong game with a modern twist. Implemented a challenging AI logic to improve
      user retention and interest by making it difficult to score against the AI. Utilized the Parcel zero-config bundler for seamless
      development and leveraged Phaser’s physics engine to control the ball and paddles accurately.`,
      githubLink: 'https://github.com/manu31shukla/Phaser-game',
      hostedLink: 'https://score-if-you-can.netlify.app/'
    },
    {
      name: 'ShowRizz',
      description: 'Movie application',
      techStack: 'https://img.icons8.com/?size=100&id=11074&format=png&color=000000',
      image: 'https://private-user-images.githubusercontent.com/82714021/241398997-c5f99c50-39c5-48ae-a5b9-f172c7164c76.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ3NDI3MTgsIm5iZiI6MTcyNDc0MjQxOCwicGF0aCI6Ii84MjcxNDAyMS8yNDEzOTg5OTctYzVmOTljNTAtMzljNS00OGFlLWE1YjktZjE3MmM3MTY0Yzc2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI3VDA3MDY1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRhZDExNmZiNWY2ODgzMjcyM2JiM2U4NmJiZTc5OTlmODY0OTJkODljNTk0Yjg2Mjg2YTQ1ZjFmNzcyZjY2ZDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9rPVTZz2C4BxBZxW09bGoK-7_I7rbJA7EeDfzZml2I4',
      longDescription: `Movie application built with React.js, JavaScript, HTML, and CSS. Utilized the tvmaze API to display a
      curated list of movies with detailed information. Implemented search and browse functionality, enabling users to view movie
      details and book tickets; data is stored in local storage, enhancing user retention by 25%.`,
      githubLink: 'https://github.com/manu31shukla/Show-Bizz',
      hostedLink: 'https://warm-treacle-c7f71b.netlify.app/'
    },
    {
      name: 'Weather Check Chrome Extension',
      description: 'Weather application',
      techStack: 'https://img.icons8.com/?size=100&id=pRGHNxNNTREQ&format=png&color=000000',
      image: 'https://i0.wp.com/timleland.com/wp-content/uploads/2020/08/Old-Weather-Extension.png?resize=1024%2C640&ssl=1',
      longDescription: `Developed a Chrome extension using JavaScript, HTML, and CSS. Added
      real-time weather information, including temperature, humidity, and more, to Chrome’s toolbar or as a pop-up window.
      User-friendly installation and usage for quick access to weather updates, resulting in a 4.8/5 test user rating.`,
      githubLink: 'https://github.com/manu31shukla/Weather-extension',
      hostedLink: 'https://github.com/manu31shukla/Weather-extension'
    },
    {
      name: 'Glow Do',
      description: 'Feature-rich Todo application',
      techStack: 'https://img.icons8.com/?size=100&id=43202&format=png&color=000000',
      image: 'https://github.com/manu31shukla/Todo-Application/blob/main/demo-video.gif?raw=true',
      longDescription: `Created a feature-rich Todo application using React, Vite, HTML/CSS, and JavaScript. Allows users to create,
      read, mark complete, and delete tasks with a responsive design versatile to different screen sizes. Utilized Bootstrap for
      enhanced styling and Git/GitHub for version control.`,
      githubLink: 'https://github.com/manu31shukla/Todo-Application',
      hostedLink: 'https://github.com/manu31shukla/Weather-extension'
    },
    {
      name: 'Portfolio',
      description: `You're looking at it!`,
      techStack: 'https://img.icons8.com/?size=100&id=AfM2kzPzTz6Q&format=png&color=000000',
      image: 'path/to/project2-image.png',
      longDescription: `Developed a personal portfolio using React.js, Tailwind CSS, and Figma. Created a responsive design for
      seamless viewing on different devices. Implemented a contact form with validation to enhance user engagement and utilized
      Figma for design prototyping.`,
      githubLink: 'https://manu31shukla.github.io/Chatbot/',
      hostedLink: 'https://manu31shukla.github.io/Chatbot/',
    },
    {
      name: 'Designing Projects',
      description: 'Designing projects',
      techStack: 'https://img.icons8.com/?size=100&id=x51rXOCxzN33&format=png&color=000000',
      image: 'path/to/project2-image.png',
      longDescription: `Designing projects using Figma and Adobe XD. Created wireframes, mockups, and prototypes for various
      applications and websites. Collaborated with developers to ensure designs were implemented accurately and efficiently.`,
      designPortfolio: 'https://www.figma.com/file/1J9Z2Q7',
    }
  ];

  const experiences = [
    {
      startMonth: 'Aug ',
      startYear: 2024,
      endMonth: 'Present',
      company: 'AI Cade',
      companyLogo: 'https://media.licdn.com/dms/image/v2/C560BAQFu136sEJR8-A/company-logo_200_200/company-logo_200_200/0/1679983864278/braincade_logo?e=1732752000&v=beta&t=fatpZk9PUSwqWpgDZXMMuQwAOJtXaFcR2T4NPp_KorU',
      position: 'Javascript Developer Intern',
      details: `1. 2D Game Development: Developed and implemented 2D game mechanics using Phaser, React.js, and other modern
      JavaScript frameworks.
      2.Collaborative Projects: Worked with designers and developers to create innovative games, ensuring high-quality code
      and smooth performance.`,
      screenshots: ['path/to/screenshot1.png', 'path/to/screenshot2.png']
    },
    {
      startMonth: 'Jul ',
      startYear: 2023,
      endMonth: 'Sep ',
      endYear: 2023,
      company: 'Sangha',
      companyLogo: 'https://media.licdn.com/dms/image/v2/D4D0BAQG1DN_vVDUh4A/company-logo_200_200/company-logo_200_200/0/1685947183080?e=1732752000&v=beta&t=JMwH2LlrCA65zUIfk1WhJI0F3rnZnhrky4xq4aruy1g',
      position: 'Software Developer Intern',
      details: `1. Feature Enhancement: Enhanced features including multiple event images, recurring event days, and attendee spot
      visibility using Material UI libraries and TypeScript, leading to a 15% increase in event attendance.         
      2. Code Optimization: Optimized event creation logic and executed a code of conduct review using NodeJS, APIs, and
      GraphQL for improved UI efficiency.`,
      screenshots: ['path/to/screenshot3.png', 'path/to/screenshot4.png']
    },
    {
      startMonth: 'Feb ',
      startYear: 2023,
      endMonth: 'Apr ',
      endYear: 2023,
      company: 'SpellWork',
      companyLogo: 'https://img.icons8.com/?size=100&id=u8QOFrHdMqkX&format=png&color=000000',
      position: 'UI/UX Designer Intern',
      details: `1. Feature Enhancement: Enhanced features including multiple event images, recurring event days, and attendee spot
      visibility using Material UI libraries and TypeScript, leading to a 15% increase in event attendance.         
      2. Code Optimization: Optimized event creation logic and executed a code of conduct review using NodeJS, APIs, and
      GraphQL for improved UI efficiency.`,
      screenshots: ['path/to/screenshot3.png', 'path/to/screenshot4.png']
    },
  ];
  const renderPopup = () => {
    switch (currentStage) {
      case 4:
        return (
          <div className="popup animate-unfold bg-gradient-to-r from-[#f5f5dc] to-[#ede0c9] border-2 border-[#3e2723] p-4 md:p-6 rounded-xl shadow-lg text-center max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] mx-auto">
            <h2 className="text-[#3e2723] text-lg md:text-xl font-bold tracking-wide mb-3 flex items-center justify-center">
              👋 Welcome to My Coffee Shop <span className="ml-2 animate-pulse">☕</span>
            </h2>
            <p className="text-[#3e2723] mt-2 text-sm md:text-base">
              Hello! I'm <span className="font-bold underline">Manu Shukla</span>, a software developer. Let's explore my portfolio together!
            </p>
          </div>
        );
      case 3:
        return (
          <div className="popup animate-unfold bg-gradient-to-r from-[#f5f5dc] to-[#ede0c9] border-2 border-[#3e2723] p-4 md:p-6 rounded-xl shadow-lg text-center max-w-[90%] sm:max-w-[80%] lg:max-w-[50%] mx-auto">
            <h2 className="text-[#3e2723] text-lg md:text-xl font-bold tracking-wide mb-3 flex items-center justify-center">
              📋 Menu 📋
            </h2>
            <p className="text-[#3e2723] mb-3 text-xs md:text-sm">
              👨‍💻 Here are the skills I offer:
            </p>
            <div className="flex flex-wrap justify-center mt-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item w-12 h-12 sm:w-20 sm:h-20 flex flex-col items-center">
                  <img src={skill.logo} alt={skill.name} className="w-8 h-8 sm:w-12 sm:h-12 object-contain cursor-pointer transition-transform transform hover:scale-110" />
                  <p className="mt-2 text-[#3e2723] text-xs sm:text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="popup animate-unfold bg-gradient-to-r from-[#f5f5dc] to-[#ede0c9] border-2 border-[#3e2723] p-4 md:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-[80%] lg:max-w-[95%] mx-auto">
            <h2 className="text-[#3e2723] text-lg md:text-xl font-bold text-center">☕ Shop's Best Orders ☕</h2>
            <p className="text-[#3e2723] mt-2 text-center">👨‍💻 Personal projects:</p>
            <div className="mt-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between border-b border-[#3e2723] py-2 cursor-pointer hover:bg-brown"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center w-full">
                    <img src={project.techStack} alt={`${project.name} Tech Stack`} className="w-6 h-6 sm:w-12 sm:h-12 object-contain" />
                    <div className="ml-4">
                      <h3 className="text-[#3e2723] font-semibold text-xs sm:text-sm md:text-base">{project.name}</h3>
                      <p className="text-[#3e2723] text-xs sm:text-sm md:text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selectedProject && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setSelectedProject(null)}>
                <div className="bg-darkBrown text-white p-4 md:p-6 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[50%] w-full animate-unfold" onClick={e => e.stopPropagation()}>
                  <h2 className="text-[#3e2723] text-sm md:text-xl font-bold">{selectedProject.name}</h2>
                  <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-38 sm:h-48 object-cover mt-4" />
                  <p className="text-[#3e2723] mt-4 text-xs md:text-base">{selectedProject.longDescription}</p>
                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.githubLink}
                      className="bg-brown text-white py-2 px-4 rounded hover:bg-[#3e2723] transition duration-300 text-xs sm:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Link
                    </a>
                    <a
                      href={selectedProject.hostedLink}
                      className="bg-brown text-white py-2 px-4 rounded hover:bg-[#3e2723] transition duration-300 text-xs sm:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hosted Link
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case 1:
        return (
          <div className="popup animate-unfold bg-gradient-to-r from-[#f5f5dc] to-[#ede0c9] border-2 border-[#3e2723] p-4 md:p-6 rounded-lg shadow-lg max-w-[100%] sm:max-w-[80%] lg:max-w-[100%] mx-auto">
            <h2 className="text-[#3e2723] text-lg md:text-xl font-bold text-center">☕ Barista's Experience ☕</h2>
            <div className="mt-4">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="flex flex-col border-b border-[#3e2723] py-2 cursor-pointer hover:bg-brown"
                  onClick={() => setSelectedExperience(experience)}
                >
                  <div className="flex items-center justify-between space-x-2 sm:space-x-4 md:space-x-6">
                    <img src={experience.companyLogo} alt={`${experience.company} Logo`} className="w-12 h-12 object-contain" />
                    <h3 className="text-[#3e2723] font-semibold text-xs sm:text-md md:text-base">{experience.company}</h3>
                    <p className="text-[#3e2723] text-xs md:text-sm">{experience.startMonth}{experience.startYear} - {experience.endMonth}{experience.endYear}</p>
                  </div>
                  <p className="text-[#3e2723] text-xs md:text-sm mt-1">{experience.position}</p>
                </div>
              ))}
            </div>
            {selectedExperience && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
                onClick={() => setSelectedExperience(null)}
              >
                <div
                  className="bg-darkBrown text-white p-4 md:p-6 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[50%] w-full animate-unfold"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-[#3e2723] text-lg md:text-xl font-bold">{selectedExperience.company}</h2>
                  <p className="text-[#3e2723] mt-4 text-xs md:text-base">{selectedExperience.details}</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {selectedExperience.screenshots.map((screenshot, index) => (
                      <a key={index} href={screenshot} target="_blank" rel="noopener noreferrer">
                        <img src={screenshot} alt="Screenshot" className="w-full h-24 md:h-32 object-cover rounded-lg" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-info">
      {renderPopup()}
    </div>
  );
};

export default HomeInfo;
