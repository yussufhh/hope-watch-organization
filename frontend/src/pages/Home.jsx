import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import DonateButton from '../components/DonateButton';
import DonationModal from '../components/DonationModal';
import DonationTracker from '../components/DonationTracker';

// Import images
import heroImage from '../assets/image1.png';
import aboutImage1 from '../assets/image2.png';
import aboutImage2 from '../assets/image3.png';
import programImage from '../assets/image4.png';
import impactImage from '../assets/image5.png';

const Home = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Hopewatch Revival - Empowering Young Minds"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/70 to-yellow-400/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Hopewatch <span className="text-yellow-400">Revival</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Empowering Young Minds Through Mentorship, Education, and Unlimited Possibilities
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <DonateButton
              onClick={() => setIsDonationModalOpen(true)}
              variant="secondary"
              size="xl"
            />
            
            <NavLink
              to="/get-involved"
              className="bg-yellow-400 text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Join Our Mission
            </NavLink>
            
            <NavLink
              to="/about"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-blue-600 mb-6">
              KUCCPS Placement & Mentorship Program
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming lives through comprehensive guidance and mentorship for students in Habaswein Sub-County, 
              empowering them to navigate university placements and career choices with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={aboutImage1} 
                  alt="Students participating in KUCCPS guidance program"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">KUCCPS Guidance Sessions</h4>
                    <p className="text-sm opacity-90">Helping students navigate university applications</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={aboutImage2} 
                  alt="Mentorship program in action"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Mentorship Programs</h4>
                    <p className="text-sm opacity-90">One-on-one guidance from professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-yellow-400 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-light">
              <span className="font-semibold">Venue:</span> Ogle Girls Secondary School • 
              <span className="font-semibold"> Location:</span> Habaswein Sub-County, Wajir County
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-blue-600 mb-6">
              Program Activities
            </h2>
            <p className="text-2xl text-gray-600">
              Comprehensive support designed to guide students through every step of their educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center group hover:bg-gradient-to-br hover:from-blue-600 hover:to-yellow-400 hover:text-white transition-all duration-500 cursor-pointer">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600 group-hover:text-white">
                KUCCPS Guidance
              </h3>
              <p className="text-gray-600 group-hover:text-white/90">
                Complete support for university application processes
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center group hover:bg-gradient-to-br hover:from-blue-600 hover:to-yellow-400 hover:text-white transition-all duration-500 cursor-pointer">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600 group-hover:text-white">
                Mentorship Program
              </h3>
              <p className="text-gray-600 group-hover:text-white/90">
                One-on-one guidance from industry professionals
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center group hover:bg-gradient-to-br hover:from-blue-600 hover:to-yellow-400 hover:text-white transition-all duration-500 cursor-pointer">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600 group-hover:text-white">
                Life Skills Training
              </h3>
              <p className="text-gray-600 group-hover:text-white/90">
                Essential skills for personal and professional growth
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center group hover:bg-gradient-to-br hover:from-blue-600 hover:to-yellow-400 hover:text-white transition-all duration-500 cursor-pointer">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600 group-hover:text-white">
                Motivation & Support
              </h3>
              <p className="text-gray-600 group-hover:text-white/90">
                Inspiring confidence and ambition in young minds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Gallery Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-600 mb-6">
              Our Impact in Action
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Witness the transformation happening in Habaswein Sub-County through our comprehensive programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-96">
                <img 
                  src={programImage} 
                  alt="Students engaged in learning activities"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-yellow-400/60 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                  <div>
                    <h3 className="text-4xl font-bold mb-4">250+</h3>
                    <p className="text-xl font-light">Students Mentored</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group h-44">
                <img 
                  src={impactImage} 
                  alt="Educational success stories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="text-lg font-bold">Success Stories</h4>
                    <p className="text-sm opacity-90">Lives transformed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-yellow-400 rounded-2xl p-6 text-white h-44 flex items-center justify-center text-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">95%</h3>
                  <p className="text-lg font-light">University Placement Success Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Tracker */}
      <DonationTracker />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-yellow-400">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8">
            Join Our Mission Today
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Be part of the change. Help us empower more young minds and transform communities 
            through education, mentorship, and unlimited possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <DonateButton
              onClick={() => setIsDonationModalOpen(true)}
              variant="secondary"
              size="xl"
            />
            <NavLink
              to="/get-involved"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Become a Volunteer
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
};

export default Home;
