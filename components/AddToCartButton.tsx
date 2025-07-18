'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

interface AddToCartButtonProps {
  onAddToCart: () => void
  inStock: boolean
  className?: string
}

export default function AddToCartButton({ 
  onAddToCart, 
  inStock, 
  className = '' 
}: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (!inStock) return
    
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    onAddToCart()
    setIsLoading(false)
  }

  return (
    <button
      onClick={handleClick}
      disabled={!inStock || isLoading}
      className={`${className} flex items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        inStock
          ? isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-indigo-600 hover:bg-indigo-700'
          : 'bg-gray-300 cursor-not-allowed'
      }`}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      {isLoading ? 'Adding...' : inStock ? 'Add to Cart' : 'Out of Stock'}
    </button>
  )
}