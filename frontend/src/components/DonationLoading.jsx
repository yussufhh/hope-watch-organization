import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Loader2, Sparkles, Star } from 'lucide-react';

const DonationLoading = () => {
  return (
    <div className="text-center py-12 space-y-8">
      {/* Animated Hearts */}
      <div className="relative w-32 h-32 mx-auto">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full border-4 border-[#1D4ED8]"
            style={{
              transform: `scale(${1 + i * 0.2})`,
            }}
          />
        ))}
        
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Loading Text */}
      <div className="space-y-4">
        <motion.h3
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl font-bold text-gray-800"
        >
          Processing Your Donation...
        </motion.h3>
        
        <div className="flex justify-center items-center space-x-2">
          <Loader2 className="w-5 h-5 text-[#1D4ED8] animate-spin" />
          <span className="text-gray-600">Please wait while we securely process your payment</span>
        </div>
      </div>

      {/* Floating Sparkles */}
      <div className="relative">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -40, -20],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute text-yellow-400"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {i % 2 === 0 ? <Sparkles className="w-4 h-4" /> : <Star className="w-3 h-3" />}
          </motion.div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              backgroundColor: ['#D1D5DB', '#1D4ED8', '#D1D5DB']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-3 h-3 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default DonationLoading;