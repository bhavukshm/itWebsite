import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaIndustry, FaHospital, FaShoppingCart, FaGraduationCap, FaBuilding, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.title = 'Our Projects - VK Enterprises | Success Stories';
  }, []);

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Enterprise Sales Cloud Implementation',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      icon: FaIndustry,
      description: 'Implemented comprehensive Sales Cloud solution for a Fortune 500 manufacturing company, improving sales efficiency by 45%.',
      results: [
        '45% increase in sales productivity',
        '30% faster deal closure',
        'Automated quote-to-cash process',
        'Real-time sales analytics dashboard'
      ],
      technologies: ['Sales Cloud', 'CPQ', 'Einstein Analytics', 'Apex'],
      color: 'from-blue-500 to-blue-600',
      category: 'implementation'
    },
    {
      title: 'Healthcare Patient Management System',
      client: 'HealthFirst Medical Group',
      industry: 'Healthcare',
      icon: FaHospital,
      description: 'Built custom patient management solution with HIPAA-compliant integrations, streamlining patient care workflows.',
      results: [
        '60% reduction in administrative time',
        'HIPAA-compliant data management',
        'Integrated appointment scheduling',
        'Patient portal with secure messaging'
      ],
      technologies: ['Health Cloud', 'Lightning Web Components', 'Integration', 'Security'],
      color: 'from-red-500 to-red-600',
      category: 'development'
    },
    {
      title: 'E-Commerce Platform Integration',
      client: 'TrendyMart Retail',
      industry: 'Retail',
      icon: FaShoppingCart,
      description: 'Integrated Salesforce with e-commerce platform, enabling unified customer view and personalized marketing.',
      results: [
        '35% increase in customer retention',
        'Real-time inventory synchronization',
        'Personalized email campaigns',
        '25% boost in cross-sell revenue'
      ],
      technologies: ['Commerce Cloud', 'Marketing Cloud', 'MuleSoft', 'API'],
      color: 'from-green-500 to-green-600',
      category: 'integration'
    },
    {
      title: 'Education CRM for Student Management',
      client: 'Premier University',
      industry: 'Education',
      icon: FaGraduationCap,
      description: 'Deployed Education Cloud for student lifecycle management from admission to alumni engagement.',
      results: [
        '50% faster enrollment process',
        'Improved student engagement',
        'Automated communication workflows',
        'Comprehensive student analytics'
      ],
      technologies: ['Education Cloud', 'Flow Builder', 'Communities', 'Reports'],
      color: 'from-purple-500 to-purple-600',
      category: 'implementation'
    },
    {
      title: 'Financial Services Automation',
      client: 'Capital Financial Group',
      industry: 'Financial Services',
      icon: FaBuilding,
      description: 'Automated loan application and approval processes, reducing processing time from weeks to days.',
      results: [
        '70% faster loan processing',
        'Automated compliance checks',
        'Digital document management',
        'Enhanced customer experience'
      ],
      technologies: ['Financial Services Cloud', 'Process Builder', 'DocuSign', 'Automation'],
      color: 'from-indigo-500 to-indigo-600',
      category: 'automation'
    },
    {
      title: 'Sales Analytics & Reporting Dashboard',
      client: 'TechVenture Inc',
      industry: 'Technology',
      icon: FaChartLine,
      description: 'Designed advanced analytics dashboards with Einstein AI for predictive sales forecasting.',
      results: [
        '90% forecast accuracy',
        'Real-time performance tracking',
        'AI-powered insights',
        'Mobile-optimized dashboards'
      ],
      technologies: ['Einstein Analytics', 'Tableau CRM', 'Lightning', 'Reports'],
      color: 'from-orange-500 to-orange-600',
      category: 'development'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'development', label: 'Development' },
    { id: 'integration', label: 'Integration' },
    { id: 'automation', label: 'Automation' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl opacity-90 leading-relaxed"
            >
              Discover how we've helped businesses across industries transform their operations 
              with innovative Salesforce solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${project.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <project.icon className="text-3xl" />
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.client}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-600 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-subtitle">Results that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Delivered', icon: '🚀' },
              { number: '50+', label: 'Happy Clients', icon: '😊' },
              { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '40%', label: 'Avg. Productivity Gain', icon: '📈' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "VK Enterprises transformed our sales process completely. The implementation was smooth and the results exceeded our expectations.",
                author: "Sarah Johnson",
                role: "VP of Sales, Global Manufacturing Corp"
              },
              {
                quote: "Their team's expertise in Healthcare Cloud was evident from day one. They delivered a HIPAA-compliant solution that works perfectly.",
                author: "Dr. Michael Chen",
                role: "CTO, HealthFirst Medical Group"
              },
              {
                quote: "The integration project was complex, but VK Enterprises made it seem easy. Our customer data is now unified and actionable.",
                author: "Emily Rodriguez",
                role: "Director of IT, TrendyMart Retail"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-4xl text-primary-600 mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
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
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a Salesforce solution that transforms your business just like these projects.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
