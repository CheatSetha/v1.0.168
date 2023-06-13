import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function SettingNavMenu() {
    return (
        <div className='w-[318px] max-sm:hidden dark:bg-slate-800 dark:text-white bg-white rounded-[16px]  p-3'>
            <h3 className='text-base s'>
                <Image
                    src={"/assets/icons/arrow-circle-left.svg"}
                    alt='arrow-circle-left'
                    height={24}
                    width={24}
                    className='inline mr-2'
                />
                Back
            </h3>
            <section className='p-3 space-y-5 mt-10'>
                <ul className='menu rounded-box'>
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
            </section>
        </div>
    )
}
