import NavbarDashbord from '@/components/NavbarDashboard'
import React from 'react'
import DashboardNavBarTop from "@/components/DashboardNavBarTop";

export default function layout({children}) {
    return (
        <div className='flex flex-wrap'>
            <NavbarDashbord/>
            <div>
                <DashboardNavBarTop/>
                {children}

            </div>
        </div>


    )
}