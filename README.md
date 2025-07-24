# Serve You Pharma

A modern, responsive pharmacy website for Serve You Pharma, Kanjirappally, Kerala. This site provides information about pharmacy services, medicines, and healthcare products, and is optimized for SEO and fast image loading.

## Features

- Responsive design for desktop and mobile
- Smooth navigation and animated UI
- Services, About, Testimonials, and Contact sections
- WhatsApp contact button
- SEO-optimized meta tags and Open Graph/Twitter cards
- Uses modern image formats (.webp) for performance

## Tech Stack

- React (with TypeScript)
- Tailwind CSS
- Framer Motion (animations)
- Keen Slider & Embla Carousel (sliders)
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or bun (for package management)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd trusted-meds-site-16
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   bun install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   bun run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Image Optimization

- All images are served in `.webp` format for better performance.
- Place your optimized images in `public/lovable-uploads/` and `public/about-images/`.
- If you add new images, convert them to `.webp` for best results.

## SEO

- The site includes descriptive meta tags, keywords, canonical URL, and Open Graph/Twitter tags for rich sharing and discoverability.
- Update `index.html` for any business-specific SEO needs.

## Folder Structure

```
trusted-meds-site-16/
  public/
    lovable-uploads/   # Logo and service images (.webp)
    about-images/      # About section images (.webp)
  src/
    components/        # React components
    pages/             # Page-level components
    hooks/             # Custom hooks
    lib/               # Utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is for Serve You Pharma and is not intended for commercial redistribution.
