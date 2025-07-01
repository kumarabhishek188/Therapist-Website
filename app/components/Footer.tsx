import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 border-t border-gray-700 dark:border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm items-center">
        <div className="flex flex-col items-center md:items-start">
          <Image src="/serena-blake-logo.jpg" alt="Dr. Serena Blake Therapy Logo" width={80} height={80} className="mb-3 rounded-full bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700" />
          <h4 className="text-lg font-bold mt-2">Dr. Serena Blake, PsyD</h4>
          <p className="text-gray-300">Clinical Psychologist</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <p className="flex items-center gap-2"><span role="img" aria-label="location">📍</span>1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p className="flex items-center gap-2"><span role="img" aria-label="phone">📞</span>(323) 555-0192</p>
          <p className="flex items-center gap-2"><span role="img" aria-label="email">📧</span><a href="mailto:serena@blakepsychology.com" className="underline hover:text-blue-300">serena@blakepsychology.com</a></p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Office Hours</h4>
          <p className="flex items-center gap-2"><span role="img" aria-label="clock">🕘</span>In-person: Tue & Thu, 10 AM–6 PM</p>
          <p className="flex items-center gap-2"><span role="img" aria-label="laptop">💻</span>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-10 text-xs">© {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</p>
    </footer>
  );
}
