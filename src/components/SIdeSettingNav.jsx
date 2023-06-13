import Link from "next/link";
import Image from "next/image";
import React from "react";

export const SIdeSettingNav = () => {
    return (
        <div className="drawer-side mt-[60px] z-50">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                {/*<ul className='menu rounded-box'>*/}
                <li className="hover:bg-gray-300 hover:rounded-[16px]">
                    <Link href={'/setting'}>
                        <h1>
                            {" "}
                            <Image
                                src={"/assets/icons/profile-circle.svg"}
                                alt='arrow-circle-left'
                                height={24}
                                width={24}
                                className='inline mr-2'
                            />{" "}
                            Profile Management
                        </h1>
                    </Link>
                </li>
                <li>
                    <details open>
                        <summary className={'dark:hover:bg-gray-300 hover:rounded-[16px] '}>
                            <Link className=""
                                  href={'/setting/general-setting'}>
                                {" "}
                                <Image
                                    src={"/assets/icons/setting-2.svg"}
                                    alt='arrow-circle-left'
                                    height={24}
                                    width={24}
                                    className='inline mr-2 '
                                />{" "}
                                General setting
                            </Link>
                        </summary>
                        <ul>
                            <li className="hover:bg-gray-300 hover:rounded-[16px]">
                                <Link href={"/setting/password-and-email"}>Password and Email</Link>
                            </li>
                            <li className="hover:bg-gray-300 active:text-white hover:rounded-[16px]">
                                <Link href={"/setting/more-info "}>More information</Link>
                            </li>
                        </ul>
                    </details>
                </li>


            </ul>
        </div>
    )
}