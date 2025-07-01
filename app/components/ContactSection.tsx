import React, { useState } from 'react';
import { Input, TextArea } from './FormFields';
// @ts-ignore
import emailjs from 'emailjs-com';

export default function ContactSection() {
  type FormErrors = {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    time?: string;
    agree?: string;
  };

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<string | null>(null);

  return (
    <section id="contact" className="scroll-mt-36 bg-[#d9f0ff] py-16 px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-black mb-6 drop-shadow-lg tracking-tight">Get In Touch</h2>
        <div className="max-w-xl mx-auto mb-8 bg-white/80 border border-primary/20 rounded-xl shadow p-4 text-center text-gray-700 text-base">
          Fill out the brief fields below and Serena will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            const errors: any = {};

            if (!data.get('name')) errors.name = 'Name is required';
            if (!data.get('phone')) errors.phone = 'Phone is required';
            if (!data.get('email')?.toString().match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
              errors.email = 'Valid email required';
            if (!data.get('message')) errors.message = 'Message is required';
            if (!data.get('time')) errors.time = 'Preferred time required';
            if (!data.get('agree')) errors.agree = 'You must agree to be contacted';

            setFormErrors(errors);

            if (Object.keys(errors).length === 0) {
              try {
                await emailjs.send(
                  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                  {
                    name: data.get('name'),
                    phone: data.get('phone'),
                    email: data.get('email'),
                    message: data.get('message'),
                    time: data.get('time'),
                  },
                  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                );
                setFormStatus('Your message has been sent!');
                form.reset();
              } catch {
                setFormStatus('Failed to send. Please try again later.');
              }
            }
          }}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border-2 border-primary/30 focus-within:border-primary/60 transition-all duration-300"
        >
          <Input label="Name" name="name" error={formErrors.name} required placeholder="Your full name" />
          <Input
            label="Phone"
            name="phone"
            error={formErrors.phone}
            required
            placeholder="+91 9876543210"
            type="tel"
            pattern="^\+91\s?\d{10}$"
            minLength={13}
            maxLength={14}
          />
          <Input label="Email" name="email" error={formErrors.email} required placeholder="name@gmail.com" type="email" />
          <TextArea
            label="What brings you here?"
            name="message"
            error={formErrors.message}
            placeholder="Share a bit about your situation. (e.g. anxiety, relationship, trauma, etc.)"
          />
          <TextArea
            label="Preferred time to reach you"
            name="time"
            error={formErrors.time}
            placeholder="e.g. Morning (9–11am), Afternoon (1–4pm), Evening (5–8pm)"
          />
          <div className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="accent-blue-600 w-5 h-5 rounded focus:ring-2 focus:ring-blue-400 transition"
            />
            <label htmlFor="agree" className="text-sm font-semibold text-gray-800 select-none cursor-pointer">
              I agree to be contacted
            </label>
          </div>
          {formErrors.agree && <p className="text-red-500 text-sm">{formErrors.agree}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:from-indigo-500 hover:to-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
        {formStatus && <div className="text-center mt-4 text-green-600 font-semibold">{formStatus}</div>}
      </div>
    </section>
  );
}
