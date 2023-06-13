import Image from "next/image";
import React from "react";

export default function DashboardNavBarTop() {
    return (
        <div className=' flex justify-center'>
            <div className='bg-[#EDEDED] w-[100vw] lg:w-[1203px] h-[80px]'>
                <h1 className=' py-8  text-[16px] flex justify-end items-center font-medium '>
                    <Image
                        width={27}
                        height={27}

                        src={'/assets/icons/profile2user.svg'} alt={'profile 2 user'}
                        className={'inline me-[12px] text-[25.5px]'}/> ksk
                </h1>
            </div>
        </div>
    )
}