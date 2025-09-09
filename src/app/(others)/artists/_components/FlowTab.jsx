'use client'

import { useEffect, useState } from 'react'
import { Avatar, Card, CardBody, Image, Skeleton } from '@heroui/react'
import { BsShare } from 'react-icons/bs'
import { FaHeart, FaInstagram, FaRegComment } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'

import FlowTabSkeleton from './PostSkeleton'

const fakePosts = [
    {
        id: 1,
        type: 'facebook',
        name: 'Justin Bieber',
        timestamp: 'Just now',
        avatar: 'https://i.pravatar.cc/300?img=6',
        image: 'https://lemaclinic.com/wp-content/uploads/Justin-bieber-badass-smile-makeover.webp',
        text: 'Join me tomorrow at boston',
        description:
            'Dolor sit amet, gravida ligula vitae est congue, at malesuada leo lacinia. Donec pulvinar pretium nulla.',
        likes: '12k',
        comments: '500',
        shares: '120',
        showBookmark: true,
    },
    {
        id: 2,
        type: 'instagram',
        name: 'Justin Bieber',
        timestamp: 'Just now',
        avatar: 'https://i.pravatar.cc/300?img=6',
        image: 'https://external-preview.redd.it/justin-bieber-sold-music-catalog-for-200-million-because-he-v0-YSHWQXNua1VdRHsqj9NuA0FmwUJ7ul3u2SBOruRHO74.jpg?width=640&crop=smart&auto=webp&s=3b0538bd63f6d4e7c32e53fd8dbb2c98074ff257',
        text: 'Join me tomorrow at boston',
        description:
            'Dolor sit amet, gravida ligula vitae est congue, at malesuada leo lacinia. Donec pulvinar pretium nulla.',
        likes: '12k',
        comments: '500',
        shares: '120',
    },
    {
        id: 3,
        type: 'instagram',
        name: 'Justin Bieber',
        timestamp: 'Just now',
        avatar: 'https://i.pravatar.cc/300?img=6',
        image: 'https://fortune.com/img-assets/wp-content/uploads/2023/01/GettyImages-1389438793-e1674608268250.jpg?w=1440&q=75',
        text: 'Join me tomorrow at boston',
        description:
            'Dolor sit amet, gravida ligula vitae est congue, at malesuada leo lacinia. Donec pulvinar pretium nulla.',
        likes: '12k',
        comments: '500',
        shares: '120',
    },
    {
        id: 4,
        type: 'facebook',
        name: 'Justin Bieber',
        timestamp: 'Just now',
        avatar: 'https://i.pravatar.cc/300?img=6',
        image: 'https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCO2WKMQG2qK08gcXy5rhxuUVcqQA',
        text: 'Join me tomorrow at boston',
        description:
            'Dolor sit amet, gravida ligula vitae est congue, at malesuada leo lacinia. Donec pulvinar pretium nulla.',
        likes: '12k',
        comments: '500',
        shares: '120',
        showBookmark: true,
    },
]

const FlowTab = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {loading ? (
                <FlowTabSkeleton />
            ) : (
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    {fakePosts.map((post, idx) => (
                        <Card
                            key={idx}
                            className='rounded-[27px] border border-[#4B4B4B] bg-[#2A2F2C] p-3 text-white'>
                            <CardBody className='space-y-3'>
                                {/* Header */}
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <Avatar
                                            src={post.avatar}
                                            alt={post.name}
                                            className='h-8 w-8'
                                        />
                                        <div>
                                            <p className='text-sm font-semibold'>
                                                {post.name}
                                            </p>
                                            <p className='text-xs text-gray-400'>
                                                {post.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        {post.type === 'facebook' && (
                                            <FaFacebook className='h-[29px] w-[29px] text-blue-500' />
                                        )}
                                        {post.type === 'instagram' && (
                                            <FaInstagram className='h-[29px] w-[29px] text-pink-500' />
                                        )}
                                    </div>
                                </div>

                                {/* Text */}
                                <div>
                                    <p className='font-semibold'>{post.text}</p>
                                    <p className='mt-1 text-sm text-gray-300'>
                                        {post.description}{' '}
                                        <span className='block cursor-pointer text-blue-400 hover:underline'>
                                            Read more
                                        </span>
                                    </p>
                                </div>

                                {/* Image */}
                                <Image
                                    src={post.image}
                                    alt={post.text}
                                    className='aspect-[426/240] w-full rounded-[27px] object-cover'
                                />

                                {/* Reactions */}
                                <div className='mt-2 flex items-center justify-between text-sm text-gray-400'>
                                    <div className='flex items-center gap-3'>
                                        <span className='flex items-center gap-1'>
                                            <FaHeart className='h-[15px] w-[15px] text-[#F8446B]' />{' '}
                                            {post.likes}
                                        </span>
                                        <span className='flex items-center gap-1'>
                                            <FaRegComment className='h-[15px] w-[15px]' />{' '}
                                            {post.comments}
                                        </span>
                                    </div>
                                    <span className='flex items-center gap-1'>
                                        <BsShare className='h-[15px] w-[15px]' />{' '}
                                        {post.shares}
                                    </span>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )}
        </>
    )
}

export default FlowTab
