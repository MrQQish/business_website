# Patrick Miller - Consulting Website

A minimalist, ASCII-styled business website for software design and actuarial catastrophe modelling consulting.

## Features

- 🖥️ Single-page design with clean ASCII aesthetics
- 🌙 Dark mode optimized for readability
- ⚡ Built with Next.js for optimal performance
- 🚀 Deployed on Vercel with automatic updates
- 📱 Fully responsive design
- 🔤 Monospace font styling

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS with dark mode
- **Deployment**: Vercel
- **Version Control**: GitHub

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click Deploy

The site will automatically redeploy whenever you push changes to GitHub.

### Manual Deployment

If you prefer to deploy manually:

```bash
npm install -g vercel
vercel
```

Follow the prompts to connect your Vercel account and deploy.

## GitHub Setup

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Connect and push:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

4. Enable auto-deployment:
   - Go to your Vercel project settings
   - Connect your GitHub account
   - Vercel will automatically deploy on every push to main

## Customization

### Colors

Edit `app/globals.css` to customize:
- Primary accent: `#2a7f62` (teal green)
- Background: `#0a0e27` (dark blue)
- Text: `#e0e0e0` (light gray)

### Content

Edit `app/page.js` to update:
- Name and title
- Contact information
- Services offered
- About section

## Project Structure

```
business_website/
├── app/
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies
├── next.config.js      # Next.js configuration
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Browser Support

Works on all modern browsers including:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## License

Personal use - © 2024 Patrick Miller Consulting

## Support

For issues or questions, contact: patrick.l.miller1299@gmail.com
