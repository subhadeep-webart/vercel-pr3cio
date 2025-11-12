import CreditCard from "@/components/common/CreditCard";

const CreditComponent = ({ creditsName }) => {
    return (
        <>
            <div className="bg-[#2A2929] px-5 py-5 rounded-2xl mb-4">
                <h3 className="text-base font-bold">Credits</h3>
                <hr className="my-3 opacity-10 mb-1" />
                {
                    creditsName?.map((credit, index) => (<CreditCard creditDetails={credit} key={`credit-${index}`} />))
                }
            </div>
        </>
    )
}

export default CreditComponent;