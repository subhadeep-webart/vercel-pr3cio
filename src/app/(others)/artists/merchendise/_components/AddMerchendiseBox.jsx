import Link from 'next/link'

const AddMerchendiseBox = () => {
    return (

        <div className="flowBox group relative z-0 mb-3 flex h-[250px] w-full items-center justify-center rounded-[0.75rem] bg-[linear-gradient(35deg,rgba(248,68,176,1)_0%,rgba(77,65,250,1)_100%)] p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)] after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-[''] md:h-[380px]">
            <Link
                href='/artists/add-merchendise'
                className='flex w-auto cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#C6FF00] px-4 py-1.5 text-xs text-black md:px-6 md:py-2 md:text-sm'>
                Add Product
            </Link>
        </div>
    )
}

export default AddMerchendiseBox
