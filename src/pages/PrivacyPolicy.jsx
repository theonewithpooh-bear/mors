
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-24"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: May 2024</p>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
              <p>
                This Privacy Policy explains how your data is handled when you use the Movement of Real Skills (MORS) website. 
                Our website is built and hosted by Lovable, which also manages analytics and form processing on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Who We Are</h2>
              <p>
                MORS (The Movement of Real Skills) is an education reform organisation. Although we do not directly collect 
                or store personal data ourselves, we rely on third-party tools and platforms that may do so on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">What Data Is Collected</h2>
              <p>
                We do not collect or store any personal data directly on our servers. However, data may be collected via:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Google Forms – when you submit a form, such as to join MORS or provide feedback</li>
                <li>Lovable – to provide basic analytics (e.g. page views, browser type) and hosting services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services We Use</h2>
              <p>
                We use the following services, which may collect or process data under their own policies:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Lovable – website hosting and analytics</li>
                <li>Google Forms – form submission and data collection</li>
              </ul>
              <p className="mt-2">
                Please review their privacy policies for more information on how your data is handled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Cookies</h2>
              <p>
                Our site may use cookies through Lovable for anonymous analytics. These do not identify you personally. 
                You can manage cookies through your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
              <p>
                If you're in the UK or EU, you have rights under the GDPR, including:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to request correction or deletion</li>
                <li>The right to object to processing</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact Lovable at their website lovable.dev, as they manage all technical aspects of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
              <p>
                If you have questions about how your data is handled, you can contact Lovable via their website or email us at 
                info@mors.org.uk. While MORS does not process your data directly, we are happy to help redirect your query to the right place.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
