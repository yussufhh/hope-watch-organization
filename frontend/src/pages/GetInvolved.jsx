import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  DollarSign, 
  Users, 
  Calendar, 
  MapPin, 
  Phone,
  Mail,
  Clock,
  Award,
  Target,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Handshake
} from 'lucide-react';

// Import images
import getInvolvedHeroImage from '../assets/image5.png';
import volunteerImage from '../assets/image1.png';
import donateImage from '../assets/image2.png';
import partnerImage from '../assets/image3.png';
import communityImage from '../assets/image4.png';

const GetInvolved = () => {
  const [selectedWay, setSelectedWay] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    availability: '',
    message: ''
  });

  const waysToHelp = [
    {
      id: 'volunteer',
      title: 'Become a Volunteer',
      icon: <Users className="w-12 h-12" />,
      description: 'Share your skills and time to directly mentor and guide students',
      commitment: '4-6 hours/week',
      impact: '10-15 students directly',
      requirements: [
        'Minimum high school education',
        'Passion for youth development',
        'Basic communication skills',
        'Commitment to consistency'
      ],
      benefits: [
        'Make direct impact on young lives',
        'Develop leadership skills',
        'Build meaningful connections',
        'Receive volunteer certificates'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'donate',
      title: 'Financial Support',
      icon: <Heart className="w-12 h-12" />,
      description: 'Provide crucial funding to expand our programs and reach more students',
      commitment: 'One-time or monthly',
      impact: 'Supports entire programs',
      requirements: [
        'Any amount welcomed',
        'Secure online donation',
        'Tax-deductible receipts',
        'Transparent fund usage'
      ],
      benefits: [
        'Transform multiple lives',
        'Tax benefits available',
        'Regular impact reports',
        'Donor recognition programs'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'mentor',
      title: 'Professional Mentorship',
      icon: <Award className="w-12 h-12" />,
      description: 'Provide career guidance and professional insights to aspiring students',
      commitment: '2-3 hours/month',
      impact: '3-5 students personally',
      requirements: [
        'Professional experience',
        'Industry expertise',
        'Mentoring willingness',
        'Long-term commitment'
      ],
      benefits: [
        'Share professional expertise',
        'Develop next generation',
        'Expand professional network',
        'Personal fulfillment'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'partner',
      title: 'Institutional Partnership',
      icon: <Handshake className="w-12 h-12" />,
      description: 'Partner with us as an organization, school, or business',
      commitment: 'Varies by partnership',
      impact: 'Hundreds of students',
      requirements: [
        'Registered organization',
        'Shared vision alignment',
        'Resource contribution',
        'Partnership agreement'
      ],
      benefits: [
        'Amplified social impact',
        'Enhanced reputation',
        'Networking opportunities',
        'Joint program development'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const donationTiers = [
    {
      amount: 25,
      title: 'Supporter',
      description: 'Provides study materials for one student',
      impact: 'Textbooks and supplies for 1 month',
      supporters: 150
    },
    {
      amount: 50,
      title: 'Advocate',
      description: 'Covers KUCCPS application fees for one student',
      impact: 'Complete university application support',
      supporters: 89
    },
    {
      amount: 100,
      title: 'Champion',
      description: 'Funds mentorship program for one student',
      impact: '6 months of one-on-one mentoring',
      supporters: 67
    },
    {
      amount: 250,
      title: 'Leader',
      description: 'Sponsors complete program participation for one student',
      impact: 'Full year comprehensive support',
      supporters: 34
    },
    {
      amount: 500,
      title: 'Transformer',
      description: 'Establishes scholarship fund for outstanding students',
      impact: 'University fees for deserving students',
      supporters: 18
    },
    {
      amount: 1000,
      title: 'Visionary',
      description: 'Funds entire program expansion to new school',
      impact: 'Launch programs in new communities',
      supporters: 8
    }
  ];

  const volunteerOpportunities = [
    {
      role: 'Academic Tutor',
      icon: <BookOpen className="w-8 h-8" />,
      description: 'Help students with specific subjects and exam preparation',
      timeCommitment: '3-4 hours/week',
      location: 'Various schools',
      requirements: 'Subject expertise, teaching ability'
    },
    {
      role: 'KUCCPS Advisor',
      icon: <Target className="w-8 h-8" />,
      description: 'Guide students through university application processes',
      timeCommitment: '2-3 hours/week',
      location: 'Community centers',
      requirements: 'University experience, application knowledge'
    },
    {
      role: 'Life Skills Trainer',
      icon: <Users className="w-8 h-8" />,
      description: 'Teach essential life skills and personal development',
      timeCommitment: '4-5 hours/week',
      location: 'Training venues',
      requirements: 'Professional experience, communication skills'
    },
    {
      role: 'Community Coordinator',
      icon: <Globe className="w-8 h-8" />,
      description: 'Help organize community events and outreach programs',
      timeCommitment: '5-6 hours/week',
      location: 'Field work',
      requirements: 'Organization skills, community engagement'
    }
  ];

  const impactStories = [
    {
      name: 'Sarah Johnson',
      role: 'Volunteer Mentor',
      duration: '2 years',
      impact: 'Mentored 12 students, 10 gained university admission',
      quote: 'Seeing these young minds flourish and achieve their dreams is the most rewarding experience of my life.',
      image: '👩‍🏫'
    },
    {
      name: 'Tech Solutions Ltd',
      role: 'Corporate Partner',
      duration: '3 years',
      impact: 'Sponsored digital literacy program for 300+ students',
      quote: 'Our partnership with Hopewatch has not only transformed communities but also our company culture.',
      image: '🏢'
    },
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Professional Mentor',
      duration: '18 months',
      impact: '5 students pursuing medical careers',
      quote: 'Guiding these aspiring medical professionals reminds me why I chose healthcare in the first place.',
      image: '👨‍⚕️'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={getInvolvedHeroImage} 
            alt="Get Involved - Join Our Mission"
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
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Get <span className="text-[#FBBF24]">Involved</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Join our mission to empower young minds and transform communities. 
            Every contribution makes a meaningful difference in a student's life.
          </motion.p>
        </motion.div>
      </section>

      {/* Ways to Help */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600">Choose how you'd like to contribute to our mission</p>
          </motion.div>

          {/* Way Selection Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {waysToHelp.map((way) => (
              <motion.button
                key={way.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedWay(way.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  selectedWay === way.id
                    ? 'bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {way.title}
              </motion.button>
            ))}
          </div>

          {/* Selected Way Details */}
          <motion.div
            key={selectedWay}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-12 shadow-xl"
          >
            {waysToHelp.map((way) => 
              way.id === selectedWay && (
                <div key={way.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${way.color} rounded-2xl text-white mb-8`}>
                      {way.icon}
                    </div>
                    
                    <h3 className="text-4xl font-bold text-gray-800 mb-6">{way.title}</h3>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">{way.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <Clock className="w-6 h-6 text-[#1D4ED8] mb-2" />
                        <div className="text-sm text-gray-500">Time Commitment</div>
                        <div className="font-semibold">{way.commitment}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <Target className="w-6 h-6 text-[#1D4ED8] mb-2" />
                        <div className="text-sm text-gray-500">Direct Impact</div>
                        <div className="font-semibold">{way.impact}</div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${way.color} text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Get Started
                    </motion.button>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h4>
                      <ul className="space-y-3">
                        {way.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {way.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <Star className="w-5 h-5 text-[#FBBF24] mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Donation Impact Levels</h2>
            <p className="text-xl text-gray-600">See how your contribution creates lasting change</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#1D4ED8] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#1D4ED8] mb-2">${tier.amount}</div>
                  <div className="text-xl font-bold text-gray-800">{tier.title}</div>
                  <div className="text-sm text-gray-500">{tier.supporters} supporters</div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{tier.description}</p>
                
                <div className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-lg p-4 text-white text-center mb-6">
                  <div className="font-semibold">{tier.impact}</div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#1D4ED8] text-white py-3 rounded-lg font-bold hover:bg-[#1E40AF] transition-colors duration-300"
                >
                  Donate ${tier.amount}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">Find the perfect way to share your skills and passion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-xl text-white flex items-center justify-center mr-6">
                    {opportunity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{opportunity.role}</h3>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-[#FBBF24] mr-3" />
                    {opportunity.timeCommitment}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-[#FBBF24] mr-3" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Award className="w-5 h-5 text-[#FBBF24] mr-3" />
                    {opportunity.requirements}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white py-3 rounded-lg font-bold transition-all duration-300"
                >
                  Apply for Role
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Contributor Impact Stories</h2>
            <p className="text-xl opacity-90">Meet the amazing people who are making a difference</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-center">{story.image}</div>
                
                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <div className="text-[#FBBF24] font-semibold mb-2">{story.role}</div>
                <div className="text-sm opacity-80 mb-4">{story.duration} of contribution</div>
                
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <div className="font-semibold">{story.impact}</div>
                </div>
                
                <blockquote className="italic leading-relaxed">
                  "{story.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Fill out this form and we'll get in touch with you soon</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Area of Interest *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                  >
                    <option value="">Select your interest</option>
                    <option value="volunteer">Volunteer Mentor</option>
                    <option value="tutor">Academic Tutor</option>
                    <option value="mentor">Professional Mentor</option>
                    <option value="donation">Financial Support</option>
                    <option value="partnership">Institutional Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-3">Relevant Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Tell us about your background and relevant experience"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-3">Availability</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="e.g., Weekends, Evenings, 2-3 hours/week"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-3">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Any additional information or questions?"
                />
              </div>
              
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white px-12 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  Submit Application
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">Have questions? We're here to help you get started</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-xl text-white flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed information about our programs</p>
              <a href="mailto:info@hopewatchrevival.org" className="text-[#1D4ED8] font-semibold hover:underline">
                info@hopewatchrevival.org
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-xl text-white flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:+254123456789" className="text-[#1D4ED8] font-semibold hover:underline">
                +254 123 456 789
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-xl text-white flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">Meet us at our community center</p>
              <p className="text-[#1D4ED8] font-semibold">
                Ogle Girls Secondary School<br />
                Habaswein Sub-County, Wajir County
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
