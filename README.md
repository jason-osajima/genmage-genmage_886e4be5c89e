# E-commerce Product Page

A modern, responsive e-commerce product page built with Next.js 15, TypeScript, and Tailwind CSS. Features include product image gallery, color selection, quantity controls, and add-to-cart functionality.

## Features

- 🛍️ Modern e-commerce product page design
- 📱 Fully responsive layout
- 🎨 Color selection with visual preview
- 🖼️ Interactive product image gallery
- 📦 Quantity controls
- 🛒 Add to cart functionality
- ❤️ Wishlist toggle
- ⭐ Product ratings and reviews
- 🚚 Product benefits (shipping, warranty, returns)
- 🎯 Built with Next.js 15 App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📦 Docker containerization for Railway deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Docker Deployment

### Building the Docker Image

```bash
docker build -t ecommerce-product-page .
```

### Running the Docker Container

```bash
docker run -p 3000:3000 ecommerce-product-page
```

## Railway Deployment

This application is configured for Railway deployment via GitHub:

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the Dockerfile and deploy
3. The application will be available on your Railway-provided URL

### Environment Variables

The application supports the following environment variables:

- `PORT`: Server port (default: 3000)
- `HOST`: Server host (default: 0.0.0.0)

## Project Structure

```
├── app/
│   ├── globals.css         # Global styles with Tailwind directives
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main product page
├── components/
│   ├── AddToCartButton.tsx # Add to cart button component
│   ├── ProductImageGallery.tsx # Product image gallery
│   └── ProductInfo.tsx     # Product information display
├── Dockerfile              # Docker configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful & consistent icons
- **Docker**: Containerization for deployment

## License

MIT