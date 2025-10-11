import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, Award, Calendar, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Import images
import aboutHeroImage from '../assets/image3.png';
import missionImage from '../assets/image1.png';
import visionImage from '../assets/image2.png';
import teamImage from '../assets/image4.png';
import valuesImage from '../assets/image5.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 500, label: 'Students Mentored', suffix: '+' },
    { number: 15, label: 'Partner Schools', suffix: '+' },
    { number: 3, label: 'Years of Impact', suffix: '' },
    { number: 95, label: 'Success Rate', suffix: '%' }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We approach every student with empathy and understanding'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our programs'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'We believe in the power of collective growth and support'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We maintain transparency and honesty in everything we do'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHeroImage} 
            alt="About Hopewatch Revival"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/80 via-[#1E40AF]/70 to-[#FBBF24]/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-6xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            About <span className="text-[#FBBF24]">Hopewatch</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Empowering the next generation through education, mentorship, and unwavering support
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-12 shadow-xl">
                <div className="flex items-center mb-8">
                  <Target className="w-12 h-12 text-[#1D4ED8] mr-4" />
                  <h2 className="text-4xl font-bold text-[#1D4ED8]">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide comprehensive guidance, mentorship, and educational support to students 
                  in underserved communities, helping them navigate university placements through KUCCPS 
                  and empowering them with life skills for successful futures.
                </p>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={missionImage} 
                  alt="Our mission in action - students learning"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D4ED8]/60 to-transparent"></div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={visionImage} 
                  alt="Our vision - empowering futures"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBBF24]/60 to-transparent"></div>
              </div>
              
              <div className="bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24] rounded-2xl p-12 text-white shadow-xl">
                <div className="flex items-center mb-8">
                  <Award className="w-12 h-12 text-white mr-4" />
                  <h2 className="text-4xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed opacity-95">
                  A world where every young person, regardless of their background, has access to 
                  quality education, mentorship, and the tools they need to achieve their full 
                  potential and contribute meaningfully to society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in the lives of students across Wajir County</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-[#1D4ED8] mb-4">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl opacity-90">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="opacity-90 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Our Base</h2>
            <p className="text-xl text-gray-600">Where we call home and serve our community</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-2xl p-12 text-white text-center"
          >
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Ogle Girls Secondary School</h3>
            <p className="text-xl opacity-90 mb-2">Habaswein Sub-County, Wajir County</p>
            <p className="text-lg opacity-80">The heart of our mentorship and guidance programs</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
