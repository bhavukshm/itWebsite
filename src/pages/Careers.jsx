import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaUsers, FaRocket, FaHeart, FaGraduationCap } from 'react-icons/fa';

const Careers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.title = 'Careers - VK Enterprises | Join Our Team';
  }, []);

  const openPositions = [
    {
      title: 'Senior Salesforce Developer',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We\'re looking for an experienced Salesforce Developer to lead complex development projects and mentor junior team members.',
      requirements: [
        'Strong Apex and Lightning Web Components expertise',
        'Salesforce Platform Developer II certification',
        'Experience with integration patterns',
        'Excellent problem-solving skills'
      ]
    },
    {
      title: 'Salesforce Administrator',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Join our team as a Salesforce Administrator to help clients optimize their Salesforce implementations.',
      requirements: [
        'Salesforce Administrator certification required',
        'Experience with Flow Builder and Process Builder',
        'Strong communication skills',
        'Understanding of Sales and Service Cloud'
      ]
    },
    {
      title: 'Salesforce Business Analyst',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3-4 years',
      description: 'Bridge the gap between business needs and technical solutions as a Salesforce Business Analyst.',
      requirements: [
        'Experience gathering and documenting requirements',
        'Knowledge of Salesforce best practices',
        'Strong analytical and communication skills',
        'Salesforce certification is a plus'
      ]
    },
    {
      title: 'Salesforce Consultant',
      location: 'Remote / On-site',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Provide strategic guidance to clients and lead Salesforce implementation projects.',
      requirements: [
        'Proven track record in Salesforce consulting',
        'Multiple Salesforce certifications',
        'Experience with Sales, Service, or Marketing Cloud',
        'Excellent client-facing skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision insurance coverage'
    },
    {
      icon: '🏖️',
      title: 'Flexible Time Off',
      description: 'Generous PTO policy including vacation, sick days, and holidays'
    },
    {
      icon: '💻',
      title: 'Remote Work',
      description: 'Work from anywhere with flexible remote and hybrid options'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Salesforce certification sponsorship and continuous learning opportunities'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear career progression paths with mentorship programs'
    },
    {
      icon: '🎉',
      title: 'Team Events',
      description: 'Regular team building activities and company celebrations'
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'Flexible schedules to maintain healthy work-life balance'
    }
  ];

  const values = [
    {
      icon: FaUsers,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals who support and inspire each other'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Work on cutting-edge projects using the latest Salesforce technologies'
    },
    {
      icon: FaHeart,
      title: 'Work You Love',
      description: 'Meaningful projects that make a real impact on businesses'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Grow your skills with training, certifications, and mentorship'
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
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl opacity-90 leading-relaxed"
            >
              Build your career with a team that values innovation, growth, and making a difference. 
              Explore exciting opportunities in Salesforce.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Work With Us?</h2>
            <p className="section-subtitle">
              More than just a job - it's a place where you'll thrive
            </p>
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
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Find your next career opportunity
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-primary-600" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaClock className="text-primary-600" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaBriefcase className="text-primary-600" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 md:mt-0 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Benefits & Perks</h2>
            <p className="section-subtitle">
              We invest in our team's success and well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No Open Positions CTA */}
      <section className="section-padding bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented Salesforce professionals. Send us your resume 
              and let's discuss how you can contribute to our team.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg text-lg"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
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
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join VK Enterprises and be part of a team that's transforming businesses through Salesforce innovation.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl"
            >
              Apply Today
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
