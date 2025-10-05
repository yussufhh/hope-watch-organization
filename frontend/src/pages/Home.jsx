

import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Statistics data
  const stats = [
    { number: '137', label: 'Students Reached' },
    { number: '79', label: 'Boys Empowered' },
    { number: '58', label: 'Girls Empowered' },
    { number: '6', label: 'Mentors & Officers' }
  ];

  // Activities data
  const activities = [
    {
      icon: '📝',
      title: 'KUCCPS Account Setup',
      description: 'Step-by-step guidance for university application accounts'
    },
    {
      icon: '🎯',
      title: 'Mentorship Sessions',
      description: 'Field-specific career guidance from experienced professionals'
    },
    {
      icon: '🤝',
      title: 'One-on-One Support',
      description: 'Personalized assistance for individual student needs'
    },
    {
      icon: '💫',
      title: 'Motivation Talks',
      description: 'Inspirational sessions to boost confidence and ambition'
    }
  ];

  // Impact metrics
  const impacts = [
    { metric: '90%', description: 'completed KUCCPS applications' },
    { metric: '85%', description: 'increased scholarship awareness' },
    { metric: '95%', description: 'reported boosted confidence' }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "This program showed me that I have more career options than I ever imagined. The mentorship opened my eyes to possibilities beyond my community.",
      author: "Amina",
      role: "Student Participant"
    },
    {
      quote: "Hopewatch is doing what we all dream of—bridging the gap in education access. Their approach is transformative for these young minds.",
      author: "Mr. Hussein",
      role: "TSC Director"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#FBBF24] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hopewatch Revival
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Empowering Young Minds Through Mentorship and Education
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FBBF24] text-[#1D4ED8] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Mission
          </motion.button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-6 h-6 border-r-2 border-b-2 border-white rotate-45"></div>
        </motion.div>
      </section>

      {/* About Program Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4">
              KUCCPS Placement & Mentorship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives through comprehensive guidance and mentorship for students in Habaswein Sub-County, 
              empowering them to navigate university placements and career choices with confidence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#1D4ED8] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-2xl p-8 text-white text-center"
          >
            <p className="text-xl md:text-2xl font-light">
              <span className="font-semibold">Venue:</span> Ogle Girls Secondary School • 
              <span className="font-semibold"> Location:</span> Habaswein Sub-County
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4">
              Program Activities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support designed to guide students through every step of their educational journey
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-8 text-center group hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#FBBF24] hover:text-white transition-all duration-500 cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1D4ED8] group-hover:text-white">
                  {activity.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl opacity-90">
              Real results that demonstrate the transformative power of our program
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-5xl font-bold mb-4 text-[#FBBF24]">
                  {impact.metric}
                </div>
                <p className="text-lg font-medium">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/20"
          >
            <p className="text-xl font-light italic">
              "The program not only helped with placements but fundamentally changed how these students see their future possibilities."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4">
              Voices of Impact
            </h2>
            <p className="text-xl text-gray-600">
              Hear from those whose lives have been transformed through our program
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl text-[#FBBF24] mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-[#1D4ED8] text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What's Next?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're expanding our reach to Wajir and Garissa counties, bringing the same transformative 
              mentorship and educational support to more underserved communities across the region.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FBBF24] text-[#1D4ED8] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Partner With Us
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;