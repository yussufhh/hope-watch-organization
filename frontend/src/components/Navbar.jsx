
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DonateButton from './DonateButton';
import DonationModal from './DonationModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' }
  ];

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <NavLink
                to="/"
                className="text-2xl font-bold text-[#1D4ED8] hover:text-[#FBBF24] transition-colors duration-300"
              >
                Hopewatch Revival
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="ml-10 flex items-baseline space-x-8"
              >
                {navItems.map((item, index) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-[#1D4ED8] hover:text-[#FBBF24] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group ${
                          isActive ? 'text-[#FBBF24] font-semibold' : ''
                        }`
                      }
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FBBF24] group-hover:w-full transition-all duration-300"></span>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Donate Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:block"
            >
              <DonateButton
                onClick={() => setIsDonationModalOpen(true)}
                variant="primary"
                size="sm"
              />
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#1D4ED8] hover:text-[#FBBF24] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FBBF24] transition-colors duration-300"
              aria-label="Main menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-50 md:hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-xl font-bold text-[#1D4ED8]">
                        Hopewatch Revival
                      </span>
                    </motion.div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-md text-gray-400 hover:text-[#FBBF24] hover:bg-blue-50 transition-colors duration-300"
                      aria-label="Close menu"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 px-6 py-8 space-y-6"
                  >
                    {navItems.map((item) => (
                      <motion.div key={item.name} variants={itemVariants}>
                        <NavLink
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `block text-lg font-medium text-[#1D4ED8] hover:text-[#FBBF24] py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 border-l-4 ${
                              isActive 
                                ? 'border-[#FBBF24] bg-blue-50 text-[#FBBF24] font-semibold' 
                                : 'border-transparent hover:border-[#FBBF24]'
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Mobile Donate Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 border-t border-gray-200"
                  >
                    <DonateButton
                      onClick={() => {
                        setIsOpen(false);
                        setIsDonationModalOpen(true);
                      }}
                      variant="primary"
                      size="lg"
                      className="w-full"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 md:h-20" />

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};

export default Navbar;