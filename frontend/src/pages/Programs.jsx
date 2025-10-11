import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Target, 
  Star, 
  CheckCircle, 
  Calendar, 
  Clock,
  Award,
  Lightbulb,
  Heart,
  Globe
} from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Import images
import programsHeroImage from '../assets/image2.png';
import kuccpsImage from '../assets/image1.png';
import mentorshipImage from '../assets/image3.png';
import skillsImage from '../assets/image4.png';
import successImage from '../assets/image5.png';

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      id: 1,
      title: "KUCCPS University Placement",
      icon: <GraduationCap className="w-12 h-12" />,
      image: kuccpsImage,
      description: "Comprehensive guidance through the Kenya Universities and Colleges Central Placement Service",
      features: [
        "Account setup assistance",
        "Course selection guidance", 
        "Application deadline tracking",
        "Document preparation support",
        "Interview preparation"
      ],
      duration: "3 Months",
      participants: "200+",
      successRate: "95%",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "One-on-One Mentorship",
      icon: <Users className="w-12 h-12" />,
      image: mentorshipImage,
      description: "Personalized guidance from experienced professionals and university graduates",
      features: [
        "Career path planning",
        "Academic goal setting",
        "Personal development coaching",
        "Network building opportunities",
        "Monthly progress reviews"
      ],
      duration: "12 Months",
      participants: "150+",
      successRate: "98%",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Life Skills Development",
      icon: <Lightbulb className="w-12 h-12" />,
      image: skillsImage,
      description: "Essential skills training for personal and professional success",
      features: [
        "Leadership development",
        "Communication skills",
        "Financial literacy",
        "Digital literacy",
        "Critical thinking"
      ],
      duration: "6 Months",
      participants: "300+",
      successRate: "92%",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Community Service Program",
      icon: <Heart className="w-12 h-12" />,
      image: successImage,
      description: "Engaging students in meaningful community development projects",
      features: [
        "Environmental conservation",
        "Literacy programs",
        "Health awareness campaigns",
        "Youth leadership projects",
        "Cultural preservation"
      ],
      duration: "Ongoing",
      participants: "500+",
      successRate: "100%",
      color: "from-orange-500 to-red-600"
    }
  ];

  const achievements = [
    { number: 850, label: 'Students Enrolled', suffix: '+' },
    { number: 12, label: 'Active Programs', suffix: '' },
    { number: 96, label: 'Success Rate', suffix: '%' },
    { number: 25, label: 'Partner Institutions', suffix: '+' }
  ];

  const testimonials = [
    {
      name: "Amina Hassan",
      program: "KUCCPS Placement",
      university: "University of Nairobi",
      quote: "The KUCCPS guidance program helped me secure admission to my dream course. The mentors were incredibly supportive throughout the entire process.",
      rating: 5
    },
    {
      name: "Mohamed Ali",
      program: "Life Skills Development", 
      achievement: "Youth Leader",
      quote: "The life skills program transformed my confidence and leadership abilities. I now lead community projects in my village.",
      rating: 5
    },
    {
      name: "Fatuma Omar",
      program: "Mentorship Program",
      university: "Technical University of Kenya",
      quote: "My mentor guided me not just academically but also helped me develop a clear vision for my future career in engineering.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={programsHeroImage} 
            alt="Our Programs - Transforming Lives Through Education"
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
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our <span className="text-[#FBBF24]">Programs</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive programs designed to empower students and transform communities through education, mentorship, and skills development
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Program Impact</h2>
            <p className="text-xl text-gray-600">Measuring our success through student achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Programs Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Featured Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive programs tailored to student needs</p>
          </motion.div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl text-white mb-6`}>
                    {program.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Clock className="w-6 h-6 text-[#1D4ED8] mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold">{program.duration}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Users className="w-6 h-6 text-[#1D4ED8] mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Participants</div>
                      <div className="font-semibold">{program.participants}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Target className="w-6 h-6 text-[#1D4ED8] mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Success Rate</div>
                      <div className="font-semibold">{program.successRate}</div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group min-h-[400px]">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{program.icon}</div>
                        <h4 className="text-2xl font-bold mb-4">{program.title}</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="text-4xl font-bold">{program.successRate}</div>
                            <div className="opacity-90">Success Rate</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold">{program.participants}</div>
                            <div className="opacity-90">Students Served</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Student Success Stories</h2>
            <p className="text-xl opacity-90">Hear from students whose lives have been transformed</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FBBF24] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="opacity-90">{testimonial.program}</div>
                  <div className="text-[#FBBF24] text-sm">
                    {testimonial.university || testimonial.achievement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-8">
              Ready to Transform Your Future?
            </h2>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of students who have already benefited from our comprehensive programs. 
              Your journey to success starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#1D4ED8] text-[#1D4ED8] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#1D4ED8] hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
