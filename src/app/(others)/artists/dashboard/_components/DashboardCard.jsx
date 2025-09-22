const DashboardCard = ({ value, label, imgSrc }) => {
    return (
        <div
            className="grid grid-cols-2 gap-8 border-1 border-[rgba(193,209,238,0.18)] rounded-[0.625rem] p-3 z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 bg-[linear-gradient(to_right,rgba(65,151,250,0.18)_0%,rgba(218,70,16,0.18)_100%)] after:rounded-[0.3rem] after:z-[-1]  cursor-pointer">
            <div>
                <h4 className="text-lg">5400

                </h4>
                <p className="text-[#BDBDBD] text-sm">Earning</p>
            </div>

            <span
                className="grid items-center justify-center w-[1.7rem] h-[1.7rem] rounded-full border border-white">
                <img src="/img/artist-dashboard/earning.svg" alt="Earning"
                    className="w-[0.938rem] h-[0.938rem]" />
            </span>
        </div>
    )
}

export default DashboardCard;