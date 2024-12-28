import React from 'react';
import { AlertCircle } from 'lucide-react';

export const EligibilityNotice = () => {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-2">Eligibility & Important Notice</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>All positions are <span className="font-semibold text-yellow-500">unpaid volunteer roles</span></li>
            <li>Must be in Year 10 or Year 11 (Exceptions: Year 12-13 students may apply)</li>
            <li>University students may apply but are not preferred</li>
          </ul>
        </div>
      </div>
    </div>
  );
};