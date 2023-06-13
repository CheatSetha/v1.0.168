
import NavbarDashbord from '@/components/NavbarDashboard'
import React from 'react'

export default function layout({ children }) {
  return (
    <div className='mx-auto xl:w-[1440px]' >
      <NavbarDashbord/>
      {children}
    </div>
  )
}