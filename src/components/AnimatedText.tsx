
import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
  letterAnimation?: boolean;
}

const AnimatedText = ({ 
  text, 
  className, 
  delay = 0, 
  gradient = false,
  letterAnimation = false 
}: AnimatedTextProps) => {
  if (letterAnimation) {
    return (
      <motion.div 
        className={`${className} ${gradient ? 'text-gradient' : ''} inline-flex overflow-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.05,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.p 
      variants={textVariant(delay)} 
      className={`${className} ${gradient ? 'text-gradient' : ''}`}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
