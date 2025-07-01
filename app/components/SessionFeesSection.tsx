import React from 'react';

export default function SessionFeesSection() {
  return (
    <section className="scroll-mt-36 bg-[#d9f0ff] py-16 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white shadow-lg p-8 md:p-14 flex flex-col gap-8">
        <h3 className="text-4xl font-extrabold text-center text-[#1a2a3a] mb-6 tracking-tight">Session Fees</h3>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center">
          <div className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-center gap-2 border border-[#e3eaf3] transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-[#fbbf24] cursor-pointer">
            <div className="text-5xl font-extrabold text-[#1a2a3a] mb-2">$200</div>
            <div className="text-xl font-bold text-[#1a2a3a] mb-1">Individual Session</div>
            <div className="text-base text-[#3b4a5a] mb-2">50 minutes</div>
            <div className="text-[#fbbf24] font-semibold flex items-center gap-2">
              <span className="inline-block">💳</span>Pay by card or HSA/FSA
            </div>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-center gap-2 border border-[#e3eaf3] transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-[#fbbf24] cursor-pointer">
            <div className="text-5xl font-extrabold text-[#1a2a3a] mb-2">$240</div>
            <div className="text-xl font-bold text-[#1a2a3a] mb-1">Couples Session</div>
            <div className="text-base text-[#3b4a5a] mb-2">60 minutes</div>
            <div className="text-[#fbbf24] font-semibold flex items-center gap-2">
              <span className="inline-block">👫</span>Relationship support
            </div>
          </div>
        </div>
        <p className="text-[#3b4a5a] text-base mt-4 italic text-center">
          * Insurance not accepted, but a superbill is provided for self-submission.
        </p>
      </div>
    </section>
  );
}
