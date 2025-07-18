'use client'

import { Star } from 'lucide-react'

interface ProductInfoProps {
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  description: string
  features: string[]
}

export default function ProductInfo({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  description,
  features
}: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{name}</h1>
      
      <div className="mt-3">
        <div className="flex items-center">
          <p className="text-3xl font-bold text-gray-900">${price}</p>
          {originalPrice && (
            <p className="ml-3 text-2xl text-gray-500 line-through">${originalPrice}</p>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-3 flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star
              key={star}
              className={`${
                rating > star ? 'text-yellow-400 fill-current' : 'text-gray-300'
              } h-5 w-5 flex-shrink-0`}
            />
          ))}
        </div>
        <p className="ml-3 text-sm text-gray-500">{reviews} reviews</p>
      </div>

      <div className="mt-6">
        <p className="text-base text-gray-700">{description}</p>
      </div>

      {/* Features */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900">Features</h3>
        <div className="mt-2">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}