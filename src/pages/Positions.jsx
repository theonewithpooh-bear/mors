import React from 'react';
import { ApplicationNotice } from '../components/positions/ApplicationNotice';
import { EligibilityNotice } from '../components/positions/EligibilityNotice';
import { ManagerialRoles } from '../components/positions/ManagerialRoles';
import { NonManagerialRoles } from '../components/positions/NonManagerialRoles';

const Positions = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Open Positions</h1>
        <ApplicationNotice />
        <EligibilityNotice />
        <ManagerialRoles />
        <NonManagerialRoles />
      </main>
    </div>
  );
};

export default Positions;