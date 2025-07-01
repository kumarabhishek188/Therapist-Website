import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'Do you accept insurance?',
      a: 'No, but a superbill is provided for self-submission.',
    },
    {
      q: 'Are online sessions available?',
      a: 'Yes—all virtual sessions are held via Zoom.',
    },
    {
      q: 'What is your cancellation policy?',
      a: '24-hour notice is required for cancellations.',
    },
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-36 bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-200 py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white shadow-lg p-8 md:p-14">
        <h2 className="text-4xl font-extrabold text-center text-[#1a2a3a] mb-8 tracking-tight">FAQ</h2>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#f4faff] rounded-2xl px-6 py-5 shadow-sm">
              <button
                type="button"
                className="flex items-center w-full text-left gap-3 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e3eaf3] text-lg font-bold text-[#1a2a3a]">
                  {idx + 1}
                </span>
                <span className="flex-1 font-bold text-[#1a2a3a] text-lg">
                  {faq.q}
                </span>
                <span
                  className={`transition-transform duration-300 text-2xl ${
                    openIndex === idx ? 'rotate-45 text-[#fbbf24]' : 'text-[#1a2a3a]'
                  }`}
                >
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              {openIndex === idx && (
                <div className="pl-11 pr-2 pt-2 text-[#3b4a5a] text-base animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
