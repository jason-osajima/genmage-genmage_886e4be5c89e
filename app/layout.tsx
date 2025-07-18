import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce Product Page',
  description: 'Modern e-commerce product page with add to cart functionality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="/" className="text-2xl font-bold text-gray-900">
                    ShopNow
                  </a>
                </div>
                <nav className="hidden md:flex space-x-10">
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Products
                  </a>
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Categories
                  </a>
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    About
                  </a>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Cart (0)
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}