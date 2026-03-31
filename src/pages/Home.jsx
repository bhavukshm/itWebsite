import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCloud, 
  FaCode, 
  FaLink, 
  FaCog, 
  FaLifeRing,
  FaArrowRight,
  FaCheckCircle 
} from 'react-icons/fa';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.title = 'VK Enterprises - Smarter Salesforce Solutions for a Connected Business';
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      icon: FaCloud,
      title: 'Implementation',
      description: 'Seamless Salesforce setup tailored to your business needs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaCode,
      title: 'Development',
      description: 'Custom solutions built with Apex, Lightning, and modern tools',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaLink,
      title: 'Integration',
      description: 'Connect Salesforce with your existing systems seamlessly',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaCog,
      title: 'Automation',
      description: 'Streamline workflows and boost productivity with intelligent automation',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FaLifeRing,
      title: 'Support',
      description: '24/7 expert support to keep your Salesforce running smoothly',
      color: 'from-red-500 to-red-600'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];

  const benefits = [
    'Certified Salesforce Experts',
    'Proven Track Record',
    'Custom Solutions',
    'Transparent Communication',
    'On-Time Delivery',
    'Post-Implementation Support'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                🚀 Your Trusted Salesforce Partner
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="gradient-text">Smarter</span> <br />CRM<br />
                Solutions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with expert Salesforce services. We deliver implementation, 
                development, integration, and support that drives real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>Let's Talk</span>
                    <FaArrowRight />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Central Circle */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-[28%] left-[27%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <span className="text-white text-6xl font-bold">VK</span>
                </motion.div>

                {/* Orbiting Service Icons */}
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transformOrigin: '0 0'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2`}
                      style={{
                        position: 'absolute',
                        left: `${Math.cos((index * 72 * Math.PI) / 180) * 200}px`,
                        top: `${Math.sin((index * 72 * Math.PI) / 180) * 200}px`
                      }}
                    >
                      <service.icon className="text-white text-2xl" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Our Services
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
              Comprehensive Salesforce solutions to power your business
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Learn More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose VK Enterprises?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just consultants – we're your strategic partners in Salesforce success. 
                Our team brings expertise, dedication, and a proven methodology to every project.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="text-4xl mb-3">
                      {['🎯', '💡', '🚀', '🏆'][index]}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {['Goal-Driven', 'Innovative', 'Fast Delivery', 'Excellence'][index]}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {['Results that matter', 'Creative solutions', 'On-time, every time', 'Best in class'][index]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how VK Enterprises can help you achieve your Salesforce goals.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl text-lg"
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
