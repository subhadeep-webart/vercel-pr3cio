"use client"
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";
import {
    BsCloudArrowDown, BsHeadphones, BsThreeDots, BsThreeDotsVertical
} from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import { CiPlay1 } from "react-icons/ci";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function App() {
    const stats = [
        {
            label: "Total Downloads",
            value: "36,850",
            icon: <BsCloudArrowDown />,
            change: "+6.8%",
            color: "text-[#F9FF45]",
            iconBg: "bg-[#F9FF45]",
        },
        {
            label: "New Listeners",
            value: "5,634",
            icon: <BsHeadphones />,
            change: "12%",
            color: "text-[#57D063]",
            iconBg: "bg-[#57D063]",
        },
        {
            label: "Total Earning",
            value: "35,746k",
            icon: <BsCloudArrowDown />,
            change: "5.2%",
            color: "text-[#4888FF]",
            iconBg: "bg-[#4888FF]",
        },
    ];

    const chartData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "Revenue",
                data: [12, 19, 15, 22, 24, 20, 30, 28, 24, 22, 26, 30],
                borderColor: "#6366f1",
                backgroundColor: "rgba(99,102,241,0.2)",
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                ticks: { color: "#aaa" },
                grid: { color: "#333" },
            },
            y: {
                ticks: { color: "#aaa" },
                grid: { color: "#333" },
            },
        },
    };
    const albums = [
        {
            name: "Justin Bieber",
            img: "/img/dashboard/justin.png",
        },
        {
            name: "Michael Jackson",
            img: "/img/dashboard/mical.png",
        },
        {
            name: "Elvis Presley",
            img: "/img/dashboard/elvis.png",
        },
        {
            name: "Stevie Wonder",
            img: "/img/dashboard/stevie.png",
        },

        {
            name: "The Rolling S...",
            img: "/img/dashboard/rolling.png",
        },
    ];


    return (
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
                    <h2 className="text-[22px] font-semibold mb-2">Revenue Data</h2>
                    <div className="bg-[#1F2622] p-6 rounded-xl border border-[#39413C] shadow-md relative">
                        <BsThreeDots className="absolute top-[10px] right-[24px] text-2xl" />
                        <div className="flex justify-between items-center my-4">
                            <div>
                                <h2 className="text-xs font-semibold">Statistics</h2>
                                <p className="text-base ">Total Profit:<span className="text-md  font-semibold"> 14,709</span></p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-[#6156E2] hover:bg-[#4b4b4b] text-white px-4 py-1 rounded-md text-sm">
                                    Monthly Income
                                </button>
                                <button className="border-[#B9AEAE] border  hover:bg-[#4b4b4b] text-white px-4 py-1 rounded-md text-sm">
                                    Monthly Expense
                                </button>
                            </div>
                        </div>
                        <Line data={chartData} options={chartOptions} height={100} />
                    </div>

                    {/* Most Popular Tracks */}
                    <h2 className="text-[22px] font-semibold mb-6">The Most Popular Tracks</h2>
                    <div className=" p-6 rounded-xl border border-[#39413C] shadow-md relative">
                        <div className="space-y-6">
                            <BsThreeDots className="absolute top-[20px] right-[24px] text-2xl" />
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center border-b border-dashed border-gray-700 pb-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className=" text-xl">{i}.</span>
                                        <img
                                            src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                                            alt="profile"
                                            className="w-[58px] h-[59px] rounded-md"
                                        />
                                        <div className="flex">
                                            <span className="rounded-full bg-[#C6FF00] text-black w-[30px] h-[30px] p-2 mr-2"><CiPlay1 />
                                            </span>
                                            <p className="text-white text-xl">Nula libero neque</p>

                                        </div>
                                    </div>
                                    <p className="font-bold  flex flex-col text-xl">1,235
                                        <p className="font-normal "> Streams</p>
                                    </p>
                                    <p className="text-[#928BFF] font-bold text-xl  flex flex-col">$60,540
                                        <p className="text-white font-normal">Earnings</p>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Most Popular Albums */}
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
            </div>
        </div>
    );
}
