export const Page = () => {
    return (
        <div className={'w-full p-5 mx-auto  h-[100vh]'}>
            <h1 className={'text-[32px] font-semibold'}>
                Reporting And Statistics
            </h1>
            {/*box 1*/}
            <div className="grid grid-cols-4 gap-4">
                <div className={'bg-[whiteSmoke] flex flex-col mainround h-[168px] justify-center items-center h-full'}>
                    <p className={'font-extralight'}>
                        Tutorial Views
                    </p>
                    <h2 className={'text-[40px] font-black'}>
                        96K
                    </h2>
                </div>
                {/*box 2*/}
                <div
                    className={'bg-[whiteSmoke] col-span-2 flex flex-col mainround h-[168px] justify-center items-center h-full'}>
                    <div>
                        <p className={'font-extralight'}>
                            Average Users
                        </p>
                        <div className={'flex space-x-5 '}>
                            <div>
                                <h2 className={'font-black text-[32px]'}>79</h2>
                                <p>New User</p>
                            </div>
                            <div>
                                <h2 className={'font-black text-[32px]'}>79</h2>
                                <p>New User</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        test
                    </div>
                </div>
                {/*box 3*/}
                <div className={'bg-[whiteSmoke] flex flex-col mainround h-[168px] justify-center items-center h-full'}>
                    <p className={'font-extralight'}>
                        Tutorial Views
                    </p>
                    <h2 className={'text-[40px] font-black'}>
                        96K
                    </h2>
                </div>
                {/*box 4*/}
                <div
                    className={'bg-[whiteSmoke] col-span-3 row-span-2 flex flex-col mainround h-full justify-center items-center h-full'}>
                    <p className={'font-extralight'}>
                        Tutorial Views
                    </p>
                    <h2 className={'text-[40px] font-black'}>
                        96K
                    </h2>
                </div>
                {/*box 5*/}
                <div className={'bg-[whiteSmoke] flex flex-col mainround h-[168px] justify-center items-center h-full'}>
                    <p className={'font-extralight'}>
                        Tutorial Views
                    </p>
                    <h2 className={'text-[40px] font-black'}>
                        96K
                    </h2>
                </div>
                <div className={'bg-[whiteSmoke] flex flex-col mainround h-[168px] justify-center items-center h-full'}>
                    <p className={'font-extralight'}>
                        Tutorial Views
                    </p>
                    <h2 className={'text-[40px] font-black'}>
                        96K
                    </h2>
                </div>


            </div>


        </div>
    )
}
export default Page
