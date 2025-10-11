import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Users,
  Calendar,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  ArrowRight,
  Headphones,
  Building
} from 'lucide-react';

// Import images
import contactHeroImage from '../assets/image3.png';
import officeImage from '../assets/image1.png';
import teamImage from '../assets/image2.png';
import supportImage from '../assets/image4.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    urgent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Get detailed responses to your inquiries',
      contact: 'info@hopewatchrevival.org',
      responseTime: '24-48 hours',
      bestFor: 'General inquiries, partnership proposals',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+254 123 456 789',
      responseTime: 'Immediate',
      bestFor: 'Urgent matters, quick questions',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      description: 'Quick messaging and updates',
      contact: '+254 987 654 321',
      responseTime: '2-4 hours',
      bestFor: 'Quick updates, program information',
      color: 'from-green-600 to-emerald-700'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Visit Our Office',
      description: 'Meet us in person',
      contact: 'Ogle Girls Secondary School',
      responseTime: 'Immediate',
      bestFor: 'Face-to-face meetings, tours',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: '2:00 PM - 5:00 PM (Emergency only)' },
    { day: 'Public Holidays', hours: 'Emergency contact only' }
  ];

  const departments = [
    {
      name: 'Student Services',
      email: 'students@hopewatchrevival.org',
      phone: '+254 123 456 701',
      head: 'Sarah Mwangi',
      description: 'KUCCPS guidance, mentorship, academic support'
    },
    {
      name: 'Volunteer Coordination',
      email: 'volunteers@hopewatchrevival.org',
      phone: '+254 123 456 702',
      head: 'Ahmed Hassan',
      description: 'Volunteer programs, training, scheduling'
    },
    {
      name: 'Partnerships & Donations',
      email: 'partnerships@hopewatchrevival.org',
      phone: '+254 123 456 703',
      head: 'Fatuma Omar',
      description: 'Corporate partnerships, funding, sponsorships'
    },
    {
      name: 'Community Outreach',
      email: 'outreach@hopewatchrevival.org',
      phone: '+254 123 456 704',
      head: 'Mohamed Ali',
      description: 'Community programs, events, public relations'
    }
  ];

  const faqs = [
    {
      question: 'How can I enroll my child in your programs?',
      answer: 'Contact our Student Services department or visit our office. We offer free consultations to determine the best program fit for each student.'
    },
    {
      question: 'What are the requirements to become a volunteer?',
      answer: 'Minimum high school education, passion for youth development, and commitment to consistency. We provide comprehensive training for all volunteers.'
    },
    {
      question: 'How can my organization partner with Hopewatch?',
      answer: 'Reach out to our Partnerships department. We welcome collaborations with schools, businesses, NGOs, and government institutions.'
    },
    {
      question: 'Do you provide transportation for students?',
      answer: 'We coordinate with local schools and communities to arrange transportation for program activities. Contact us for specific arrangements.'
    },
    {
      question: 'How do you measure program success?',
      answer: 'We track university placements, grade improvements, life skills assessments, and long-term career outcomes of our students.'
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, url: '#', followers: '5.2K' },
    { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, url: '#', followers: '3.8K' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: '#', followers: '4.1K' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, url: '#', followers: '2.5K' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, url: '#', followers: '1.9K' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contactHeroImage} 
            alt="Contact Us - Connect With Our Team"
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
            <MessageCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Contact <span className="text-[#FBBF24]">Us</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 font-light max-w-4xl mx-auto leading-relaxed"
          >
            We're here to help you connect with our programs, answer your questions, 
            and support your journey towards educational excellence
          </motion.p>
        </motion.div>
      </section>

      {/* Office Gallery */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our welcoming environment where transformation happens every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-80">
                <img 
                  src={officeImage} 
                  alt="Hopewatch Revival Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D4ED8]/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Main Office</h3>
                  <p className="text-sm opacity-90">Ogle Girls Secondary School, Habaswein Sub-County</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group h-36">
                <img 
                  src={teamImage} 
                  alt="Our dedicated team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBBF24]/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">Our Team</h4>
                    <p className="text-xs opacity-90">Dedicated professionals</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl group h-36">
                <img 
                  src={supportImage} 
                  alt="Support services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">Support Services</h4>
                    <p className="text-xs opacity-90">24/7 assistance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
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
            <p className="text-xl text-gray-600">Choose the best way to reach us for your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl text-white mb-6`}>
                  {method.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Contact:</span>
                    {method.contact}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-[#FBBF24]" />
                    <span className="font-semibold mr-2">Response:</span>
                    {method.responseTime}
                  </div>
                  <div className="flex items-start text-gray-700">
                    <span className="font-semibold mr-2 mt-0.5">Best for:</span>
                    <span>{method.bestFor}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${method.color} text-white py-3 rounded-lg font-bold transition-all duration-300`}
                >
                  Contact Now
                </motion.button>
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
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you promptly</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-12"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="bg-[#1D4ED8] text-white px-8 py-3 rounded-lg font-bold"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
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
                    <label className="block text-gray-700 font-semibold mb-3">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                    >
                      <option value="">Select category</option>
                      <option value="student">Student Enrollment</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation Information</option>
                      <option value="general">General Information</option>
                      <option value="support">Technical Support</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Brief subject of your message"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="urgent"
                    id="urgent"
                    checked={formData.urgent}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#1D4ED8] bg-gray-100 border-gray-300 rounded focus:ring-[#1D4ED8] focus:ring-2"
                  />
                  <label htmlFor="urgent" className="ml-2 text-gray-700">
                    This is an urgent matter requiring immediate attention
                  </label>
                </div>
                
                <div className="text-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white px-12 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center mx-auto"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Office Hours & Departments */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-[#1D4ED8] mb-8 flex items-center">
                <Clock className="w-8 h-8 mr-3" />
                Office Hours
              </h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                    <span className="font-semibold text-gray-800">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-lg text-white">
                  <div className="flex items-center mb-2">
                    <Headphones className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Emergency Support</span>
                  </div>
                  <p className="text-sm opacity-90">For urgent matters outside office hours, contact +254 987 654 321</p>
                </div>
              </div>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-[#1D4ED8] mb-8 flex items-center">
                <Building className="w-8 h-8 mr-3" />
                Departments
              </h3>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h4>
                    <p className="text-gray-600 mb-3">{dept.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-[#FBBF24]" />
                        <span className="font-semibold mr-2">Head:</span>
                        {dept.head}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-2 text-[#FBBF24]" />
                        <a href={`mailto:${dept.email}`} className="text-[#1D4ED8] hover:underline">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="w-4 h-4 mr-2 text-[#FBBF24]" />
                        <a href={`tel:${dept.phone}`} className="text-[#1D4ED8] hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1D4ED8] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common inquiries</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <ArrowRight className="w-6 h-6 text-[#FBBF24] mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Location */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1D4ED8] to-[#FBBF24]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-white">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <Globe className="w-8 h-8 mr-3" />
                Follow Our Journey
              </h3>
              <p className="text-xl opacity-90 mb-8">
                Stay connected with our latest updates, success stories, and community events
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 flex items-center"
                  >
                    {social.icon}
                    <div className="ml-4">
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm opacity-80">{social.followers} followers</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <MapPin className="w-8 h-8 mr-3" />
                Visit Our Office
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Main Office</h4>
                    <p className="opacity-90">
                      Ogle Girls Secondary School<br />
                      Habaswein Sub-County<br />
                      Wajir County, Kenya
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-2">Directions</h4>
                    <p className="opacity-90">
                      Located in the heart of Habaswein Sub-County, easily accessible by public transport. 
                      Contact us for detailed directions or to arrange a visit.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-[#1D4ED8] px-6 py-3 rounded-lg font-bold transition-all duration-300"
                    >
                      Get Directions
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1D4ED8] transition-all duration-300"
                    >
                      Schedule Visit
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
