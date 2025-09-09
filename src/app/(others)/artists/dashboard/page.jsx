const ArtistDashboard = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4  md:gap-x-10">
                <div className="col-span-4">
                    <div
                        className="text-center border-1 border-solid rounded-[1.688rem] px-4  pt-10 font-medium text-sm bg-[#2A2929] ">

                        <span className="grid justify-center mb-5 h-[5.313rem] w-[5.313rem] rounded-[50%] m-auto border-1 items-center border-[#C5288C]">
                            <img src="/img/artist-dashboard/upload.svg" alt="upload image" /></span>

                        <h3 className="text-lg font-semibold">Select Music to upload</h3>
                        <p className="text-[#979797] mb-5 mt-4">Upload video from the below button
                            or drag and drop</p>
                        <span className="inline-block text-center">
                            <a href="#"
                                className="bg-[#C6FF00] text-[#2A2F2C] rounded-4xl px-8 text-sm h-[2.5rem] leading-[2.5rem] font-semibold inline-block hover:bg-[rgba(249,255,69,0.82)] transition-colors">Upload
                                Song & Album</a></span>
                        <div className="flex-1 relative flex mt-10">
                            <img src="/img/artist-dashboard/amico.png" alt="Upload Song & Album" />
                            <div className="absolute top-10 right-0">
                                <a href="#" className="flex items-center"><span
                                    className="h-[2.5rem] w-[2.75rem] bg-[#9C9C9C] text-[#9C9C9C] mr-2 rounded-[1.688rem] flex items-center justify-center"><img
                                        src="/img/artist-dashboard/arrow.svg"
                                        alt="Logout Button" /></span>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-cols-4 gap-5">
                        <div
                            className="grid grid-cols-2 gap-8 border-1 border-[rgba(193,209,238,0.18)] rounded-[0.625rem] p-3  bg-[#494848]   z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(to_right,rgba(45,38,148,0.18)_0%,rgba(211,68,201,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1]  cursor-pointer">
                            <h4 className="text-lg">1K <span className="text-[#BDBDBD] text-sm">Revenue</span></h4> <span
                                className="grid items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full border border-white">
                                <img src="/img/artist-dashboard/revenue.svg" alt="Revenue"
                                    className="w-[0.938rem] h-[0.938rem]" />
                            </span>

                        </div>
                        <div
                            className="grid grid-cols-2 gap-8 border-1 border-[rgba(193,209,238,0.18)] rounded-[0.625rem] p-3 bg-[#494848]   z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(to_right,rgba(45,14,36,0.18)_0%,rgba(77,65,250,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1]  cursor-pointer">
                            <h4 className="text-lg">254K <span className="text-[#BDBDBD] text-sm">Downloads</span></h4>
                            <span
                                className="grid items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full border border-white">
                                <img src="/img/artist-dashboard/downloads.svg" alt="Downloads"
                                    className="w-[0.938rem] h-[0.938rem]" />
                            </span>
                        </div>
                        <div
                            className="grid grid-cols-2 gap-8 border-1 border-[rgba(193,209,238,0.18)] rounded-[0.625rem] p-3 bg-[#494848]   z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(to_right,rgba(65,151,250,0.18)_0%,rgba(218,70,16,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1]  cursor-pointer">
                            <h4 className="text-lg">5400
                                <span className="text-[#BDBDBD] text-sm">Earning</span>
                            </h4>
                            <span
                                className="grid items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full border border-white">
                                <img src="/img/artist-dashboard/earning.svg" alt="Earning"
                                    className="w-[0.938rem] h-[0.938rem]" />
                            </span>
                        </div>
                        <div
                            className="grid grid-cols-2 gap-8 border-1 border-[rgba(193,209,238,0.18)] rounded-[0.625rem] p-3 bg-[#494848]  z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(to_right,rgba(252,180,24,0.18)_0%,rgba(7,11,74,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1]   cursor-pointer">
                            <h4 className="text-lg">6544 <span className="text-[#BDBDBD] text-sm">Order</span></h4>
                            <span
                                className="grid items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full border border-white">
                                <img src="/img/artist-dashboard/order.svg" alt="order"
                                    className="w-[0.938rem] h-[0.938rem]" />
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
                        <div className="space-y-6">
                            <div className="bg-[#2A2929] p-4 rounded-2xl">
                                <h3 className="text-[0.938rem] font-medium mb-4">Song</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#535353] rounded-[0.688rem] border-0">
                                            <tr className="text-[#FFFFFF] text-[0.688rem]">
                                                <th className="py-2">Song</th>
                                                <th className="py-2">Download</th>
                                                <th className="py-2">Earning</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[0.75rem]">
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-[#2A2929] p-4 rounded-2xl">
                                <h3 className="text-[0.938rem] font-medium mb-4">Albums</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#535353] rounded-[0.688rem] border-0">
                                            <tr className="text-[#FFFFFF] text-[0.688rem]">
                                                <th className="py-2">Song</th>
                                                <th className="py-2">Download</th>
                                                <th className="py-2">Earning</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[0.75rem]">
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">300</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div>


                            <div className="bg-[#2A2929] p-4 rounded-2xl p-4 h-full">
                                <h3 className="text-[0.938rem] font-medium mb-4">Merchandise</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#535353] rounded-[0.688rem] border-0">
                                            <tr className="text-[#FFFFFF] text-[0.688rem]">
                                                <th className="py-2">Song</th>
                                                <th className="py-2">Download</th>
                                                <th className="py-2">Earning</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[0.75rem]">
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr
                                                className="bg-[100%] bg-no-repeat bg-[url('/img/artist-dashboard/border.png')] w-full bg-bottom">
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2">Song Name</td>
                                                <td className="py-2">03</td>
                                                <td className="py-2">$50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default ArtistDashboard;