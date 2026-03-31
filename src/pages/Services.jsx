import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCloud, 
  FaCode, 
  FaLink, 
  FaCog, 
  FaLifeRing, 
  FaCheckCircle,
  FaArrowRight 
} from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services - VK Enterprises | Salesforce Solutions';
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const services = [
    {
      icon: FaCloud,
      title: 'Salesforce Implementation',
      description: 'End-to-end Salesforce setup tailored to your unique business requirements',
      features: [
        'Needs assessment and planning',
        'System configuration and customization',
        'Data migration and integration',
        'User training and adoption support',
        'Go-live support and monitoring'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FaCode,
      title: 'Custom Development',
      description: 'Build powerful custom solutions with Apex, Lightning Web Components, and more',
      features: [
        'Custom Apex development',
        'Lightning Web Components (LWC)',
        'Visualforce page development',
        'Custom objects and fields',
        'API development and integration'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FaLink,
      title: 'System Integration',
      description: 'Connect Salesforce seamlessly with your existing business systems',
      features: [
        'Third-party application integration',
        'Legacy system integration',
        'Real-time data synchronization',
        'API development and management',
        'Middleware implementation'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FaCog,
      title: 'Process Automation',
      description: 'Streamline workflows and boost efficiency with intelligent automation',
      features: [
        'Flow Builder automation',
        'Process Builder workflows',
        'Custom workflow rules',
        'Email and alert automation',
        'Approval process setup'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FaLifeRing,
      title: 'Support & Maintenance',
      description: 'Ongoing expert support to keep your Salesforce running at peak performance',
      features: [
        '24/7 technical support',
        'Regular system health checks',
        'Performance optimization',
        'Bug fixes and troubleshooting',
        'Feature enhancements'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FaCloud,
      title: 'Salesforce Consulting',
      description: 'Strategic guidance to maximize your Salesforce investment',
      features: [
        'Salesforce strategy and roadmap',
        'Best practices implementation',
        'Change management',
        'ROI analysis and optimization',
        'Architecture and design review'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, challenges, and goals'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Design a comprehensive solution architecture and implementation roadmap'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build and configure your Salesforce solution with best practices'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous testing to ensure quality, performance, and reliability'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Smooth go-live with minimal disruption to your operations'
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing support and optimization to ensure continued success'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl opacity-90 leading-relaxed"
            >
              Comprehensive Salesforce solutions designed to transform your business operations 
              and drive measurable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Header */}
                <div className={`${service.bgColor} p-6`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures project success from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 h-full">
                  <div className="text-5xl font-bold text-primary-200 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FaArrowRight className="text-primary-300 text-2xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Technologies We Work With</h2>
            <p className="section-subtitle">
              Leveraging the latest Salesforce technologies and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Sales Cloud',
              'Service Cloud',
              'Marketing Cloud',
              'Commerce Cloud',
              'Apex',
              'Lightning Web Components',
              'Visualforce',
              'Flow Builder',
              'Einstein AI',
              'MuleSoft',
              'Heroku',
              'Tableau'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="font-semibold text-gray-900">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your Salesforce needs and create a solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl"
              >
                Request a Consultation
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Our Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
