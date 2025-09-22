const Earning = () => {
    return (
        <>

            <div className="py-8 px-8 grid grid-cols-12 sm:grid-cols-12 gap-4 bg-[#2A2929] rounded-[0.876rem]">
                <div className="bg-[#2E2E2E] rounded-[0.876rem] col-span-3 py-7 px-2 text-center">
                    <img src="/img/artist-dashboard/earn.webp" alt="cover" loading="lazy"
                        className="inline-block" />
                    <p className="text-xs text-[#AAAAAA] my-3">Total Earning This Month</p>
                    <h3 className="text-[1.39rem] font-bold leading-[0.8]">$2659</h3>
                    <a type="button"
                        className="bg-[#C6FF00] w-auto text-xs text-black h-[3rem] leading-[3rem] text-center rounded-3xl cursor-pointer hover:bg-[#afe200] transition-colors px-5  mt-3 inline-block">View
                        Transactions</a>
                </div>
                <div className="bg-[#2E2E2E] rounded-[0.876rem] col-span-9 p-5">
                    <h6 className="font-semibold text-[1.11rem]">Card Details</h6>
                    <div className="grid grid-cols-12 sm:grid-cols-12 gap-4">
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Bank Name</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">Citi Bank Inc</p>
                        </div>
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Branch Name</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">London</p>
                        </div>
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Account Number</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">5396 5250 1908 XXXX</p>
                        </div>
                        <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-6 xl:col-span-3 p-4 mt-3">
                            <h6 className="text-xs font-semibold">Account Name</h6>
                            <p className="text-xs text-[#AAAAAA] mt-1">Darren</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 sm:grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-9 mt-5 flex gap-4 justify-start items-center">
                            <a href="#"
                                className="h-[2.5rem] leading-[2.5rem] text-center  flex justify-center items-center rounded-full px-4 border-1 border-solid border-[#666] text-xs text-[#A5A5A5] transition-colors delay-300 hover:bg-[#666] hover:text-white mr-2">Edit
                                Card
                            </a>
                            <a href="#"
                                className="h-[2.5rem] leading-[2.5rem] text-center  flex justify-center items-center rounded-full px-4 border-1 border-solid border-[#666] text-xs text-[#A5A5A5] transition-colors delay-300 hover:bg-[#666] hover:text-white mr-2">View
                                Saved Card
                            </a>
                        </div>
                        <div className="col-span-12 md:col-span-3 mt-5 text-end">
                            <a href="#"
                                className="w-auto h-[2.5rem] leading-[2.5rem] bg-[#C6FF00] text-center rounded-full px-5 text-black text-xs cursor-pointer inline-block hover:bg-[#afe200] ">Add
                                New Card
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#2E2E2E] rounded-[0.876rem] col-span-9 p-5 mt-4">
                <h6 className="font-semibold text-[1.11rem]">Payout Details</h6>
                <div className="grid grid-cols-12 sm:grid-cols-12 gap-4 items-end">
                    <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-6 xl:col-span-3 p-4">
                        <p className="text-xs text-[#AAAAAA] mt-1">Citi Bank Inc</p>
                        <h3 className="text-sm font-bold leading-[0.8] mt-1">$2659</h3>
                    </div>
                    <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-6 xl:col-span-3 p-4">
                        <p className="text-xs text-[#AAAAAA] mt-1">Last With Drawn Payment</p>
                        <h3 className="text-sm font-bold leading-[0.8] mt-1">$1,565.60</h3>
                    </div>
                    <div className=" col-span-6 xl:col-span-3">
                        <img src="/img/artist-dashboard/earn2.webp" alt="earn" loading="lazy"
                            className="max-w-[100%]" />
                    </div>
                    <div className="col-span-6 xl:col-span-3 p-4 text-end">
                        <a href="#"
                            className="w-auto h-[2.5rem] leading-[2.5rem] bg-[#C6FF00] text-center rounded-full px-5 text-black text-xs cursor-pointer inline-block hover:bg-[#afe200] ">Withdraw
                            Payment
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 sm:grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-6">
                    <div className="bg-[#2E2E2E] rounded-[0.376rem] p-4 mt-4">
                        <h6 className="text-[0.83rem] mb-3">Songs purchase</h6>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#535353] rounded-[1rem] border-0 ">
                                    <tr className="text-[#FFFFFF] text-[0.688rem]">
                                        <th className="py-2 px-3 font-normal">Song</th>
                                        <th className="py-2 px-3 font-normal">Download</th>
                                        <th className="py-2 px-3 font-normal">Earning</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[0.67rem]">
                                    <tr
                                        className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                        <td className="py-2 px-3">Song Name</td>
                                        <td className="py-2 px-3">03</td>
                                        <td className="py-2 px-3">$50</td>
                                    </tr>
                                    <tr
                                        className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                        <td className="py-2 px-3">Song Name</td>
                                        <td className="py-2 px-3">03</td>
                                        <td className="py-2 px-3">$50</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3">Song Name</td>
                                        <td className="py-2 px-3">03</td>
                                        <td className="py-2 px-3">$50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-6">
                    <div className="bg-[#2E2E2E] rounded-[0.376rem] p-4 mt-4">
                        <h6 className=" text-[0.83rem] mb-3">Album purchase</h6>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#535353] rounded-[1rem] border-0 ">
                                    <tr className="text-[#FFFFFF] text-[0.688rem]">
                                        <th className="py-2 px-3 font-normal">Song</th>
                                        <th className="py-2 px-3 font-normal">Download</th>
                                        <th className="py-2 px-3 font-normal">Earning</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[0.67rem]">
                                    <tr
                                        className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                        <td className="py-2 px-3">Song Name</td>
                                        <td className="py-2 px-3">03</td>
                                        <td className="py-2 px-3">$50</td>
                                    </tr>
                                    <tr
                                        className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                        <td className="py-2 px-3">Song Name</td>
                                        <td className="py-2 px-3">03</td>
                                        <td className="py-2 px-3">$50</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3">Song Name</td>
                                        <td className="py-2 px-3">03</td>
                                        <td className="py-2 px-3">$50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Earning;