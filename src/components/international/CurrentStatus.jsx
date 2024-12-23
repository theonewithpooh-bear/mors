import React from 'react';

const CurrentStatus = () => {
  return (
    <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Current Status</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center space-x-2">
            <span className="text-blue-500">✓</span>
            <span>Yes, we have no money</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-500">✓</span>
            <span>Yes, we are a one man band</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-500">✓</span>
            <span>Yes, Not many know about us</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-red-500">×</span>
            <span>No, we haven't made any changes yet</span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">But Here's the Thing...</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We don't care. MORS is fighting for educational changes across the globe, not just here in the UK.
        </p>
      </div>
    </section>
  );
};

export default CurrentStatus;