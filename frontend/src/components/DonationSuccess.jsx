import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Sparkles, Star } from 'lucide-react';

const DonationSuccess = ({ amount, impact, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl p-12 max-w-2xl w-full text-center relative overflow-hidden"
      >
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -60, -20],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {i % 2 === 0 ? <Sparkles className="w-6 h-6" /> : <Star className="w-4 h-4" />}
          </motion.div>
        ))}

        {/* Success Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        {/* Thank You Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Thank You! 🎉
        </motion.h2>

        {/* Amount */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white rounded-2xl p-6 mb-8"
        >
          <div className="text-3xl font-bold mb-2">
            Your donation of ${amount}
          </div>
          <div className="text-lg opacity-90">
            will make a real difference!
          </div>
        </motion.div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-50 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-red-500 mr-2" />
            <span className="font-bold text-gray-800">Your Impact</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{impact}</p>
        </motion.div>

        {/* Confetti Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-10, window.innerHeight],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: -10,
                backgroundColor: ['#1D4ED8', '#FBBF24', '#EF4444', '#10B981', '#8B5CF6'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </div>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="bg-[#1D4ED8] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1E40AF] transition-colors duration-300"
        >
          Continue
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-500 text-sm mt-4"
        >
          You'll receive a confirmation email with your donation receipt shortly.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default DonationSuccess;