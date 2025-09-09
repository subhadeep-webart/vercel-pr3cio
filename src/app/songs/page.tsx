'use client'
import React, { useState } from 'react';
import { Button } from '@heroui/react';
import Container from '@/components/ui/container';
import MusicList from './_components/music-list';

const MusicPage = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');

    // Handle tab change
    const handleTabClick = (tab: 'latest' | 'popular') => {
        setActiveTab(tab);  // Update the active tab
    };

    return (
        <Container className='space-y-4'>
            <div className='flex '>
                <div
                    onClick={() => handleTabClick('latest')}
                    className={`px-4 py-2 text-lg  border-b cursor-pointer ${activeTab === 'latest' ? 'border-primary text-primary' : 'bg-transparent text-wight'}`}
                >
                    Latest
                </div>
                <div
                    onClick={() => handleTabClick('popular')}
                    className={`px-4 py-2 text-lg  border-b cursor-pointer ${activeTab === 'popular' ? 'border-primary text-primary' : 'bg-transparent text-wight'}`}
                >
                    Trending
                </div>
            </div>

            <div>
                {activeTab === 'latest' ? (
                    <MusicList trending={false} /> // Pass the type to filter the songs
                ) : (
                    <MusicList trending={true} /> // Pass the type to filter the songs
                )}
            </div>
        </Container>
    );
};

export default MusicPage;
