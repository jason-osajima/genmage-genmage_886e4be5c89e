'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react'
import ProductImageGallery from '@/components/ProductImageGallery'
import ProductInfo from '@/components/ProductInfo'
import AddToCartButton from '@/components/AddToCartButton'

const product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 299.99,
  originalPrice: 399.99,
  rating: 4.8,
  reviews: 124,
  description: "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and premium comfort for all-day wear.",
  features: [
    "Advanced Active Noise Cancellation",
    "30-hour battery life with quick charge",
    "Premium comfort padding",
    "Bluetooth 5.3 connectivity",
    "Touch controls",
    "Compatible with all devices"
  ],
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop"
  ],
  colors: [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Blue", value: "#0066CC" }
  ],
  inStock: true,
  category: "Electronics"
}

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { 
      product: product.name, 
      color: selectedColor.name, 
      quantity 
    })
    alert(`Added ${quantity} ${product.name} (${selectedColor.name}) to cart!`)
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Product Images */}
        <div className="flex flex-col-reverse">
          <ProductImageGallery images={product.images} />
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-gray-900">${product.price}</p>
              {product.originalPrice && (
                <p className="ml-3 text-2xl text-gray-500 line-through">${product.originalPrice}</p>
              )}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <Star
                  key={rating}
                  className={`${
                    product.rating > rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  } h-5 w-5 flex-shrink-0`}
                />
              ))}
            </div>
            <p className="ml-3 text-sm text-gray-500">{product.reviews} reviews</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Features</h3>
            <div className="mt-2">
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="mt-2 flex items-center space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`${
                    selectedColor.name === color.name
                      ? 'ring-2 ring-offset-2 ring-gray-500'
                      : ''
                  } relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none`}
                >
                  <span className="sr-only">{color.name}</span>
                  <span
                    className="h-8 w-8 rounded-full border border-black border-opacity-10"
                    style={{ backgroundColor: color.value }}
                  />
                </button>
              ))}
            </div>
            <p className="mt-1 text-sm text-gray-500">Selected: {selectedColor.name}</p>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="mt-2 flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                -
              </button>
              <span className="mx-3 text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-10 flex">
            <AddToCartButton
              onAddToCart={handleAddToCart}
              inStock={product.inStock}
              className="flex-1"
            />
            
            <button
              onClick={handleWishlist}
              className={`ml-4 flex items-center justify-center rounded-md border-2 px-3 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isWishlisted
                  ? 'border-red-300 text-red-600 bg-red-50'
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Product Benefits */}
          <div className="mt-10 border-t border-gray-200 pt-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-start">
                <Truck className="h-6 w-6 text-green-500 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Free Shipping</h3>
                  <p className="text-sm text-gray-500">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-green-500 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Warranty</h3>
                  <p className="text-sm text-gray-500">2 year warranty</p>
                </div>
              </div>
              <div className="flex items-start">
                <RotateCcw className="h-6 w-6 text-green-500 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Returns</h3>
                  <p className="text-sm text-gray-500">30 day returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}