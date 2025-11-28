# Portfolio 2.0

A modern, fully responsive portfolio application built with React. Showcase your projects, skills, and experience with an interactive and professional design.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Overview

Portfolio 2.0 is a modern React-based portfolio application designed to help developers showcase their professional work, skills, and experience. The application features smooth animations, responsive design, and interactive components to create an engaging user experience.

## ✨ Features

- **Responsive Design** - Mobile-first approach ensuring compatibility across all devices
- **Interactive Animations** - Smooth parallax effects and particle animations
- **Project Showcase** - Display your projects with detailed information
- **Skills & Toolstack** - Highlight your technical skills and tools
- **GitHub Integration** - Display your GitHub activity and contributions
- **Resume Display** - PDF resume support with easy download functionality
- **Performance Optimized** - Fast load times with optimized assets
- **SEO Friendly** - Meta tags and proper semantic HTML structure

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Installed with Node.js
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sandhukaran28/Portfolio-2.0.git
   cd Portfolio-2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## ⚙️ Configuration

To customize your portfolio, navigate to `/src/components/` and edit the following files:

### Key Components to Customize

- **`Home/`** - Update your name, tagline, and social links
- **`About/`** - Add your biography and introduction
  - `AboutCard.js` - Your professional summary
  - `Techstack.js` - List your technical skills
  - `Toolstack.js` - Display your development tools
  - `Github.js` - GitHub profile integration
- **`Projects/`** - Add and update your projects
  - `Projects.js` - Main projects component
  - `ProjectCards.js` - Individual project cards
- **`Resume/`** - Update your resume PDF
  - `ResumeNew.js` - Resume display component

## 💻 Development

### Start Development Server

```bash
npm start
```

The application will automatically open at [http://localhost:3000](http://localhost:3000). The page will hot-reload on file changes.

### Available Development Scripts

- `npm start` - Run the app in development mode
- `npm build` - Create an optimized production build
- `npm test` - Launch the test runner in interactive mode
- `npm eject` - Expose all build configuration (use with caution)

## 🏗️ Build & Deployment

### Create Production Build

```bash
npm run build
```

Creates an optimized production build in the `build/` directory, ready for deployment.

### Deployment Options

- **Vercel** - Recommended for React apps
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify** - Drag and drop deployment
  - Connect your repository and set build command to `npm run build`
  - Set publish directory to `build/`

- **GitHub Pages** - Add to `package.json`:
  ```json
  "homepage": "https://yourusername.github.io/Portfolio-2.0"
  ```

## 📁 Project Structure

```
Portfolio-2.0/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   ├── AboutCard.js
│   │   │   ├── Github.js
│   │   │   ├── Techstack.js
│   │   │   └── Toolstack.js
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home2.js
│   │   │   └── Type.js
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── ProjectCards.js
│   │   ├── Resume/
│   │   │   └── ResumeNew.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── Particle.js
│   │   ├── Pre.js
│   │   └── ScrollToTop.js
│   ├── Assets/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── style.css
│   └── setupTests.js
├── Images/
├── package.json
├── LICENSE
└── README.md
```

## 🛠️ Technologies

### Frontend Framework
- **React** - UI library for building interactive components
- **React DOM** - Rendering React components in the browser

### Styling
- **Bootstrap** - CSS framework for responsive design
- **React Bootstrap** - React components for Bootstrap

### Routing & State
- **React Router DOM** - Client-side routing

### UI/Animation
- **React Icons** - Icon library
- **React Parallax Tilt** - 3D tilt effect library
- **React TSParticles** - Particle animation effects
- **Typewriter Effect** - Text animation library

### Data & HTTP
- **Axios** - HTTP client for API requests
- **React GitHub Calendar** - GitHub contribution calendar

### PDF Handling
- **React PDF** - PDF rendering
- **@react-pdf/renderer** - PDF creation and rendering

### Testing
- **@testing-library/react** - React component testing utility
- **@testing-library/jest-dom** - DOM matchers for Jest

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.