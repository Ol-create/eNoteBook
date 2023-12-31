import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-red-500 z-50">
      <Logo />
      <div className="md:ml-auto flex w-full justify-between md:justify-end items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
}

export default  Footer