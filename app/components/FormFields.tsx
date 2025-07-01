import React from 'react';

export const Input = ({
  label,
  name,
  error,
  required,
  placeholder,
  type,
  pattern,
  maxLength,
  minLength,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  pattern?: string;
  maxLength?: number;
  minLength?: number;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-800 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      name={name}
      type={type || 'text'}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      placeholder={placeholder || label}
      required={required}
      pattern={pattern}
      maxLength={maxLength}
      minLength={minLength}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export const TextArea = ({
  label,
  name,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-800 mb-1">
      {label} <span className="text-red-500">*</span>
    </label>
    <textarea
      name={name}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      rows={4}
      placeholder={placeholder || label}
      required
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
