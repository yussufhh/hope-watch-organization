import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, DollarSign } from 'lucide-react';

const DonateButton = ({ onClick, variant = 'primary', size = 'md', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: 'bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white',
    secondary: 'bg-white text-[#1D4ED8] border-2 border-[#1D4ED8]',
    floating: 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-2xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#1D4ED8]'
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-12 py-6 text-xl'
  };

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'floating' 
          ? '0 20px 50px rgba(239, 68, 68, 0.4)'
          : '0 10px 30px rgba(29, 78, 216, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden rounded-full font-bold transition-all duration-300
        flex items-center justify-center group
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ 
          x: isHovered ? '100%' : '-100%'
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      />

      {/* Floating Sparkles */}
      <motion.div
        animate={{
          y: [-2, 2, -2],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1 -right-1"
      >
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </motion.div>

      {/* Heart Animation */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
        className="mr-3"
      >
        <Heart 
          className={`w-5 h-5 ${
            isHovered ? 'fill-current' : ''
          } transition-all duration-300`} 
        />
      </motion.div>

      <span className="relative z-10">Donate Now</span>

      {/* Pulse Effect */}
      {variant === 'floating' && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{
            scale: [1, 1.5],
            opacity: [0.7, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}

      {/* Dollar Sign Animation */}
      <motion.div
        animate={{
          x: isHovered ? [0, 5, 0] : 0
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="ml-2"
      >
        <DollarSign className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
};

// Floating Donate Button Component
export const FloatingDonateButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: isVisible ? 1 : 0,
        rotate: isVisible ? 0 : -180
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="fixed bottom-8 right-8 z-40"
    >
      {/* Pulsing Ring */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-red-500 rounded-full"
      />

      <DonateButton
        onClick={onClick}
        variant="floating"
        size="lg"
        className="relative z-10 shadow-2xl"
      />

      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-700 transition-colors"
      >
        ×
      </motion.button>
    </motion.div>
  );
};

export default DonateButton;