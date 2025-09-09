import React from 'react'

import PageCommonBg from '@/components/artist/PageCommonBg'

const AfterLoginLayout = ({ children }) => {
    return (
        <>
            <div className='w-full pl-6'>
                <div class='w-full rounded-[0.75rem] bg-[#333232]'>
                    <PageCommonBg />
                    {children}
                </div>
            </div>
        </>
    )
}

export default AfterLoginLayout
