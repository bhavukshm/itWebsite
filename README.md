# VK Enterprises - Salesforce Services Website

A modern, professional React website for VK Enterprises, a Salesforce services startup.

## About VK Enterprises

VK Enterprises offers comprehensive Salesforce implementation, development, integration, automation, and support services to help businesses streamline operations and boost productivity.

**Tagline:** "Smarter Salesforce Solutions for a Connected Business."

## Features

- 🎨 Modern, clean design with professional color palette
- 📱 Fully responsive for desktop and mobile
- ⚡ Lightweight animations using Framer Motion
- 🧭 Multi-page navigation with React Router
- 📧 Contact form with EmailJS integration
- 🚀 Optimized for performance and SEO
- 🎯 Smooth scrolling and active link highlighting

## Tech Stack

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router** - Client-side routing
- **EmailJS** - Email sending from contact form
- **React Icons** - Icon library

## Pages

1. **Home** - Hero section with tagline, CTA, and service overview
2. **About** - Company overview, mission, vision, and values
3. **Services** - Detailed service offerings
4. **Projects** - Showcase of past Salesforce projects
5. **Careers** - Open positions and career opportunities
6. **Contact** - Contact form and company information

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up EmailJS (for contact form):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template
   - Copy your Service ID, Template ID, and Public Key
   - Update the values in `src/pages/Contact.jsx`

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
vk-enterprises-website/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```js
colors: {
  primary: { /* blue shades */ },
  accent: { /* accent colors */ }
}
```

### Content
- Update company information in each page component
- Add real project data in `Projects.jsx`
- Update job listings in `Careers.jsx`
- Configure EmailJS credentials in `Contact.jsx`

### Animations
Adjust Framer Motion animation parameters in individual components:
- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing and easing

## Performance

The website is optimized for:
- Fast loading times with code splitting
- Smooth 60fps animations
- Responsive images
- Minimal bundle size
- SEO-friendly meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private and Confidential - VK Enterprises © 2024

## Contact

For inquiries, please visit our website's contact page or email us at info@vkenterprises.com
