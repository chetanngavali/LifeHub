# LifeHub - All-in-One Life Management Platform

A comprehensive digital life management platform that combines 11 essential services into one unified experience. LifeHub helps you organize every aspect of your daily life, from managing food inventory to planning trips and tracking baby milestones.

![LifeHub Platform](https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200)

## 🌟 Features

### 🏠 Dashboard
- **Unified Overview**: Central hub with smart alerts and quick actions
- **Real-time Notifications**: Cross-service alerts for expiring food, due bills, upcoming trips
- **Quick Actions**: Fast access to common tasks across all services
- **Beautiful Analytics**: Visual data representation and trends

### 🥘 Smart Pantry
- **Food Inventory Management**: Track items in fridge, pantry, and freezer
- **Expiry Alerts**: Get notified before food expires to reduce waste
- **Recipe Suggestions**: Smart recommendations based on available ingredients
- **Location-based Organization**: Organize by storage location

### 📚 Study Notes
- **Multi-format Support**: Upload text, images, and PDF files
- **Smart Organization**: Tag and categorize notes by subject
- **Powerful Search**: Find notes by content, tags, or metadata
- **File Management**: Organized storage with easy retrieval

### 🔄 ShareCircle
- **Neighborhood Lending**: Post items you can lend to neighbors
- **Borrowing Requests**: Find and request items you need temporarily
- **Trust System**: User ratings and reviews for safe transactions
- **Location-based**: Connect with people in your area

### 🐾 PetBuddy
- **Pet Sitter Finder**: Browse and book trusted local pet sitters
- **Veterinary Services**: Find nearby vets with ratings and contact info
- **Lost Pet Alerts**: Community-based lost pet notification system
- **Service Reviews**: Rate and review pet care providers

### 🗺️ TripNest
- **Travel Planning**: Organize flights, hotels, and activities
- **Budget Tracking**: Monitor expenses against your travel budget
- **Itinerary Management**: Visual timeline of your trip plans
- **Document Storage**: Keep all travel confirmations in one place

### 💸 SplitFair
- **Expense Splitting**: Automatically calculate shared costs
- **Group Management**: Create groups for roommates, trips, etc.
- **Payment Tracking**: Monitor who owes what to whom
- **Settlement Optimization**: Smart suggestions for efficient payments

### 📅 SubTrackr
- **Subscription Management**: Track all your recurring payments
- **Billing Reminders**: Get notified before charges occur
- **Cost Analysis**: Understand your monthly and yearly spending
- **Savings Suggestions**: Recommendations for cheaper alternatives

### 👵 SilverHelp
- **Community Support**: Connect seniors with local volunteers
- **Help Requests**: Post and respond to assistance needs
- **Digital Tutorials**: Step-by-step guides for technology use
- **Volunteer Matching**: Find helpers based on skills and location

### 🍼 ParentPal
- **Baby Care Tracking**: Log feeding, diaper changes, and sleep
- **Milestone Monitoring**: Track developmental achievements
- **Growth Analytics**: Visualize patterns and progress
- **Parenting Tips**: Age-appropriate advice and guidance

### 🛏️ RentRoomThings
- **Furniture Rental**: Rent or lend furniture and appliances
- **Time-based Pricing**: Flexible daily, weekly, or monthly rates
- **Delivery Options**: Coordinate pickup and delivery
- **Quality Assurance**: Photos and descriptions for all items

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lifehub.git
   cd lifehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Routing**: Single Page Application (SPA)

## 📱 Responsive Design

LifeHub is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Secondary**: Gray (#6b7280)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Headings**: Inter font family, multiple weights
- **Body**: System font stack for optimal performance
- **Spacing**: 8px grid system for consistent layouts

## 🔧 Project Structure

```
src/
├── components/          # React components for each service
│   ├── Dashboard.tsx    # Main dashboard component
│   ├── SmartPantry.tsx  # Food inventory management
│   ├── StudyNotes.tsx   # Note organization system
│   ├── ShareCircle.tsx  # Community lending platform
│   ├── PetBuddy.tsx     # Pet care services
│   ├── TripNest.tsx     # Travel planning tools
│   ├── SplitFair.tsx    # Expense splitting
│   ├── SubTrackr.tsx    # Subscription tracking
│   ├── SilverHelp.tsx   # Senior community support
│   ├── ParentPal.tsx    # Baby care tracking
│   └── RentRoomThings.tsx # Furniture rental
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces and types
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🌐 Deployment

The application is deployed and accessible at:
**[https://resilient-jelly-a114f5.netlify.app](https://resilient-jelly-a114f5.netlify.app)**

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 🤝 Contributing

We welcome contributions to LifeHub! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper error handling
- Write clear, descriptive commit messages

## 📋 Roadmap

### Phase 1 (Current)
- ✅ Core platform with 11 integrated services
- ✅ Responsive design and modern UI
- ✅ TypeScript implementation
- ✅ Production deployment

### Phase 2 (Planned)
- 🔄 User authentication and profiles
- 🔄 Data persistence with backend integration
- 🔄 Real-time notifications
- 🔄 Mobile app development

### Phase 3 (Future)
- 🔄 AI-powered recommendations
- 🔄 Advanced analytics and insights
- 🔄 Third-party integrations
- 🔄 Multi-language support

## 🐛 Known Issues

- Data is currently stored in local state (no persistence)
- No user authentication system yet
- Some features are demonstration-only
- No real payment processing integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern life management applications
- **Icons**: Lucide React icon library
- **Images**: Pexels for stock photography
- **Fonts**: Inter and system font stacks

## 📞 Support

For support, questions, or feature requests:

- 📧 Email: support@lifehub.app
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/lifehub/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/lifehub/discussions)

---

**LifeHub** - Simplifying life, one service at a time. 🌟

Made with ❤️ by the LifeHub team