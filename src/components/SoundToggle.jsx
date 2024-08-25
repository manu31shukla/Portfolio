import React, { useEffect, useRef } from 'react';
import soundIcon from '../assets/sound-icon.png'; 

const SoundToggle = ({ isSoundOn, toggleSound, isMobile }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isSoundOn) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isSoundOn]);

  return (
    <>
      <audio 
        ref={el => {
          audioRef.current = el;
          if (el) el.volume = 0.2; 
        }} 
        src="src/assets/japanese-traditional.mp3" 
        loop 
      />
      <div 
        className='absolute z-20' 
        style={{ 
          bottom: isMobile ? '55px' : '40px', 
          left: isMobile ? '25px' : '155px',
          width: isMobile ? '20px' : '305px', 
          height: isMobile ? '20px' : '305px'
        }}
      >
        <img
          src={soundIcon}
          alt="Sound Toggle"
          className='animate-enlarge' 
          style={{ 
            width: '100%', 
            height: '100%', 
            cursor: 'pointer', 
            opacity: isSoundOn ? 1 : 0.6
          }}
          onClick={toggleSound}
        />
      </div>
    </>
  );
};

export default SoundToggle;
