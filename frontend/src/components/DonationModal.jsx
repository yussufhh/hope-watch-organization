import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Heart, 
  DollarSign, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Star,
  Users,
  GraduationCap,
  Award,
  Gift,
  Lock,
  Globe,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import DonationSuccess from './DonationSuccess';
import DonationLoading from './DonationLoading';

const DonationModal = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationComplete, setDonationComplete] = useState(false);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];
  
  const impactLevels = {
    25: {
      title: 'Supporter',
      impact: 'Provides study materials for 1 student for 1 month',
      icon: '📚',
      color: 'from-blue-400 to-blue-600'
    },
    50: {
      title: 'Advocate',
      impact: 'Covers KUCCPS application fees for 1 student',
      icon: '🎓',
      color: 'from-green-400 to-green-600'
    },
    100: {
      title: 'Champion',
      impact: 'Funds mentorship program for 1 student for 6 months',
      icon: '🌟',
      color: 'from-purple-400 to-purple-600'
    },
    250: {
      title: 'Leader',
      impact: 'Sponsors complete program participation for 1 student',
      icon: '👑',
      color: 'from-orange-400 to-orange-600'
    },
    500: {
      title: 'Transformer',
      impact: 'Establishes scholarship fund for outstanding students',
      icon: '🚀',
      color: 'from-red-400 to-red-600'
    },
    1000: {
      title: 'Visionary',
      impact: 'Funds entire program expansion to new school',
      icon: '💎',
      color: 'from-indigo-400 to-indigo-600'
    }
  };

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard className="w-6 h-6" /> },
    { id: 'mpesa', name: 'M-Pesa', icon: <DollarSign className="w-6 h-6" /> },
    { id: 'paypal', name: 'PayPal', icon: <Globe className="w-6 h-6" /> },
    { id: 'bank', name: 'Bank Transfer', icon: <Shield className="w-6 h-6" /> }
  ];

  const getCurrentAmount = () => customAmount ? parseInt(customAmount) : selectedAmount;

  const getCurrentImpact = () => {
    const amount = getCurrentAmount();
    const closestAmount = predefinedAmounts.reduce((prev, curr) => 
      Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
    );
    return impactLevels[closestAmount] || impactLevels[25];
  };

  const handleDonation = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setDonationComplete(true);
    
    // Auto close after success
    setTimeout(() => {
      onClose();
      setStep(1);
      setDonationComplete(false);
    }, 5000);
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  if (!isOpen || donationComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] p-6 text-white relative overflow-hidden">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-32 h-32 opacity-20"
            >
              <Sparkles className="w-full h-full" />
            </motion.div>
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4"
                >
                  <Heart className="w-6 h-6" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold">Make a Donation</h2>
                  <p className="opacity-90">Transform lives through education</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <motion.div
                      animate={{
                        backgroundColor: step >= stepNum ? '#FBBF24' : 'rgba(255,255,255,0.3)',
                        scale: step === stepNum ? 1.1 : 1
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    >
                      {step > stepNum ? <CheckCircle className="w-5 h-5" /> : stepNum}
                    </motion.div>
                    {stepNum < 3 && (
                      <motion.div
                        animate={{
                          backgroundColor: step > stepNum ? '#FBBF24' : 'rgba(255,255,255,0.3)'
                        }}
                        className="w-12 h-1 rounded"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <AnimatePresence mode="wait">
              {/* Step 1: Amount Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  {/* Donation Type */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Donation Type</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['one-time', 'monthly'].map((type) => (
                        <motion.button
                          key={type}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setDonationType(type)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            donationType === type
                              ? 'border-[#1D4ED8] bg-blue-50 text-[#1D4ED8]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            {type === 'one-time' ? <Gift className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
                          </div>
                          <div className="font-semibold capitalize">{type.replace('-', ' ')}</div>
                          <div className="text-sm opacity-75">
                            {type === 'one-time' ? 'Single donation' : 'Recurring monthly'}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Select Amount</h3>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <motion.button
                          key={amount}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            selectedAmount === amount && !customAmount
                              ? 'border-[#1D4ED8] bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                          }`}
                        >
                          <div className="text-2xl font-bold">${amount}</div>
                          {donationType === 'monthly' && (
                            <div className="text-sm opacity-75">/month</div>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Or enter custom amount
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Enter amount"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Impact Preview */}
                  {getCurrentAmount() > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`bg-gradient-to-r ${getCurrentImpact().color} rounded-2xl p-6 text-white`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{getCurrentImpact().icon}</div>
                        <div>
                          <h4 className="text-xl font-bold">{getCurrentImpact().title}</h4>
                          <p className="opacity-90">Impact Level</p>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed">{getCurrentImpact().impact}</p>
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(2)}
                    disabled={getCurrentAmount() <= 0}
                    className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    Continue to Details
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Donor Information */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-800">Donor Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={donorInfo.phone}
                        onChange={(e) => setDonorInfo(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={donorInfo.anonymous}
                      onChange={(e) => setDonorInfo(prev => ({ ...prev, anonymous: e.target.checked }))}
                      className="w-4 h-4 text-[#1D4ED8] bg-gray-100 border-gray-300 rounded focus:ring-[#1D4ED8]"
                    />
                    <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                      Make this donation anonymous
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(3)}
                      disabled={!donorInfo.name || !donorInfo.email}
                      className="flex-1 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      Continue to Payment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && !donationComplete && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-800">Payment Method</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <motion.button
                        key={method.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === method.id
                            ? 'border-[#1D4ED8] bg-blue-50 text-[#1D4ED8]'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          {method.icon}
                          <span className="mt-2 font-medium">{method.name}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Donation Summary */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Donation Summary</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Donation Type:</span>
                        <span className="font-medium capitalize">{donationType.replace('-', ' ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-bold text-xl text-[#1D4ED8]">
                          ${getCurrentAmount()}{donationType === 'monthly' ? '/month' : ''}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Donor:</span>
                        <span className="font-medium">
                          {donorInfo.anonymous ? 'Anonymous' : donorInfo.name}
                        </span>
                      </div>
                      <div className="pt-3 border-t">
                        <div className="flex items-center text-green-600">
                          <Shield className="w-4 h-4 mr-2" />
                          <span className="text-sm">Secure SSL encrypted payment</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(2)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleDonation}
                      disabled={isProcessing}
                      className="flex-1 bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] text-white py-3 rounded-xl font-bold disabled:opacity-50 flex items-center justify-center"
                    >
                      {isProcessing ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Lock className="w-5 h-5 mr-2" />
                          Donate ${getCurrentAmount()}
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}


            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Success Modal */}
      {donationComplete && (
        <DonationSuccess 
          amount={getCurrentAmount()}
          impact={getCurrentImpact().impact}
          onClose={() => {
            setDonationComplete(false);
            setStep(1);
            setSelectedAmount(50);
            setCustomAmount('');
            setDonorInfo({
              name: '',
              email: '',
              phone: '',
              anonymous: false
            });
            onClose();
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default DonationModal;