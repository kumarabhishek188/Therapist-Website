import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-36 bg-[#d9f0ff] py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 group relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg group-hover:border-yellow-300 group-hover:shadow-yellow-200 transition-all duration-300">
            <Image
              src="/serena-blake.jpg"
              alt="Dr. Serena Blake"
              width={300}
              height={400}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4 bg-white p-4 rounded-xl shadow text-sm text-gray-800 group-hover:bg-yellow-50 transition-colors duration-300">
            <p className="font-bold text-lg text-primary">Dr. Serena Blake</p>
            <p className="text-xs text-gray-500">Licensed Clinical Psychologist (PsyD)</p>
            <p className="text-sm mt-1">⭐ 8 Years Experience • 500+ Client Sessions</p>
          </div>
        </div>
        <div className="flex-1">
          <span className="bg-yellow-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold shadow inline-block mb-2">
            About Dr. Serena Blake – Compassionate Care in Los Angeles, CA
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 drop-shadow mb-2">Hi, I'm Dr. Serena Blake</h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            I’m a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with over <strong>eight years of experience</strong> and more than <strong>500 client sessions</strong>.
            I blend <strong>evidence-based approaches</strong>—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety,
            strengthen relationships, and heal from trauma.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            Whether you meet me in my cozy Maplewood Drive office or connect virtually via Zoom, I’m committed to creating a <strong>safe, supportive space</strong> where you can feel heard,
            valued, and empowered to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
