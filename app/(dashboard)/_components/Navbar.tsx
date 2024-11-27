
import React from 'react'
import { MobileSideBar } from './MobileSideBar'
import { NavbarRoutes } from '@/components/NavbarRoutes'

export const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center  shadow-sm '>
        <MobileSideBar   />
        <NavbarRoutes />
    </div>
  )
}
