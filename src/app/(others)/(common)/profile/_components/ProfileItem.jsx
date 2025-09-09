import { IoIosArrowForward } from 'react-icons/io'
function ProfileItem({ icon, label, active, noBorder, devStatus }) {
    return (
        <div
            className={`rounded-md px-4 pt-5 text-sm transition-all ${active
                ? 'bg-[#3A3F3C] text-white'
                : 'text-gray-300 hover:bg-[#353935]'
                }`}>
            <div
                className={`target-b flex w-full items-center justify-between ${noBorder ? 'border-none' : 'border-b border-dashed border-gray-400'} pb-5`}>
                <div className='flex items-center gap-3'>
                    <span className='text-lg'>{icon}</span>
                    <span>{label}</span>
                    <small>
                        <code>{devStatus}</code>
                    </small>
                </div>
                <IoIosArrowForward className='text-2xl' />
            </div>
        </div>
    )
}

export default ProfileItem;