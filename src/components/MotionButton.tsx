
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import React from "react";

interface MotionButtonProps extends ButtonProps {
  whileHover?: any;
  whileTap?: any;
  transition?: any;
  gradient?: boolean;
  glint?: boolean;
  pulse?: boolean;
  glowOnHover?: boolean;
  iconAnimate?: boolean;
}

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    children, 
    whileHover, 
    whileTap, 
    transition, 
    gradient, 
    glint, 
    pulse,
    glowOnHover,
    iconAnimate,
    ...props 
  }, ref) => {
    
    // Default animation props if not provided
    const defaultHover = whileHover || { scale: 1.05 };
    const defaultTap = whileTap || { scale: 0.98 };
    const defaultTransition = transition || { 
      type: "spring", 
      stiffness: 400, 
      damping: 17 
    };

    // Generate combined class names
    const buttonClassNames = `
      ${className || ''}
      ${gradient ? 'bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue' : ''}
      ${glint || glowOnHover ? 'overflow-hidden relative' : ''}
      ${pulse ? 'animate-pulse-subtle' : ''}
    `;
    
    return (
      <motion.div
        whileHover={defaultHover}
        whileTap={defaultTap}
        transition={defaultTransition}
        className="inline-block"
      >
        <Button
          className={buttonClassNames}
          variant={variant}
          size={size}
          ref={ref}
          asChild={asChild}
          {...props}
        >
          {iconAnimate ? (
            <motion.div 
              className="flex items-center gap-1"
              initial={{ gap: "4px" }}
              whileHover={{ gap: "8px" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {children}
            </motion.div>
          ) : children}
          
          {/* Glint animation effect */}
          {glint && (
            <motion.span
              className="absolute inset-0 w-full h-full bg-white/20"
              initial={{ x: "-100%", opacity: 0.5 }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
          
          {/* Glow on hover effect */}
          {glowOnHover && (
            <motion.span
              className="absolute inset-0 w-full h-full bg-primary/25 rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </Button>
      </motion.div>
    );
  }
);

// Add keyframes for subtle pulse animation to App.css
const pulseKeyframes = `
@keyframes pulse-subtle {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`;

// Only append once when component is first used
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = pulseKeyframes;
  if (!document.head.querySelector('style#pulse-keyframes')) {
    style.id = 'pulse-keyframes';
    document.head.appendChild(style);
  }
}

MotionButton.displayName = "MotionButton";

export { MotionButton };
