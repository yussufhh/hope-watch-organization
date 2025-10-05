
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  // Impact stats data
  const impactStats = [
    { icon: '🎓', number: '137', label: 'Students Empowered' },
    { icon: '👩‍🏫', number: '6', label: 'Mentors & Officers' },
    { icon: '🏫', number: '3', label: 'Schools Engaged' },
    { icon: '🌍', number: '2', label: 'Counties Reached' }
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Fatima Ahmed',
      role: 'Program Director',
      description: 'Passionate about educational equity and youth development'
    },
    {
      name: 'Mohammed Hassan',
      role: 'Head Mentor',
      description: 'Dedicated to guiding students toward their career paths'
    },
    {
      name: 'Amina Yusuf',
      role: 'Community Outreach',
      description: 'Building bridges between schools and communities'
    },
    {
      name: 'David Kimani',
      role: 'Education Officer',
      description: 'Specialized in university placement guidance'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#FBBF24] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Hopewatch Revival Organization
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            We are a community-driven nonprofit organization dedicated to empowering students through mentorship, 
            educational guidance, and access to opportunities across Wajir and Garissa counties.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-[#1D4ED8] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FBBF24] transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1D4ED8] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower youth through mentorship, education, and opportunity — building a generation of 
                inspired, confident, and purpose-driven learners.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                A future where every student, regardless of background, has equal access to quality education 
                and guidance to unlock their full potential.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={fadeInLeft.viewport}
              transition={fadeInLeft.transition}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24] rounded-2xl p-1">
                <div className="bg-gray-200 rounded-2xl h-96 lg:h-[500px] bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FBBF24] text-[#1D4ED8] px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">Since 2020</div>
                <div className="text-sm">Transforming Lives</div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={fadeInRight.viewport}
              transition={fadeInRight.transition}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Hopewatch Revival Organization was founded to bridge the critical gap in access to mentorship 
                and educational resources in Northern Kenya. Witnessing the immense potential of young students 
                hindered by limited guidance and opportunities, we embarked on a mission to create meaningful change.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Through community outreach, workshops, and transformative programs like the KUCCPS Placement and 
                Mentorship Program, we've helped hundreds of students navigate their academic paths, discover 
                their passions, and unlock their potential for a brighter future.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-12 bg-[#FBBF24] rounded-full"></div>
                <p className="text-lg font-semibold text-[#1D4ED8]">
                  Building bridges to education, one student at a time
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to transforming education in Northern Kenya
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#1D4ED8] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to making a difference in students' lives
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-6 text-center group hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#FBBF24] hover:text-white transition-all duration-500 cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:bg-white group-hover:text-[#1D4ED8] transition-all duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-[#1D4ED8] mb-2 group-hover:text-white">
                  {member.name}
                </h3>
                <div className="text-[#FBBF24] font-medium mb-3 group-hover:text-white/90">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm group-hover:text-white/80">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in mentoring and inspiring the next generation of leaders. Partner, volunteer, 
              or donate to help us continue making an impact in Northern Kenya and beyond.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FBBF24] text-[#1D4ED8] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Support Our Mission
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-[#FBBF24] mb-4">
            Hopewatch Revival Organization
          </div>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Empowering the next generation through education, mentorship, and opportunity.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {['About', 'Programs', 'Impact', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-[#FBBF24] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hopewatch Revival Organization. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;