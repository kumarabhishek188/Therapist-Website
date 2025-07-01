import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white group dark:text-white"
      style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
    >
      <div className="bg-black bg-opacity-50 dark:bg-opacity-80 px-6 py-12 rounded-xl text-center max-w-3xl transition-all duration-500 group-hover:bg-opacity-70 group-hover:shadow-2xl group-hover:-translate-y-2">
        <h2 className="text-sm uppercase tracking-wider mb-2 transition-colors duration-300 group-hover:text-yellow-300">
          Christian Counseling Services in Richmond & Central Virginia
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 transition-colors duration-300 group-hover:text-yellow-100">
          Professional Counseling for Christian Healing and Growth
        </h1>
        <p className="text-lg md:text-xl mb-6 transition-colors duration-300 group-hover:text-blue-100">
          Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
        </p>
        <p className="text-md md:text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-yellow-100">I want to work with you for...</p>
        <p className="text-lg text-blue-300 font-bold mb-6 transition-colors duration-300 group-hover:text-yellow-200">
          ➤ Greater Purpose in Your Life Direction
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          <span className="bg-yellow-500 dark:bg-yellow-700 text-black dark:text-white px-3 py-1 rounded-full font-semibold">⭐ Top Rated</span>
          <span className="bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full font-semibold">40+ Years Experience</span>
          <span className="underline">Testimonials</span>
          <span className="underline">Media Mentions</span>
        </div>
        <button className="bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-700 px-6 py-3 rounded-2xl font-bold shadow-button hover:from-accent hover:to-primary dark:hover:from-gray-700 dark:hover:to-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-accent/40 dark:focus:ring-gray-700">
          🌿 Start Healing Today
        </button>
      </div>
    </section>
  );
}
