import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ActionCard = ({ title, description, buttonText, buttonLink, buttonAction, children }) => {
  return (
    <div className="modern-card p-6">
      <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{description}</p>
      {buttonText && buttonLink ? (
        <a href={buttonLink}>
          <Button 
            variant="outline" 
            className="group text-sm px-4 py-2 rounded-full border-border hover:bg-foreground hover:text-primary-foreground transition-all duration-200"
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
