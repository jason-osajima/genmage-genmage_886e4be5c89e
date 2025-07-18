'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductImageGalleryProps {
  images: string[]
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="aspect-square w-full">
        <Image
          src={images[selectedImageIndex]}
          alt={`Product image ${selectedImageIndex + 1}`}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center rounded-lg"
          priority
        />
      </div>
      
      {/* Thumbnail Images */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`aspect-square w-full rounded-lg overflow-hidden ${
              selectedImageIndex === index
                ? 'ring-2 ring-indigo-500 ring-offset-2'
                : 'ring-1 ring-gray-200'
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  )
}