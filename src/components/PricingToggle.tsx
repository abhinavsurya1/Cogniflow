
import { useState } from "react";
import { motion } from "framer-motion";

interface PricingToggleProps {
  onToggle: (isYearly: boolean) => void;
}

const PricingToggle = ({ onToggle }: PricingToggleProps) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex items-center justify-center my-8 gap-3">
      <span className={`text-sm ${!isYearly ? "font-medium text-foreground" : "text-muted-foreground"}`}>
        Monthly
      </span>
      
      <div 
        className="relative w-16 h-8 rounded-full p-1 cursor-pointer bg-secondary"
        onClick={handleToggle}
      >
        <motion.div 
          className="w-6 h-6 bg-primary rounded-full absolute"
          animate={{ 
            x: isYearly ? 32 : 2,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        />
      </div>
      
      <span className={`text-sm ${isYearly ? "font-medium text-foreground" : "text-muted-foreground"}`}>
        Yearly
        <span className="ml-1.5 text-xs py-0.5 px-1.5 bg-neon-green/20 text-neon-green rounded-full">
          Save 20%
        </span>
      </span>
    </div>
  );
};

export default PricingToggle;
