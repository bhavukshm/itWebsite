# Deployment Guide

This guide covers how to deploy your VK Enterprises website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure you've:

- [ ] Set up EmailJS credentials (see `EMAILJS_SETUP.md`)
- [ ] Updated all placeholder content with real data
- [ ] Tested the website locally
- [ ] Optimized images (if you add custom images)
- [ ] Updated social media links in Footer and Contact pages
- [ ] Added your company's real contact information
- [ ] Updated meta tags for SEO
- [ ] Tested on different devices and browsers

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment Options

### Option 1: Netlify (Recommended)

Netlify offers free hosting with automatic deployments from Git.

#### Deploy via Netlify CLI:

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

#### Deploy via Git:

1. Push your code to GitHub
2. Go to [https://app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/vk-enterprises",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/vk-enterprises/', // Your repo name
  server: {
    port: 3000,
    open: true
  }
});
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create an S3 bucket and enable static website hosting

3. Upload the contents of the `dist` folder to your S3 bucket

4. (Optional) Set up CloudFront for HTTPS and better performance

### Option 5: Traditional Web Host (cPanel)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web host's `public_html` directory

3. Ensure `.htaccess` is configured for single-page application routing

## Environment Variables

If you're using environment variables for EmailJS or other services:

### Netlify:
1. Go to Site settings → Build & deploy → Environment
2. Add your variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables with the same names as above

## Custom Domain Setup

### Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain and follow DNS setup

## Performance Optimization

After deployment, test your site's performance:

1. **Google PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
2. **GTmetrix**: [https://gtmetrix.com/](https://gtmetrix.com/)
3. **WebPageTest**: [https://www.webpagetest.org/](https://www.webpagetest.org/)

### Optimization Tips:

- ✅ Animations are already optimized (Framer Motion with lightweight config)
- ✅ Code splitting is automatic with Vite
- ✅ CSS is minified in production
- ✅ Icons are loaded efficiently via react-icons

If you add images:
- Compress images before adding (use [TinyPNG](https://tinypng.com/))
- Use WebP format when possible
- Implement lazy loading for images below the fold

## SSL Certificate

Most modern hosts (Netlify, Vercel, etc.) provide free SSL certificates automatically via Let's Encrypt.

For traditional hosts:
1. Obtain an SSL certificate (many hosts offer free SSL)
2. Install the certificate through your hosting control panel
3. Update your site to use HTTPS

## Continuous Deployment

### GitHub Actions (for custom workflows):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

## Post-Deployment

After deployment:

1. **Test all pages** - Navigate through every page
2. **Test the contact form** - Submit a test message
3. **Check mobile responsiveness** - Test on different devices
4. **Verify SEO** - Check meta tags in browser dev tools
5. **Set up analytics** - Add Google Analytics or similar
6. **Monitor performance** - Keep an eye on load times

## Updating the Site

After deployment, to update your site:

1. Make changes locally
2. Test changes: `npm run dev`
3. Commit changes to Git
4. Push to your repository

If you set up continuous deployment, your site will update automatically. Otherwise, run your deployment command again.

## Troubleshooting

### Blank page after deployment
- Check browser console for errors
- Verify `base` URL in `vite.config.js`
- Ensure all routes work with SPA routing

### 404 on page refresh
- Configure redirects for SPA routing
- For Netlify, create `public/_redirects`:
```
/*    /index.html   200
```

### Images not loading
- Check image paths (use absolute paths from `/src`)
- Ensure images are in the `public` folder or properly imported

### Contact form not working
- Verify EmailJS credentials
- Check browser console for errors
- Test mailto fallback

## Support

For deployment issues:
- Netlify: [https://docs.netlify.com/](https://docs.netlify.com/)
- Vercel: [https://vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [https://docs.github.com/en/pages](https://docs.github.com/en/pages)

For code issues:
- Check the README.md
- Review Vite documentation: [https://vitejs.dev/](https://vitejs.dev/)
