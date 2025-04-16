
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="glass-card p-6 h-full relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { delay, duration: 0.5 }
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* Animated background glow */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-2xl opacity-0 group-hover:opacity-30 blur-xl"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      
      <div className="bg-gradient-to-br from-neon-blue to-neon-purple p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 relative">
        <motion.div
          className="absolute inset-0 rounded-lg opacity-40"
          animate={{
            boxShadow: ["0 0 0 rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.8)", "0 0 0 rgba(139, 92, 246, 0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          animate={{ 
            rotateY: [0, 180, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "loop", 
            ease: "easeInOut" 
          }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      </div>
      
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      
      {/* Interactive hover element */}
      <motion.div
        className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
        transition={{ duration: 0.2 }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{ x: [0, 3, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </motion.svg>
      </motion.div>
      
      {/* Interactive particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple/50 rounded-full"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 20}%`],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
