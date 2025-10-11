import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart, Target } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const DonationTracker = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Heart className="w-8 h-8" />,
      value: 125000,
      label: 'Total Raised',
      prefix: '$',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 1247,
      label: 'Active Donors',
      suffix: '+',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: 2500,
      label: 'Students Helped',
      suffix: '+',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 95,
      label: 'Success Rate',
      suffix: '%',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const goalProgress = {
    current: 125000,
    target: 200000,
    percentage: 62.5
  };

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1D4ED8] mb-4">Donation Impact</h2>
          <p className="text-xl text-gray-600">See how your contributions are making a difference</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-6`}>
                {stat.icon}
              </div>
              
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.prefix}
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix || ''}
                  />
                ) : (
                  `0${stat.suffix || ''}`
                )}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Goal Progress */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2025 Fundraising Goal</h3>
              <p className="text-gray-600">Help us reach $200,000 to expand our programs</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#1D4ED8]">
                ${goalProgress.current.toLocaleString()} / ${goalProgress.target.toLocaleString()}
              </div>
              <div className="text-green-600 font-semibold">{goalProgress.percentage}% Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${goalProgress.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#FBBF24] rounded-full"
            />
            <motion.div
              animate={{
                x: [-10, 10, -10]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 h-full w-8 bg-white/30 rounded-full"
              style={{ marginLeft: `${goalProgress.percentage}%` }}
            />
          </div>

          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$0</span>
            <span className="text-[#1D4ED8] font-semibold">Current: ${goalProgress.current.toLocaleString()}</span>
            <span>${goalProgress.target.toLocaleString()}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationTracker;