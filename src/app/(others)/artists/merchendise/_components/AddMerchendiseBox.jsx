import Link from "next/link";

const AddMerchendiseBox = () => {
    return (
        <div
            className="group flowBox p-5 bg-[linear-gradient(35deg,rgba(248,68,176,1)_0%,rgba(77,65,250,1)_100%)] rounded-[0.75rem] z-0 w-full relative after:content-[''] after:absolute after:bg-[#282828] after:w-[calc(100%-0.125rem)] after:h-[calc(100%-0.125rem)] after:top-[0.0625rem] after:right-[0.0625rem] after:z-[-1] after:rounded-[0.75rem] mb-3 h-[380px] flex justify-center items-center">
            <Link
                href={"/artists/add-merchendise"}
                className='h-[2.88rem] w-auto cursor-pointer rounded-full bg-[#C6FF00] px-6 text-sm leading-[2.88rem] text-black py-2 flex justify-center items-center'>
                Add Product
            </Link>
        </div>
    )
}

export default AddMerchendiseBox;