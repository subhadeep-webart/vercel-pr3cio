import { DASHBOARD_CARD_CONTENT } from "@/utils/constant";
import Link from "next/link";
import DashboardCard from "./_components/DashboardCard";

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
                            <Link href="/publish-song"
                                className="bg-[#C6FF00] text-[#2A2F2C] rounded-4xl px-8 text-sm h-[2.5rem] leading-[2.5rem] font-semibold inline-block hover:bg-[rgba(249,255,69,0.82)] transition-colors">Upload
                                Song & Album</Link></span>
                        <div className="flex-1 relative flex mt-10">
                            <img src="/img/artist-dashboard/amico.png" alt="Upload Song & Album" />
                        </div>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {
                            DASHBOARD_CARD_CONTENT.map((dashboardContent, index) => (
                                <DashboardCard value={dashboardContent.value} label={dashboardContent.label} imgSrc={dashboardContent.imgSrc} key={`dashboard-card-${index + 1}`} />
                            ))
                        }
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