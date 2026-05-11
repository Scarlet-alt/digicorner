import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function AnimatedButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: AnimatedButtonProps) {
  const baseClasses = "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

  const variantClasses = {
    primary: "hover:shadow-lg",
    secondary: "hover:text-copper",
    ghost: "hover:text-copper",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
