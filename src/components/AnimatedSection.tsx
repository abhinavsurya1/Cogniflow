
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string; // Added id prop
}

const AnimatedSection = ({ children, className, delay = 0, id }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      variants={staggerContainer(0.1, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
