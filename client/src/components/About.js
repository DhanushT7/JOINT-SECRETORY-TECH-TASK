import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiHeart } from 'react-icons/fi';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FiUsers />,
      title: 'Community First',
      description: 'We believe in building strong communities through meaningful connections and shared experiences.'
    },
    {
      icon: <FiTarget />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create the best event discovery and management platform.'
    },
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional experiences for both event organizers and attendees.'
    },
    {
      icon: <FiHeart />,
      title: 'Passion',
      description: 'Driven by our passion for bringing people together and creating unforgettable moments.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Former event organizer with 10+ years of experience in the industry.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Tech enthusiast with expertise in building scalable platforms.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Creative designer focused on user experience and visual storytelling.'
    }
  ];

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About EventHub</h1>
            <p>We're on a mission to connect people through amazing events and create unforgettable experiences.</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                EventHub was born from a simple idea: making event discovery and management effortless. 
                Founded in 2023, we've grown from a small startup to a trusted platform connecting 
                thousands of event organizers with millions of attendees worldwide.
              </p>
              <p>
                Our journey began when our founder, Sarah Johnson, struggled to find quality events 
                in her local community. She realized there was a gap in the market for a platform 
                that could seamlessly connect event creators with their audiences.
              </p>
              <p>
                Today, EventHub serves as the go-to platform for event discovery, featuring everything 
                from intimate workshops to large-scale conferences. We're proud to have facilitated 
                over 500+ events and connected 10,000+ people through meaningful experiences.
              </p>
            </motion.div>
            
            <motion.div
              className="story-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Events Hosted</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Attendees</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Cities Covered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2
            className="section-title"
            style={{ color: '#333' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            className="section-title"
            style={{ color: '#333' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

