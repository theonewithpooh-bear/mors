import React from 'react';
import Header from '../components/Header';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Learn More</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Discover the mission and vision of the Movement of Real Skills. We aim to transform education by prioritizing practical skills and real-world applications.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Our approach focuses on inclusivity, ensuring that every student has the opportunity to thrive and reach their full potential.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Join us in reshaping the future of education and empowering the next generation with the skills they need to succeed.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
