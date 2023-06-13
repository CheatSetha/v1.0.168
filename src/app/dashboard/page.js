import React from 'react'
import { RiGroupLine } from 'react-icons/ri'
export default function page() {
    return (
        <div className='ml-[311px]'>
            <div className=' flex justify-center'>
                <div className='bg-gray-400 w-[1203px] h-[96px]'>
                    <h1 className='inline-flex items-center py-8 px-[60px] text-[16px] font-medium float-right'>
                        <span className='inline-block mr-3 text-[32px] '><RiGroupLine /></span>
                        Chan Chhaya
                    </h1>
                </div>
            </div>
            <main>
                <div className='mt-5 ml-7'>
                    <h1 className='text-[32px] font-semibold'>Dashboard Overview</h1>
                    <div className="text-[14px]  font-extralight text-gray-200 breadcrumbs">
                        <ul>
                            <li><a>Admin</a></li>
                            <li><a>dashboard overview</a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
