"use client";

import Link from "next/link";
import styles from '../createsong.module.scss';
import { useState } from "react";
import useApp from "@/hooks/useApp";

const SimpleCustom = () => {
    const { songAIContext, setSongAIContext } = useApp();
    const { customMode } = songAIContext;

    const handleSongModeChange = (modeType) => {
        const actionPayload = { type: "customMode", typeState: modeType === "custom" }
        setSongAIContext(actionPayload);
    }
    return (
        <>
            <div className="flex space-x-24 justify-center w-full">
                <div className={` px-4 py-2  ${styles.simple_btn}`}>
                    <button
                        onClick={() => handleSongModeChange("simple")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300  ${!customMode
                            ? 'bg-gradient-to-r from-[#D344C9] to-[#2D2694] text-white'
                            : 'text-gray-300 hover:text-white bg-[#373437]'
                            }`}
                    >
                        Simple
                    </button>
                </div>
                <div className={` px-4 py-2 ${styles.custom_btn}`}>
                    <button
                        onClick={() => handleSongModeChange("custom")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${customMode
                            ? 'bg-gradient-to-r from-[#D344C9] to-[#2D2694] text-white'
                            : 'text-gray-300 hover:text-white bg-[#373437]'
                            }`}
                    >
                        Custom
                    </button>
                </div>
            </div>
        </>
    )
};

export default SimpleCustom;