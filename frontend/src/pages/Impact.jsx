import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Award, 
  School, 
  MapPin, 
  Calendar,
  Target,
  Heart,
  Globe,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Import images
import impactHeroImage from '../assets/image4.png';
import story1Image from '../assets/image1.png';
import story2Image from '../assets/image2.png';
import story3Image from '../assets/image3.png';
import communityImage from '../assets/image5.png';

const Impact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impactStats = [
    { number: 2500, label: 'Students Reached', suffix: '+', icon: <Users className="w-8 h-8" />, color: 'from-blue-500 to-indigo-600' },
    { number: 45, label: 'Partner Schools', suffix: '+', icon: <School className="w-8 h-8" />, color: 'from-green-500 to-teal-600' },
    { number: 850, label: 'University Placements', suffix: '+', icon: <GraduationCap className="w-8 h-8" />, color: 'from-purple-500 to-pink-600' },
    { number: 98, label: 'Success Rate', suffix: '%', icon: <Target className="w-8 h-8" />, color: 'from-orange-500 to-red-600' },
    { number: 25, label: 'Communities Served', suffix: '+', icon: <MapPin className="w-8 h-8" />, color: 'from-cyan-500 to-blue-600' },
    { number: 150, label: 'Volunteer Mentors', suffix: '+', icon: <Heart className="w-8 h-8" />, color: 'from-rose-500 to-pink-600' }
  ];

  const yearlyProgress = [
    {
      year: '2022',
      students: 350,
      placements: 180,
      schools: 8,
      programs: 3,
      highlights: [
        'Launched KUCCPS guidance program',
        'Established first 8 school partnerships',
        'Achieved 85% university placement rate'
      ]
    },
    {
      year: '2023',
      students: 750,
      placements: 420,
      schools: 18,
      programs: 6,
      highlights: [
        'Expanded to 18 partner schools',
        'Introduced life skills training',
        'Launched mentorship program'
      ]
    },
    {
      year: '2024',
      students: 1200,
      placements: 650,
      schools: 35,
      programs: 8,
      highlights: [
        'Reached 1000+ students milestone',
        'Achieved 95% success rate',
        'Started community service programs'
      ]
    },
    {
      year: '2025',
      students: 2500,
      placements: 850,
      schools: 45,
      programs: 12,
      highlights: [
        'Expanded across Wajir County',
        'Launched digital literacy program',
        'Achieved 98% success rate'
      ]
    }
  ];

  const communityImpacts = [
    {
      category: 'Educational Excellence',
      icon: <BookOpen className="w-12 h-12" />,
      description: 'Improved academic performance and university admission rates',
      metrics: [
        'Average grade improvement: 2.3 points',
        'University admission rate: 98%',
        'Scholarship recipients: 120+'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      category: 'Youth Empowerment',
      icon: <Users className="w-12 h-12" />,
      description: 'Building confident, skilled, and motivated young leaders',
      metrics: [
        'Leadership positions filled: 85%',
        'Community projects led: 150+',
        'Peer mentoring networks: 25+'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      category: 'Economic Development',
      icon: <TrendingUp className="w-12 h-12" />,
      description: 'Creating pathways to economic opportunities and stability',
      metrics: [
        'Employment rate post-graduation: 92%',
        'Average income increase: 340%',
        'Entrepreneurship initiatives: 45+'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      category: 'Social Cohesion',
      icon: <Heart className="w-12 h-12" />,
      description: 'Strengthening community bonds and cultural preservation',
      metrics: [
        'Inter-community collaborations: 30+',
        'Cultural events organized: 60+',
        'Conflict resolution success: 95%'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const successStories = [
    {
      name: 'Halima Abdi',
      before: 'Struggling secondary school student',
      after: 'Medical Student at University of Nairobi',
      program: 'KUCCPS Guidance & Mentorship',
      quote: 'The program didn\'t just help me get into university - it transformed my entire outlook on what\'s possible.',
      image: story1Image,
      achievement: 'First in family to attend university'
    },
    {
      name: 'Ahmed Hassan',
      before: 'Uncertain about career direction',
      after: 'Engineering Student & Youth Leader',
      program: 'Life Skills & Leadership Development',
      quote: 'I discovered my passion for engineering and now I\'m helping other students in my community.',
      image: story2Image,
      achievement: 'Founded local youth tech club'
    },
    {
      name: 'Fadumo Omar',
      before: 'Limited access to educational resources',
      after: 'Business Administration Graduate',
      program: 'Comprehensive Support Program',
      quote: 'The mentorship and support I received opened doors I never knew existed.',
      image: story3Image,
      achievement: 'Started successful local business'
    }
  ];

  const sdgAlignments = [
    {
      goal: 'Quality Education',
      sdg: 'SDG 4',
      description: 'Ensuring inclusive and equitable quality education for all',
      impact: '2,500+ students with improved educational outcomes',
      color: 'from-red-500 to-orange-500'
    },
    {
      goal: 'No Poverty',
      sdg: 'SDG 1',
      description: 'Breaking the cycle of poverty through education and skills',
      impact: '850+ families with improved economic prospects',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      goal: 'Gender Equality',
      sdg: 'SDG 5',
      description: 'Empowering young women and promoting gender equality',
      impact: '60% female participation in leadership programs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      goal: 'Partnerships for Goals',
      sdg: 'SDG 17',
      description: 'Building strong partnerships for sustainable development',
      impact: '45+ institutional partnerships established',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={impactHeroImage} 
            alt="Our Impact - Transforming Communities Through Education"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8"
          >
            <TrendingUp className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our <span className="text-[#FBBF24]">Impact</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Transforming communities through education, creating lasting change that spans generations and builds stronger futures
          </motion.p>
        </motion.div>
      </section>

      {/* Impact Statistics */}
      <section ref={ref} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Impact by Numbers</h2>
            <p className="text-xl text-gray-600">Quantifying our contribution to community development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-6`}>
                  {stat.icon}
                </div>
                
                <div className="text-4xl font-bold text-gray-800 mb-2">
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
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Progress Timeline */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Growth Timeline</h2>
            <p className="text-xl text-gray-600">Our journey of expanding impact year by year</p>
          </motion.div>

          <div className="space-y-12">
            {yearlyProgress.map((year, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-8 h-8 text-[#FBBF24] mr-4" />
                      <h3 className="text-3xl font-bold text-[#1D4ED8]">{year.year}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#1D4ED8]">{year.students.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#1D4ED8]">{year.placements.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Placements</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#1D4ED8]">{year.schools}</div>
                        <div className="text-sm text-gray-600">Schools</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#1D4ED8]">{year.programs}</div>
                        <div className="text-sm text-gray-600">Programs</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {year.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24] rounded-2xl p-8 text-white h-full min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-4">{year.year}</div>
                      <div className="text-2xl mb-6">Milestone Year</div>
                      <div className="space-y-3 text-lg">
                        <div>{year.students.toLocaleString()} Students Empowered</div>
                        <div>{year.placements.toLocaleString()} Successful Placements</div>
                        <div>{year.schools} Partner Schools</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Categories */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Community Impact</h2>
            <p className="text-xl text-gray-600">Comprehensive transformation across multiple dimensions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {communityImpacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${impact.color} rounded-2xl text-white mb-6`}>
                  {impact.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{impact.category}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{impact.description}</p>
                
                <div className="space-y-3">
                  {impact.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-[#FBBF24] mr-3 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Transformation Stories</h2>
            <p className="text-xl opacity-90">Real stories of lives changed through our programs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white hover:bg-white/20 transition-all duration-300"
              >
                <div className="relative h-48 mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="px-6 pb-6">
                
                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <div className="text-[#FBBF24] font-semibold mb-4">{story.program}</div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm opacity-80">Before:</div>
                    <div>{story.before}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">After:</div>
                    <div className="font-semibold">{story.after}</div>
                  </div>
                </div>
                
                <blockquote className="italic mb-4 leading-relaxed">
                  "{story.quote}"
                </blockquote>
                
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-sm opacity-90">Achievement:</div>
                  <div className="font-semibold text-[#FBBF24]">{story.achievement}</div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">SDG Alignment</h2>
            <p className="text-xl text-gray-600">Contributing to the United Nations Sustainable Development Goals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdgAlignments.map((sdg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${sdg.color} rounded-xl text-white flex items-center justify-center font-bold mr-6`}>
                    {sdg.sdg.split(' ')[1]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{sdg.goal}</h3>
                    <div className="text-gray-500">{sdg.sdg}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{sdg.description}</p>
                
                <div className={`bg-gradient-to-r ${sdg.color} text-white rounded-lg p-4`}>
                  <div className="font-semibold">{sdg.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-8">
              Be Part of This Impact
            </h2>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Together, we can create even greater impact. Join us in transforming more lives 
              and building stronger communities across Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Support Our Mission
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#1D4ED8] text-[#1D4ED8] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#1D4ED8] hover:text-white transition-all duration-300"
              >
                View Full Report
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
