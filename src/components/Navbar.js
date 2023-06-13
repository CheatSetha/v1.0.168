"use client"
import Link from "next/link"
import React, {useEffect, useState} from "react"

import {usePathname} from "next/navigation"
import {useSession, signOut} from "next-auth/react"
import {useTheme} from "next-themes"
import ThemeSwitcher from "./ThemeSwitcher"
import Image from "next/image"
import {HiOutlineMenuAlt1} from "react-icons/hi"
import {darkMode} from "../../tailwind.config";
import {RiMenu3Fill} from "react-icons/ri";

const MainNavBar = () => {
    const [logIN, setLogIN] = useState(false)
    // auth
    const {data: session} = useSession()

    // if log in set logIN to true
    useEffect(() => {
        if (session) {
            setLogIN(true)
        }
    }, [session])

    // end of auth config
    const {theme, setTheme} = useTheme()

    //diable in auth part
    const pathName = usePathname()
    if (pathName.includes("/login")) {
        return null
    }
    if (pathName.includes("/signup")) return null
    // end of disable in auth part

    return (
        <div className='bg-white dark:bg-[#1e1e1e] sticky top-0 z-50  '>
            <div className='navbar md:h-[80px] px-5 w-full xl:w-[1290px] mx-auto max-sm:px-5'>
                <div className='navbar-start'>

                    <Link href={"/"}>
                        {theme === "dark" ? (
                            <Image
                                height={50}
                                width={131}
                                className='md:w-[131px] w-[100px]'

                                src='/assets/image/mainlogov2.png'
                                alt='logo img'
                            />
                        ) : (
                            <Image
                                height={50}
                                width={131}
                                className='md:w-[131px] w-[100px]'
                                src='/assets/image/mainlogo-blackv2.png'
                                alt='logo dark img'
                            />
                        )}
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1 dark:text-white'>
                        <li>
                            <Link className={'hover:dark:text-black hover:dark:bg-gray-100'} href={"/ "}>Home</Link>
                        </li>

                        <li>
                            <a className={'hover:dark:text-black hover:dark:bg-gray-100'}>Watermark</a>
                        </li>

                        <li>
                            <a className={'hover:dark:text-black hover:dark:bg-gray-100'}>Certificate</a>
                        </li>
                        <li>
                            <Link className={'hover:dark:text-black hover:dark:bg-gray-100'} href={"/aboutus"}>About
                                Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end '>
                    {/*<span className='mr-5'>*/}
                    {/*	<ThemeSwitcher/>*/}
                    {/*</span>*/}
                    {session ? (
                        <div className='dropdown dropdown-end'>
                            <label
                                tabIndex={0}
                                className='w-10 h-10 btn-ghost btn-circle avatar'
                            >
                                <div
                                    className='md:w-10 md:h-10  w-7 h-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                                    <img src={session.user.image}/>
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className='mt-3 dark:text-white dark:bg-slate-800 space-y-2  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                            >
                                <li className="dark:hover:bg-slate-400 ">
                                    <a className='justify-between'>{session.user.name}</a>
                                </li>
                                <li className="dark:hover:bg-slate-400 rounded-sm">
                                    <Link href={"/setting"}>Settings</Link>
                                </li>
                                <li>
                                    <button
                                        className='py-2 bg-red-400 '
                                        onClick={() => signOut()}
                                    >
                                        sign out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link
                                href={"./login"}
                                className='bg-[#E85854] me-3 hidden md:block text-white font-[35px] text-center py-2  rounded-[16px] w-[88px]  text-[17px]'
                            >
                                Log in
                            </Link>
                            <Link
                                href={"./signup"}
                                className='bg-[#E85854] hidden md:block text-white font-[35px] text-center py-2  rounded-[16px] w-[88px]  text-[17px]'
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                    <div className='dropdown'>
                        <label
                            tabIndex={0}
                            className=' md:hidden'
                        >
                            <RiMenu3Fill className='text-2xl ms-3 dark:text-white'/>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu dark:text-white relative right-0 menu-sm dropdown-content space-y-3 mt-3 p-2 shadow bg-white dark:bg-slate-600 rounded-box w-52'
                        >
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <a>Watermark</a>
                            </li>

                            <li>
                                <a>Certificate</a>
                            </li>
                            <li>
                                <Link href={'/aboutus'}>About Us</Link>
                            </li>
                            {session ? (
                                <li>
                                    <a>profile</a>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link href={'/login'}>log in</Link>
                                    </li>
                                    <li>
                                        <Link href={'/signup'}>Sign up</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavBar
