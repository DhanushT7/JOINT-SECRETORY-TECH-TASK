const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/events-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event Schema
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'General'
  },
  location: {
    type: String,
    default: 'TBD'
  },
  price: {
    type: Number,
    default: 0
  }
});

const Event = mongoose.model('Event', eventSchema);

// Sample events data
const sampleEvents = [
  {
    name: "TechSprint 2025",
    description: "A 24-hour hackathon focusing on AI and web development.",
    date: "2025-09-15",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
    category: "Hackathon",
    location: "San Francisco, CA",
    price: 0
  },
  {
    name: "React Developer Conference",
    description: "Join the biggest React conference with top speakers and workshops.",
    date: "2025-08-20",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Conference",
    location: "New York, NY",
    price: 299
  },
  {
    name: "AI Workshop Series",
    description: "Learn machine learning and AI fundamentals in this hands-on workshop.",
    date: "2025-07-10",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Workshop",
    location: "Austin, TX",
    price: 149
  },
  {
    name: "Web Development Bootcamp",
    description: "Intensive 5-day bootcamp covering full-stack web development.",
    date: "2025-06-25",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "Bootcamp",
    location: "Seattle, WA",
    price: 599
  },
  {
    name: "Startup Networking Event",
    description: "Connect with entrepreneurs, investors, and tech professionals.",
    date: "2025-05-30",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    category: "Networking",
    location: "Boston, MA",
    price: 25
  }
];

// Seed function
async function seedDatabase() {
  try {
    // Clear existing data
    await Event.deleteMany({});
    console.log('Cleared existing events');

    // Insert sample data
    const insertedEvents = await Event.insertMany(sampleEvents);
    console.log(`Successfully inserted ${insertedEvents.length} events`);

    // Display inserted events
    console.log('\nInserted events:');
    insertedEvents.forEach(event => {
      console.log(`- ${event.name} (${event.date})`);
    });

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seed function
seedDatabase();

