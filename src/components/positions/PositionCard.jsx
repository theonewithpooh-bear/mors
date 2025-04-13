
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const PositionCard = ({ 
  title, 
  color, 
  positions, 
  description, 
  requirements, 
  learnMoreContent,
  warningBox 
}) => {
  return (
    <div className="p-6 bg-black/5 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className={`text-xl font-semibold text-${color}-600`}>{title}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger className={`px-4 py-2 bg-${color}-500 text-black rounded-md hover:bg-${color}-400 transition-colors`}>
            Learn More
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-96 p-4 text-sm bg-gray-100 text-black border border-gray-200">
            <p className="leading-relaxed">{learnMoreContent}</p>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {positions && (
        <p className="text-gray-700 mb-2">Positions Available: {positions}</p>
      )}
      
      {description && (
        <p className="text-gray-700 mb-4">{description}</p>
      )}

      {warningBox && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
          <p className="text-blue-600 font-medium">{warningBox.title}</p>
          {warningBox.description && (
            <p className="text-gray-700 text-sm mt-1">{warningBox.description}</p>
          )}
        </div>
      )}
      
      {requirements && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
