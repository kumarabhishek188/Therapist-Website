import React from 'react';

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-36 bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-200 py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary">
            <img
              src="/anxiety.jpg"
              alt="Anxiety and Stress Management"
              className="rounded-lg w-full h-56 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
              Anxiety & Stress Management
            </h3>
            <p className="text-gray-600">
              If you're feeling overwhelmed, constantly on edge, or anxious in daily life, I provide tools and therapeutic support to help manage stress,
              calm racing thoughts, and restore a sense of balance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary">
            <img
              src="/relationship.jpg"
              alt="Relationship Counseling"
              className="rounded-lg w-full h-56 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
              Relationship Counseling
            </h3>
            <p className="text-gray-600">
              I help individuals and couples navigate communication issues, rebuild trust, and deepen emotional connection.
              Whether you’re facing conflict or drifting apart, we’ll work together to strengthen your relationship.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary">
            <img
              src="/trauma.jpg"
              alt="Trauma Recovery"
              className="rounded-lg w-full h-56 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
              Trauma Recovery
            </h3>
            <p className="text-gray-600">
              Healing from trauma takes time—and you don’t have to do it alone. I create a safe space to process painful memories and develop healthy coping strategies that support long-term recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
