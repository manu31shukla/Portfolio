import React from 'react';

const Contact = () => {
  const profiles = [
    { name: 'GitHub', url: 'https://github.com/manu31shukla', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manu31shukla', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg' },
    { name: 'Gmail', url: 'mailto:manu31shukla@gmail.com', logo: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-gmail-1.png&r=0&g=0&b=0' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/manu31shukla', logo: 'https://miro.medium.com/max/333/1*1W0-bbmt4iiEpp_pPrS0VQ.png' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/manu31shukla', logo: 'https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png' },
    { name: 'GeeksforGeeks', url: 'https://auth.geeksforgeeks.org/user/manu31shukla', logo: 'https://www.levelupcollege.com/wp-content/uploads/2022/07/gfg-logo.png' },
  ];

  return (
    <div className="flex flex-col items-center bg-lightBrown text-brown-800 p-6 font-cursive">
      <div className="relative mb-6 mt-16">
        <img src="src/assets/girl-hello.gif" alt="Animated Barista" className="w-108 animate-wave" />
      </div>
      <div className="flex flex-wrap justify-center p-4 rounded-lg shadow-lg bg-coffee-pattern bg-cover bg-center opacity-90">
        {profiles.map((profile, index) => (
          <a 
            key={index} 
            href={profile.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-4 my-2 transition-transform transform hover:-translate-y-2 flex items-center"
          >
            <img src={profile.logo} alt={`${profile.name} Logo`} className="w-12 h-12 object-contain" />
            <div className="ml-2 text-sm text-coffeeDark hidden md:block">
              {profile.name}
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8 text-coffeeDark">
        <p>Let's brew some code together!</p>
        <p className="italic">- Manu, the Barista</p>
      </div>
      <div className="relative mt-12">
        <img src="https://th.bing.com/th/id/R.6b099697c0ebaa4ba28405ea239f3e8f?rik=D246Qv%2bkvhOxZw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCoffee-Cup-PNG-Pic.png&ehk=Wsx3DkK5hEpCILd%2bi6s3r4hKwcP6GxdlHsdwoM3EFps%3d&risl=&pid=ImgRaw&r=0" alt="Coffee Cup" className="w-36 cursor-pointer mx-auto" />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-lg text-coffeeDark opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:top-0">
          manu31shukla@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
