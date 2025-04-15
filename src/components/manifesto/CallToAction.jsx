
import React from 'react';
import ManifestoSection from './ManifestoSection';

const CallToAction = () => {
  return (
    <ManifestoSection
      title="Section Ten: Call to Action"
      content={
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Join MORS' Movement</h3>
            <p className="text-lg text-gray-300">
              We can't do this alone. We need the support of the British people, and those in charge to make 
              this change happen.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              MORS is actively working to raise awareness against the issue.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              If you want to help, please visit mors.org.uk to register your interest. If you would like to 
              donate towards our cause, it would be very much appreciated! But what MORS need more than money, 
              is support.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              If you would like to get involved, please say so when you are registering your interest, and we 
              will endeavour to get back to you.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">How You Can Help</h3>
            <p className="text-lg text-gray-300">You are the ones that will make this change happen.</p>
            <p className="text-lg text-gray-300">We need you all to chip in to make MORS' mission a reality.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li className="text-lg text-gray-300">Contacting your local MP</li>
              <li className="text-lg text-gray-300">Telling your friends and family</li>
              <li className="text-lg text-gray-300">Informing your teachers (or students)</li>
              <li className="text-lg text-gray-300">Asking your parents to contact us to volunteer</li>
              <li className="text-lg text-gray-300">Contacting MORS to offer your support.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Our Promise</h3>
            <p className="text-lg text-gray-300">
              MORS is committed to delivering this change. We promise to do our utmost to do our part in 
              ensuring the education system gets the TLC is so desperately needs.
            </p>
            <p className="text-lg text-gray-300 mt-4">This, I promise to you.</p>
          </div>
        </div>
      }
    />
  );
};

export default CallToAction;
