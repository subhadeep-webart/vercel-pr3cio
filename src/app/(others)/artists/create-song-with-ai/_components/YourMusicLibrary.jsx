'use client';

import useApp from '@/hooks/useApp';
import styles from '../createsong.module.scss';

const YourMusicLibrary = () => {
  const text = "Your Music Library";
  const letters = text.split("");

  const containerSize = 160;
  const center = containerSize / 2;
  const radius = 75;
  const arc = 270;
  const startAngle = 135;
  const angleStep = arc / (letters.length - 1);

  const { toggleIsCreateSongAISidebarOpen } = useApp();

  const handleMyLibrary = () => {
    toggleIsCreateSongAISidebarOpen();
  };

  const { isCreateSongAISidebarOpen } = useApp();

  return (
    <div
      // className="relative w-40 h-40 mx-auto"
      className={`relative w-40 h-40 mx-auto transition-all duration-300 origin-center ${isCreateSongAISidebarOpen ? 'scale-75' : 'scale-75 md:scale-100'
        }`}
    >

      {letters.map((char, i) => {

        const angle = startAngle + angleStep * i;
        const rad = (angle * Math.PI) / 180;
        const x = center + radius * Math.cos(rad);
        const y = center + radius * Math.sin(rad);

        return (
          <span
            key={i}
            className="absolute text-white text-sm font-semibold z-10"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}

      <div className={`absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-[#1A1A1A] rounded-full ${styles.your_music_library}`}>
        <div className="z-10 w-24 h-24 flex items-center justify-center bg-gradient-to-t from-[#98A5EA] to-white rounded-full">
          <img
            src="/images/music-library-img.png"
            alt="Music Library"
            className="w-20 h-20 object-contain"
          />
        </div>

        <button onClick={handleMyLibrary} type="button" className="absolute -bottom-4 bg-lime-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold z-20">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default YourMusicLibrary;
