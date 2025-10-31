'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const startDate = new Date('2024-07-30T00:00:00');
  const [timePassed, setTimePassed] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimePassed(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    'https://i.ibb.co/jPxd2FtV/IMG-20251010-WA0009.jpg',
    'https://i.ibb.co/W4Tv5gg6/IMG20240810151506.jpg',
    'https://i.ibb.co/4gtDPHHm/20241229-135550.jpg',
    'https://i.ibb.co/ks61yrRT/IMG20240829154409.jpg',
    'https://i.ibb.co/My25H727/IMG20240913114433.jpg',
    'https://i.ibb.co/gMW3Hv1D/Snapchat-1266439723.jpg',
    'https://i.ibb.co/8gbpvjzT/Snapchat-126560018.jpg',
    'https://i.ibb.co/q3XCs6f3/Snapchat-507704104.jpg',
    'https://i.ibb.co/4wcLjFvn/IMG-20241030-WA0011.jpg',
    'https://i.ibb.co/3mJVrMPc/IMG20241116134626.jpg',
    'https://i.ibb.co/VYq3v197/IMG20241102180202.jpg',
    'https://i.ibb.co/qHcyg7n/IMG20241130143328.jpg',
    'https://i.ibb.co/ZpV4wGtm/IMG20241128140300.jpg',
    'https://i.ibb.co/7xZXb0Cp/IMG20241219113938.jpg',
    'https://i.ibb.co/s9T4hG65/IMG20241219113955.jpg',
    'https://i.ibb.co/RpkTYcvj/IMG-20241230-WA0016.jpg',
    'https://i.ibb.co/wFKLcmJh/IMG-20250815-WA0043.jpg',
    'https://i.ibb.co/1fpQs5h0/IMG-20250517-WA0039.jpg',
    'https://i.ibb.co/s9T4hG65/IMG20241219113955.jpg',
    'https://i.ibb.co/Xrwrp5qG/IMG20250101110001.jpg',
  ];

  return (
    <div className="min-h-screen bg-pink-600 flex flex-col items-center">
      {/* Sticky Navbar */}
      <nav className="w-full sticky top-0 bg-pink-800 text-white z-50 shadow-md backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide">Our Little Universe 🌏</h1>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="w-full max-w-3xl mb-4 p-6">
        <div className="flex items-center sm:flex-col sm:items-center sm:gap-4 gap-4">
          <img
            src="https://i.ibb.co/jPxd2FtV/IMG-20251010-WA0009.jpg"
            alt="Profile"
            className="w-32 h-32 sm:w-30 sm:h-30 rounded-full object-cover border-4 border-white shadow-md"
          />

          <div className="flex flex-col justify-center sm:items-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Mr & Mrs Parida 💞</h2>
            <div className="text-gray-100 font-medium text-sm sm:text-base mt-1 sm:mt-2 flex flex-col">
              we crossed :
              <span className='font-bold'>  {timePassed} </span>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-6 text-gray-100 text-start sm:text-center">
          In a world of billions, we found each other — not by chance, but by destiny. Together, we turn ordinary moments into timeless memories.💫
        </div>

        {/* Decorative separator line after description */}
        <hr className="border-t border-white/30 w-full max-w-3xl my-4" />
      </div>
      {/* Gallery Section */}
      <div className="w-full max-w-5xl columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 px-4 pb-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-full rounded-2xl object-cover mb-4 break-inside-avoid shadow-md hover:scale-105 hover:opacity-90 transition-transform duration-300 shadow-md"
          />
        ))}
      </div>
    </div>
  );
}  