import React from 'react'
import Image from 'next/image'

export default function 
() {
  return (
      <div className='flex items-center'>
          <div className='relative w-[300px] h-[300px]  sm:w-[350px]'>
              <Image
                  src="/documents.png"
                  fill
                  className='object-contain'
                  alt='Documents'
              />
          </div>

    </div>
  )
}
