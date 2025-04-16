
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  isYearly: boolean;
  features: PricingFeature[];
  isPopular?: boolean;
  accentColor?: string;
  index?: number;
}

const PricingCard = ({
  title,
  description,
  price,
  isYearly,
  features,
  isPopular = false,
  accentColor = "neon-purple",
  index = 0,
}: PricingCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const getButtonColor = () => {
    switch(accentColor) {
      case "neon-blue":
        return "blue-glow hover:bg-neon-blue/90";
      case "neon-green":
        return "green-glow hover:bg-neon-green/90";
      default:
        return "neon-glow hover:bg-neon-purple/90";
    }
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className={`glass-card p-6 md:p-8 relative ${
        isPopular ? `border-${accentColor} border-opacity-50 shadow-lg` : ""
      }`}
    >
      {isPopular && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-${accentColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-end justify-center">
          <span className="text-4xl font-bold">{isYearly ? price.yearly : price.monthly}</span>
          <span className="text-muted-foreground ml-1">/mo</span>
        </div>
        {isYearly && (
          <p className="text-sm text-muted-foreground mt-1">Billed annually</p>
        )}
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start space-x-3">
            <div className={`mt-1 flex-shrink-0 ${feature.included ? `text-${accentColor}` : "text-muted-foreground"}`}>
              {feature.included ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <span className="block h-4 w-4 opacity-50">-</span>
              )}
            </div>
            <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground"}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      
      <Link to="/signup" className="block w-full">
        <Button 
          className={`w-full ${isPopular ? `bg-${accentColor} ${getButtonColor()}` : "bg-secondary hover:bg-secondary/80"}`}
          size="lg"
        >
          Choose {title}
        </Button>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
