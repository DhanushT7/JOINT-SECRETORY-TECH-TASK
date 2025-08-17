EventHub - MERN Stack Events Application

A simple events management frontend page built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features a beautiful UI with animations, real-time countdown timers, and a responsive design.

## Features

### Frontend (React.js)
- **Modern UI/UX**: Beautiful gradient designs with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Components**: 
  - Animated navigation bar with dropdown menu
  - Real-time countdown timers for events
  - Smooth page transitions with Framer Motion
  - Interactive contact form with validation
- **Event Display**: 
  - Event cards with detailed information
  - Category filtering
  - Price display and registration buttons
  - Location and date formatting

### Backend (Node.js + Express.js)
- **RESTful API**: Clean API endpoints for event management
- **MongoDB Integration**: Robust database with Mongoose ODM
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Secure configuration management

### Database (MongoDB)
- **Event Schema**: Comprehensive event data structure
- **Sample Data**: Pre-seeded with 5 sample events including TechSprint 2025
- **Scalable Design**: Ready for production deployment


mern-events-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js   # Navigation component
│   │   │   ├── Footer.js   # Footer component
│   │   │   ├── Home.js     # Home page
│   │   │   ├── About.js    # About page
│   │   │   ├── Contact.js  # Contact page
│   │   │   └── EventsSection.js # Events display
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point
│   └── package.json
├── server.js               # Express server
├── seedData.js            # Database seeding script
├── config.env             # Environment variables
└── package.json
```

## Pages & Components

### Navigation Bar
- **Logo**: EventHub branding
- **Menu Items**: Home, About, Contact
- **Dropdown**: Event categories (Tech Events, Workshops, Conferences, Hackathons)
- **Mobile Responsive**: Hamburger menu for mobile devices

### Home Page
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Stats Section**: Key metrics and achievements
- **Events Section**: Display of upcoming events with countdown timers
- **Features Section**: Platform highlights and benefits

### Events Display
- **Event Cards**: Modern card design with hover effects
- **Countdown Timer**: Real-time countdown to event start
- **Event Details**: Name, description, date, location, price, category
- **Action Buttons**: Register and Learn More options

### About Page
- **Company Story**: Mission and background information
- **Values**: Core company values with icons
- **Team**: Team member profiles and roles

### Contact Page
- **Contact Form**: Interactive form with validation
- **Contact Information**: Email, phone, address
- **FAQ Section**: Frequently asked questions

### Footer
- **Company Information**: Brand and description
- **Quick Links**: Organized navigation links
- **Social Media**: Links to social platforms
- **Contact Details**: Email, phone, address


## API Endpoints

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event


