# landing-page

A modern web application built with Next.js 15, React 19, and TypeScript, featuring a clean UI with Geist font integration and Tailwind CSS for styling.

## Features

- 🚀 Built with Next.js 15 and React 19
- 📝 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔤 Geist font family integration (sans and mono)
- 🌐 SEO-optimized with metadata configuration
- 🎯 OpenGraph and Twitter card support
- 🧩 ESLint configuration for code quality
- ⚡ TurboPack for faster development builds

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/businesspro-nextjs.git
cd businesspro-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── styles/
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Available Scripts

- `npm run dev` - Starts the development server with TurboPack
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## Configuration

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.js`. The project uses `tailwindcss-animate` for animations.

### TypeScript

TypeScript configuration can be found in `tsconfig.json`. The project uses strict mode for better type safety.

### Metadata

The project includes comprehensive metadata configuration in `app/layout.tsx` for better SEO and social media sharing:

- Page title and description
- Keywords
- Author information
- OpenGraph tags
- Twitter card metadata

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
