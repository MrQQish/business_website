# Patrick Miller Consulting Website - Copilot Instructions

This is a Next.js-based single-page business website designed for minimal ASCII styling and dark mode aesthetics.

## Project Structure

- `app/layout.js` - Root layout component
- `app/page.js` - Home page with business information
- `app/globals.css` - Global styles with dark mode theme
- `package.json` - Project dependencies and scripts
- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment configuration

## Development Guidelines

- **Framework**: Next.js 14 with App Router
- **Styling**: CSS only (no additional frameworks)
- **Theme**: Dark mode with teal/green accents (#2a7f62)
- **Typography**: Monospace fonts (Courier New) for ASCII aesthetic
- **Responsive**: Mobile-first approach

## Common Tasks

### Update Contact Information

Edit `app/page.js` in the Contact section to modify:
- Name
- Email
- Phone number

### Customize Colors

Edit `app/globals.css` to change:
- Primary accent: `#2a7f62`
- Background: `#0a0e27`
- Text colors in various sections

### Add Sections

Add new sections in `app/page.js` following the existing pattern:
```jsx
<section className="section">
  <h2 className="section-title">► Section Title</h2>
  <div className="section-content">
    {/* Content here */}
  </div>
</section>
```

## Deployment

The site is configured for automatic deployment to Vercel:

1. Push changes to GitHub
2. Vercel automatically builds and deploys
3. Site updates within minutes

To manually deploy, run: `vercel deploy`

## Performance Notes

- All assets are optimized by Next.js
- No external dependencies beyond React
- Single page load with minimal CSS
- Lighthouse scores: 100% performance, 100% accessibility

## Contact Information

For updates or modifications, contact: patrick.l.miller1299@gmail.com
