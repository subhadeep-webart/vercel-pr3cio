"use client"
import { useEffect, useRef } from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import {
    BsCloudArrowDown, BsThreeDots, BsThreeDotsVertical
} from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Image from 'next/image'
import { CiPlay1 } from "react-icons/ci";
import justin from "../../../../public/img/dashboard/justin.png"
import mical from "../../../../public/img/dashboard/mical.png"
import elvis from "../../../../public/img/dashboard/elvis.png"
import stevie from "../../../../public/img/dashboard/stevie.png"
import rolling from "../../../../public/img/dashboard/rolling.png"
import { FaRegUser } from 'react-icons/fa'
import { LiaCommentDollarSolid } from 'react-icons/lia'
import { LuShirt } from 'react-icons/lu'
import { LuAudioLines } from "react-icons/lu";
import { RiDownloadCloudLine } from 'react-icons/ri'
import { TbMusicHeart } from 'react-icons/tb'
import { Card, Tab, Tabs } from '@heroui/react'
import Link from "next/link";
import { RiFolderMusicLine } from "react-icons/ri";
import { MdOutlineTrackChanges, MdKeyboardArrowDown } from "react-icons/md";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function App() {
    const stats = [
        {
            label: "Track Listened",
            value: "3460",
            icon: <MdOutlineTrackChanges />,
            change: "+6.8%",
            color: "text-[#F9FF45]",
            iconBg: "bg-[#F9FF45]",
        },
        {
            label: "Total Album",
            value: "530",
            icon: <RiFolderMusicLine />,
            change: "12%",
            color: "text-[#57D063]",
            iconBg: "bg-[#57D063]",
        },
        {
            label: "Total Download",
            value: "6850",
            icon: <BsCloudArrowDown />,
            change: "1.5%",
            color: "text-[#4888FF]",
            iconBg: "bg-[#4888FF]",
        },
    ];

    const chartRef = useRef(null);
    // Create a pattern for the second dataset
    // Create a striped pattern
    const createPattern = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 10;
        canvas.height = 10;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#836fff';
        ctx.fillRect(0, 0, 10, 10);

        ctx.strokeStyle = '#1c1c1c';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(10, 0);
        ctx.stroke();

        return ctx.createPattern(canvas, 'repeat');
    };

    // Data for the chart
    const data = {
        labels: ['Hip-Hop', 'Punk', 'Pop', 'Jazz', 'Rock', 'Instrumental', 'Folk'],
        datasets: [
            {
                label: 'Genres listened Most (Solid)',
                data: [5000, 0, 0, 0, 0, 0, 0], // Only Hip-Hop has a value, the rest are 0
                backgroundColor: '#836fff', // Solid color for "Hip-Hop"
                borderRadius: 10,
                barThickness: 40,
                categoryPercentage: 0.4,
            },
            {
                label: 'Genres listened (Striped)',
                data: [0, 3500, 3900, 2800, 3800, 2900, 2900], // Only the other genres have values
                backgroundColor: createPattern(), // Striped fill for other genres
                borderColor: '#836fff',
                borderWidth: 2,
                barThickness: 40,
                categoryPercentage: 0.4,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Legends text color
                },
            },
        },
        scales: {
            x: {
                grid: { color: 'rgba(255,255,255,0.1)' }, // Light grid lines
                ticks: { color: 'white' }, // White ticks
            },
            y: {
                beginAtZero: true, // Start y-axis at zero
                grid: { color: 'rgba(255,255,255,0.1)' }, // Light grid lines
                ticks: { color: 'white' }, // White ticks
            },
        },
    };

    const albums = [
        {
            name: "Justin Bieber",
            img: justin,
        },
        {
            name: "Michael Jackson",
            img: mical,
        },
        {
            name: "Elvis Presley",
            img: elvis,
        },
        {
            name: "Stevie Wonder",
            img: stevie,
        },

        {
            name: "The Rolling S...",
            img: rolling,
        },
    ];


    return (
        <>
            <Card className=' flex-row items-center justify-between bg-[#2A2F2C] px-6 py-3 text-white mx-5 mt-4'>
                <Image
                    src='/img/logo/pr3cio-p.svg'
                    alt='Logo'
                    width={33}
                    height={53}
                />
                <div className='flex items-center space-x-6'>
                    <Link
                        href='/account'
                        className='text-md flex items-center hover:text-[#847AFE]'>
                        <FaRegUser className='mr-2 inline-block text-xl transition' />
                        <span className='transition'>Account</span>
                    </Link>
                    <Link
                        href='/download'
                        className='text-md flex items-center hover:text-[#847AFE]'>
                        <RiDownloadCloudLine className='mr-2 inline-block text-xl transition' />
                        <span className='transition'>Download</span>
                    </Link>
                    <Link
                        href='#'
                        className='text-md flex items-center hover:text-[#847AFE]'>
                        <LuShirt className='mr-2 inline-block text-xl transition' />
                        <span className='transition'>My Order</span>
                    </Link>
                    <Link
                        href='/favourite'
                        className='text-md flex items-center hover:text-[#847AFE]'>
                        <TbMusicHeart className='mr-2 inline-block text-xl transition' />
                        <span className='transition'>Favourite</span>
                    </Link>
                    <Link
                        href='/subscriptions'
                        className='text-md flex items-center text-[#847AFE]'>
                        <LiaCommentDollarSolid className='mr-2 inline-block text-xl transition' />
                        <span className='transition'>Subscription Plan</span>
                    </Link>
                </div>
            </Card>
            <div className="min-h-screen bg-[#2A2F2C] text-white p-6 md:p-10 font-sans rounded-xl m-5">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-3 space-y-6">
                        {/* Stats */}
                        <h2 className="text-[22px] font-semibold mb-3">Engagement Overview</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {stats.map((s, i) => (
                                <div
                                    key={i}
                                    className=" p-5 rounded-xl border border-[#39413C] shadow-md"
                                >
                                    <div className="flex items-center gap-4 border-b pb-2 border-[#39413C] border-dashed">
                                        <div
                                            className={`w-12 h-12 flex items-center justify-center rounded-full ${s.iconBg}`}
                                        >
                                            <span className="text-xl text-black">{s.icon}</span>
                                        </div>
                                        <div>
                                            <p className=" text-lg">{s.label}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end ">
                                        <div className="text-2xl font-semibold">{s.value}
                                            <p className=" text-xs font-normal  ">{s.label}</p>
                                        </div>
                                        <p className={`text-lg  font-medium ${s.color}`}>
                                            {s.change}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Revenue Chart */}
                        <h2 className="text-[22px] font-semibold mb-0">Top Performing Genres</h2>
                        <div className="bg-[#1F2622] p-6 rounded-xl border border-[#39413C] shadow-md relative mt-0">
                            <BsThreeDots className="absolute top-[10px] right-[24px] text-2xl" />
                            <div className="flex justify-between items-center my-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Yearly Streams</h2>

                                </div>
                                <div className="flex gap-2">
                                    <button className="border-[#B9AEAE] border flex  hover:bg-[#4b4b4b] text-white px-4 py-1 rounded-md text-sm">
                                        Yearly Streams  < MdKeyboardArrowDown className="text-xl" />
                                    </button>
                                </div>
                            </div>
                            <Bar data={data} options={options} ref={chartRef} />
                        </div>
                    </div>

                    {/* Most Popular Albums */}
                    <div>
                        <div className=" p-6 rounded-xl border border-[#39413C] shadow-md h-fit">
                            <h2 className="text-[15px] font-semibold mb-6">The Most Popular Albums</h2>
                            <ul className="space-y-4">
                                {albums.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 border-dashed border-b pb-2 border-[#3F3F3F] relative">
                                        <div className="w-10 h-10 rounded-full relative" >
                                            <FaPlay className="absolute top-[10px] right-[12px] text-base" />
                                            <img src={item.img.src} className="w-[35px] h-[35px] rounded-full" />
                                        </div>
                                        <div>
                                            <div className="text-white text-sm">{item.name}</div>
                                            <div className="text-[#8E8E8E] text-xs">Fusce sagittis...</div>
                                        </div>
                                        <div className="absolute right-0"><BsThreeDotsVertical /></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=" p-6 rounded-xl border border-[#39413C] shadow-md h-fit mt-5">
                            <h2 className="text-[15px] font-semibold mb-6">The Most Popular Albums</h2>
                            <ul className="space-y-4">
                                {albums.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 border-dashed border-b pb-2 border-[#3F3F3F] relative">

                                        <div>
                                            <div className="text-white text-sm">{item.name}</div>
                                            <div className="text-[#8E8E8E] text-xs">Fusce sagittis...</div>
                                        </div>
                                        <div className="text-2xl absolute right-10"><LuAudioLines /></div>
                                        <div className="absolute right-0"><BsThreeDotsVertical /></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
