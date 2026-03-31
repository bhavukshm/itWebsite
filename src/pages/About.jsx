import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaEye, FaBullseye, FaUsers, FaAward, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.title = 'About Us - VK Enterprises | Salesforce Experts';
  }, []);

  const values = [
    {
      icon: FaHeart,
      title: 'Client-Centric',
      description: 'Your success is our priority. We listen, understand, and deliver solutions that truly matter.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to bring you cutting-edge Salesforce solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Quality is non-negotiable. We deliver exceptional work on every project, every time.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We work as an extension of your team, fostering transparent and productive partnerships.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const timeline = [
    { year: '2019', event: 'Company Founded', description: 'VK Enterprises was established with a vision to simplify Salesforce for businesses' },
    { year: '2020', event: 'First Major Client', description: 'Successfully delivered our first enterprise-level Salesforce implementation' },
    { year: '2021', event: 'Team Expansion', description: 'Grew our team to 10+ certified Salesforce professionals' },
    { year: '2022', event: 'Salesforce Partner', description: 'Achieved official Salesforce Partner status' },
    { year: '2023', event: '50+ Projects', description: 'Completed 50+ successful Salesforce projects across industries' },
    { year: '2024', event: 'Industry Leader', description: 'Recognized as a leading Salesforce services provider' }
  ];

  const teamStats = [
    { icon: '👥', number: '15+', label: 'Team Members' },
    { icon: '🎓', number: '50+', label: 'Certifications' },
    { icon: '🌍', number: '10+', label: 'Countries Served' },
    { icon: '⭐', number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              About VK Enterprises
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl opacity-90 leading-relaxed"
            >
              We're a team of passionate Salesforce experts dedicated to helping businesses 
              harness the full power of the world's #1 CRM platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                VK Enterprises was born from a simple belief: businesses deserve Salesforce solutions 
                that are powerful, practical, and perfectly aligned with their goals.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Since 2019, we've been helping organizations of all sizes transform their operations 
                through expert Salesforce implementation, development, and support. What started as 
                a small consulting team has grown into a full-service Salesforce partner.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve clients across multiple industries, delivering solutions 
                that drive real business value and lasting success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <FaBullseye className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with Salesforce solutions that streamline operations, 
                enhance customer relationships, and drive sustainable growth. We're committed 
                to delivering excellence, innovation, and measurable results in every project.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                <FaEye className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted Salesforce partner globally, recognized for transforming 
                businesses through cutting-edge technology, exceptional service, and unwavering 
                commitment to client success. We envision a connected world where every business thrives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Milestones that define our growth</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-center gap-8">
                  {/* Year */}
                  <div className={`flex-shrink-0 w-24 ${index % 2 === 0 ? 'order-1 text-right' : 'order-2'}`}>
                    <div className="text-2xl font-bold text-primary-600">{item.year}</div>
                  </div>

                  {/* Connector */}
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full relative z-10 order-2">
                    {index !== timeline.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-primary-300"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Businesses Trust Us</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            We combine technical expertise with business acumen to deliver Salesforce solutions 
            that truly transform organizations. Our certified team, proven methodologies, and 
            commitment to your success set us apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl inline-block"
            >
              Partner With Us
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-block"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
