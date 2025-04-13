
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ActionCard = ({ title, description, buttonText, buttonLink, buttonAction, children }) => {
  return (
    <div className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      {buttonText && buttonLink ? (
        <a href={buttonLink}>
          <Button 
            variant="outline" 
            className="group text-sm px-4 py-2 rounded-full bg-black/10 hover:bg-black/20 border-black/20"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      ) : children}
    </div>
  );
};

export default ActionCard;
