<<<<<<< HEAD
# 🚔 GTA Portfolio - Developer Dashboard

A modern, GTA-themed portfolio built with React, Vite, and Framer Motion. Features lazy loading, optimized performance, and a unique gaming-inspired design.

## ✨ Features

- **GTA-Style Design**: Dark theme with yellow accents and gaming aesthetics
- **Lazy Loading**: Sections load on-demand for better performance
- **Responsive Design**: Mobile-first approach with GTA-style minimap navigation
- **Animated Components**: Smooth animations using Framer Motion
- **Skill Tree**: Interactive skill visualization with progress bars
- **Project Showcase**: Dynamic project filtering and detailed modals
- **Contact Form**: GTA-styled "Save Game" submit button

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic chunk splitting for better caching
- **Lazy Loading**: Components load only when needed
- **Minification**: Terser for JavaScript, CSSnano for CSS
- **Tree Shaking**: Unused code elimination
- **Bundle Analysis**: Built-in performance monitoring
- **Error Boundaries**: Graceful error handling
- **Performance Monitoring**: Load time tracking

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Analyze bundle size
npm run build:analyze

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📊 Bundle Analysis

The project includes automatic bundle analysis:

```bash
npm run build:analyze
```

This will show:
- Individual file sizes
- Total bundle size
- Gzipped size estimates
- Performance recommendations

## 🏗️ Architecture

### Lazy Loading Structure
```
App.jsx
├── Welcome (eager load)
├── Navbar (eager load)
├── MinimapNavbar (eager load)
└── Sections (lazy load)
    ├── Home
    ├── About
    ├── Projects
    └── Contact
```

### Bundle Chunks
- **vendor**: React and React DOM
- **animations**: Framer Motion
- **ui**: UI libraries (Typewriter, Modal, Scroll)
- **Individual sections**: Each page component

## 🎯 Performance Metrics

- **Initial Load**: ~140KB (vendor chunk)
- **Lazy Loaded**: ~50KB per section
- **Total Bundle**: ~350KB (gzipped ~105KB)
- **Load Time**: <2s on 3G connection

## 🔧 Configuration

### Vite Config
- Terser minification
- Manual chunk splitting
- CSS code splitting
- Tree shaking enabled
- Modern browser targeting

### PostCSS
- Tailwind CSS
- Autoprefixer
- CSSnano minification

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized animations for mobile
- Reduced motion support
- Responsive design patterns

## 🎮 GTA Theme Elements

- Dark background with yellow accents
- Minimap-style navigation
- "Save Game" styled buttons
- Gaming-inspired animations
- Mission-style project cards

## 🚀 Deployment

The project is optimized for production deployment:

```bash
# Build for production
npm run build

# The dist folder contains optimized files ready for deployment
```

## 📈 Performance Tips

1. **Monitor Bundle Size**: Use `npm run build:analyze` regularly
2. **Lazy Load Heavy Components**: Keep initial bundle small
3. **Optimize Images**: Use WebP format when possible
4. **Enable Compression**: Configure gzip on your server
5. **Use CDN**: Serve static assets from CDN

## 🐛 Troubleshooting

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Performance Issues
- Run bundle analysis: `npm run build:analyze`
- Check for large dependencies
- Consider code splitting for heavy libraries

## 📄 License

MIT License - feel free to use this portfolio as a template for your own projects!

---

**Built with ❤️ and 🚔 GTA vibes**
=======
# adarsh-portfolio
>>>>>>> 838e56a00723d931478bb37391c86f36c5e2d6cc
