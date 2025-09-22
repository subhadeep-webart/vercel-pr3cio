import AddMerchendise from "../add-merchendise/page";
import AddMerchendiseBox from "./_components/AddMerchendiseBox";
import MerchendiseCard from "./_components/MerchendiseCard";

const MerchendisePage = () => {
    return (
        <div className="flex items-start flex-wrap w-full justify-end pl-6">
            <div className="bg-[#333232] w-full rounded-[0.75rem]">
                <div
                    className="py-4 px-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    <AddMerchendiseBox />
                    <MerchendiseCard />
                </div>
            </div>
        </div>
    )
}

export default MerchendisePage;