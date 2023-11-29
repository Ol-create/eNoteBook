import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <div className='h-full bg-red-600'>
      {children}
  </div>;
}
