import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiTag } from 'react-icons/fi';
import Countdown from 'react-countdown';
import './EventsSection.css';

const EventsSection = ({ events, loading }) => {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };



  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="countdown-completed">Event has started!</span>;
    }
    return (
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-number">{days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{minutes}</span>
          <span className="countdown-label">Mins</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{seconds}</span>
          <span className="countdown-label">Secs</span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading events...</p>
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="no-events">
        <h3>No events available at the moment</h3>
        <p>Check back soon for exciting upcoming events!</p>
      </div>
    );
  }

  return (
    <div className="events-grid">
      {events.map((event, index) => (
        <motion.div
          key={event._id || index}
          className="event-card card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <div className="event-header">
            <div className="event-category">
              <FiTag />
              {event.category || 'General'}
            </div>
            <div className="event-price">
              {event.price > 0 ? `$${event.price}` : 'Free'}
            </div>
          </div>
          
          <h3 className="event-title">{event.name}</h3>
          <p className="event-description">{event.description}</p>
          
          <div className="event-details">
            <div className="event-detail">
              <FiCalendar />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="event-detail">
              <FiMapPin />
              <span>{event.location || 'Location TBD'}</span>
            </div>
            <div className="event-detail">
              <FiClock />
              <span>Starts in:</span>
            </div>
          </div>
          
          <div className="countdown-container">
            <Countdown
              date={new Date(event.date)}
              renderer={renderCountdown}
            />
          </div>
          
          <div className="event-footer">
            <button className="btn btn-primary">Register Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventsSection;

