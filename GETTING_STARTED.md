# Getting Started with VK Enterprises Website

Welcome! This guide will help you get the website up and running quickly.

## Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- React & React Router
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons

### 2. Start Development Server

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### 3. Explore the Website

Navigate through all pages:
- **Home** (`/`) - Hero section, services overview, stats
- **About** (`/about`) - Company story, mission, vision, values
- **Services** (`/services`) - Detailed service offerings
- **Projects** (`/projects`) - Portfolio of completed projects
- **Careers** (`/careers`) - Open positions and benefits
- **Contact** (`/contact`) - Contact form and information

## Project Structure

```
vk-enterprises-website/
├── public/                  # Static assets
│   ├── favicon.svg         # Company favicon
│   └── _redirects          # Netlify SPA routing config
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx     # Navigation with active links
│   │   └── Footer.jsx     # Footer with links & social
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About company
│   │   ├── Services.jsx   # Services detail
│   │   ├── Projects.jsx   # Project showcase
│   │   ├── Careers.jsx    # Job listings
│   │   └── Contact.jsx    # Contact form
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles & Tailwind
├── index.html             # HTML entry point
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind customization
└── postcss.config.js      # PostCSS config

```

## Key Features

### 🎨 Modern Design
- Clean, professional layout
- Responsive design (mobile, tablet, desktop)
- Professional color palette (blue primary, orange accent)
- Smooth scrolling and transitions

### ⚡ Animations
- Framer Motion for smooth animations
- Page transitions and scroll reveals
- Hover effects on cards and buttons
- Lightweight and performant

### 🧭 Navigation
- React Router for client-side routing
- Active link highlighting
- Smooth scroll behavior
- Mobile-responsive menu

### 📧 Contact Form
- EmailJS integration
- Form validation
- Success/error messages
- Mailto fallback option

### 🚀 Performance
- Vite for fast builds
- Code splitting
- Optimized bundle size
- SEO-friendly meta tags

## Customization Guide

### 1. Change Company Name & Logo

**Navbar & Footer** (`src/components/Navbar.jsx` & `Footer.jsx`):
```jsx
<span className="text-white font-bold text-xl">VK</span>
// Change to your initials

<span className="text-xl font-bold">VK Enterprises</span>
// Change to your company name
```

**Favicon** (`public/favicon.svg`):
- Replace the SVG with your logo
- Or create a new favicon.ico file

### 2. Update Colors

**Tailwind Config** (`tailwind.config.js`):
```javascript
colors: {
  primary: {
    // Change these hex values to your brand colors
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  }
}
```

### 3. Modify Content

Each page is self-contained in `src/pages/`:

**Home Page**:
- Edit tagline in the hero section
- Update service cards
- Change statistics
- Modify benefits list

**About Page**:
- Update company story
- Edit mission and vision
- Customize timeline
- Change team stats

**Services Page**:
- Add/remove services
- Update descriptions
- Modify technologies list

**Projects Page**:
- Replace with real projects
- Update client names (or use "Confidential")
- Add actual results and metrics

**Careers Page**:
- Update job listings
- Modify benefits
- Change company values

**Contact Page**:
- Update contact information
- Change business hours
- Modify map location
- Update social links

### 4. Configure EmailJS

Follow the detailed guide in `EMAILJS_SETUP.md` to:
1. Create an EmailJS account
2. Set up email service
3. Create email template
4. Configure credentials in Contact.jsx

### 5. Update SEO Meta Tags

Each page has a `useEffect` that sets the page title. Update these:

```jsx
useEffect(() => {
  document.title = 'Your Custom Title';
}, []);
```

For more meta tags, edit `index.html`.

### 6. Add Your Social Media Links

**Footer** (`src/components/Footer.jsx`):
```jsx
const socialLinks = [
  { icon: FaLinkedin, url: 'YOUR_LINKEDIN_URL', label: 'LinkedIn' },
  { icon: FaTwitter, url: 'YOUR_TWITTER_URL', label: 'Twitter' },
  // ...
];
```

## Common Tasks

### Add a New Page

1. Create a new file in `src/pages/` (e.g., `Blog.jsx`)
2. Add the route in `src/App.jsx`:
```jsx
<Route path="/blog" element={<Blog />} />
```
3. Add a navigation link in `src/components/Navbar.jsx`

### Add New Icons

This project uses `react-icons`:
```jsx
import { FaNewIcon } from 'react-icons/fa';
// Browse icons: https://react-icons.github.io/react-icons/
```

### Modify Animations

Framer Motion animations are customizable:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}  // Starting state
  animate={{ opacity: 1, y: 0 }}   // Ending state
  transition={{ duration: 0.5 }}   // Animation duration
>
```

## Development Tips

### Hot Reload
Vite provides instant hot module replacement. Just save your files and see changes immediately.

### Browser DevTools
- Use React DevTools for component debugging
- Check Console for any errors
- Test responsive design with device emulation

### Code Organization
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use meaningful variable and function names

## Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

Preview the production build:
```bash
npm run preview
```

## Next Steps

1. ✅ **Customize Content** - Replace all placeholder content with your actual data
2. ✅ **Set Up EmailJS** - Follow `EMAILJS_SETUP.md` to enable the contact form
3. ✅ **Test Thoroughly** - Check all pages and features on different devices
4. ✅ **Deploy** - Follow `DEPLOYMENT.md` to publish your site
5. ✅ **Add Analytics** - Set up Google Analytics or similar
6. ✅ **Monitor Performance** - Use Lighthouse to check performance scores

## Resources

### Documentation
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/docs/)

### Design Resources
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind UI](https://tailwindui.com/)
- [Heroicons](https://heroicons.com/)
- [Google Fonts](https://fonts.google.com/)

### Tools
- [Figma](https://www.figma.com/) - Design mockups
- [TinyPNG](https://tinypng.com/) - Image compression
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## Troubleshooting

### Dependencies Won't Install
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use a different port
npm run dev -- --port 3001
```

### Build Errors
- Check for syntax errors
- Ensure all imports are correct
- Verify all dependencies are installed

### Animations Not Working
- Check browser console for errors
- Ensure Framer Motion is installed
- Verify motion components syntax

## Getting Help

If you encounter issues:
1. Check the documentation files in this project
2. Review error messages in the browser console
3. Search for solutions on Stack Overflow
4. Check the official documentation for each library

## License & Usage

This is a professional template for VK Enterprises. Feel free to customize it for your business needs.

---

**Happy coding! 🚀**

If you need help with customization or have questions, refer to the other documentation files or the official resources linked above.
