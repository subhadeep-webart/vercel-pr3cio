import AlbumsPurchased from "./_components/AlbumsPurchased";
import CardDetails from "./_components/CardDetails";
import SongsPurchased from "./_components/SongsPurchased";

const Earning = () => {
    return (
        <>

            <div className="py-8 px-8 grid grid-cols-12 sm:grid-cols-12 gap-4 bg-[#2A2929] rounded-[0.876rem]">
                <div className="bg-[#2E2E2E] rounded-[0.876rem] col-span-12 md:col-span-3 py-7 px-2 text-center">
                    <img src="/img/artist-dashboard/earn.webp" alt="cover" loading="lazy"
                        className="inline-block" />
                    <p className="text-xs text-[#AAAAAA] my-3">Total Earning This Month</p>
                    <h3 className="text-[1.39rem] font-bold leading-[0.8]">$2659</h3>
                    <a type="button"
                        className="bg-[#C6FF00] w-auto text-xs text-black h-[3rem] leading-[3rem] text-center rounded-3xl cursor-pointer hover:bg-[#afe200] transition-colors px-5  mt-3 inline-block">View
                        Transactions</a>
                </div>
               <CardDetails/>
            </div>
            <div className="bg-[#2E2E2E] rounded-[0.876rem] col-span-12 md:col-span-9 p-5 mt-4">
                <h6 className="font-semibold text-[1.11rem]">Payout Details</h6>
                <div className="grid grid-cols-12 sm:grid-cols-12 gap-4 items-end">
                    <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-12 md:col-span-6 xl:col-span-3 p-4">
                        <p className="text-xs text-[#AAAAAA] mt-1">Citi Bank Inc</p>
                        <h3 className="text-sm font-bold leading-[0.8] mt-1">$2659</h3>
                    </div>
                    <div className="bg-[#3D3D3D] rounded-[0.376rem] col-span-12 md:col-span-6 xl:col-span-3 p-4">
                        <p className="text-xs text-[#AAAAAA] mt-1">Last With Drawn Payment</p>
                        <h3 className="text-sm font-bold leading-[0.8] mt-1">$1,565.60</h3>
                    </div>
                    <div className="col-span-12 md:col-span-6 xl:col-span-3">
                        <img src="/img/artist-dashboard/earn2.webp" alt="earn" loading="lazy"
                            className="max-w-[100%]" />
                    </div>
                    <div className="col-span-12 md:col-span-6 xl:col-span-3 p-4 text-end">
                        <a href="#"
                            className="w-auto h-[2.5rem] leading-[2.5rem] bg-[#C6FF00] text-center rounded-full px-5 text-black text-xs cursor-pointer inline-block hover:bg-[#afe200] ">Withdraw
                            Payment
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 sm:grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6">
                   <SongsPurchased/>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <AlbumsPurchased/>
                </div>
            </div>

        </>
    )
};

export default Earning;