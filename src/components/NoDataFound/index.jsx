import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NoDataFound = ({ component }) => {
    return (
        <div className='w-full h-[25rem] flex flex-col items-center justify-center text-center mx-auto'>
            <div className='w-1/3 h-[20rem]'>
                <DotLottieReact
                    src="https://lottie.host/29b4e8a6-aaf4-4baf-a83a-678cf5345606/eFTlxhDv0M.lottie"
                    loop
                    autoplay
                />
            </div>
            {component}
        </div>
    );
};

export default NoDataFound;
