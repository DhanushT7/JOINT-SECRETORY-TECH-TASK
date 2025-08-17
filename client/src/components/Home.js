import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiMapPin, FiStar } from 'react-icons/fi';
import EventsSection from './EventsSection';
import './Home.css';

const Home = ({ events, loading }) => {
  const stats = [
    { number: '500+', label: 'Events Hosted', icon: <FiCalendar /> },
    { number: '10K+', label: 'Happy Attendees', icon: <FiUsers /> },
    { number: '50+', label: 'Cities Covered', icon: <FiMapPin /> },
    { number: '4.9', label: 'Average Rating', icon: <FiStar /> }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Amazing Events
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of people at the most exciting tech events, workshops, and conferences
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#events" className="btn btn-primary">
              Explore Events
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.h2
            className="section-title"
            style={{ color: '#333' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose EventHub?
          </motion.h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
          <EventsSection events={events} loading={loading} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.h2
            className="section-title"
            style={{ color: '#333' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <div className="features-grid">
            <motion.div
              className="feature-card card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🎯</div>
              <h3>Curated Events</h3>
              <p>Hand-picked events from the best organizers and venues around the world.</p>
            </motion.div>
            
            <motion.div
              className="feature-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🚀</div>
              <h3>Easy Booking</h3>
              <p>Simple and secure booking process with instant confirmation.</p>
            </motion.div>
            
            <motion.div
              className="feature-card card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">💎</div>
              <h3>Premium Experience</h3>
              <p>Exclusive access to VIP events and premium networking opportunities.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

