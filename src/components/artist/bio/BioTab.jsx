'use client'

import React, { useState } from 'react'
import { Card, CardBody, Switch, Tab, Tabs } from '@heroui/react'

import { ARTIST_BIO_NAVIGATION } from '@/utils/constant'

const BioTab = ({ bioDetails }) => {
    return (
        <>
            <div className='flex w-full flex-col'>
                <Tabs
                    disableCursorAnimation // remove the animated cursor highlight
                    disableAnimation
                    aria-label='Options'
                    isVertical={true}
                    //color='primary'
                    radius='sm'
                    // OVERRIDE TAB STYLES
                    classNames={{
                        base: 'flex', // full width
                        tabList:
                            'p-4 rounded-xl flex-col gap-5 text-lg bg-transparent', // left panel box
                        tab: [
                            'relative text-base font-normal px-0 py-2 text-left !bg-transparent', // no bg
                            '!text-white', // inactive text color
                            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#414141]",
                            'data-[selected=true]:font-semibold data-[selected=true]:text-[#d6ff31]', // active text yellow
                            'data-[selected=true]:after:bg-[#d6ff31] data-[selected=true]:after:h-[2px]', // active underline yellow
                            '!data-[selected=true]:bg-transparent',

                            'outline-none',
                        ],
                        tabContent: 'w-full capitalize !text-white',
                        panel: 'flex-1 p-6 bg-[#2f2f2f] rounded-xl text-white',
                    }}>
                    {bioDetails?.map((item) => (
                        <Tab key={item?.key} title={item?.title}>
                            <Card
                                classNames={{
                                    base: 'bg-transparent shadow-none', // removes bg + shadow
                                    body: 'bg-transparent text-white', // card body styles
                                }}>
                                <CardBody className='rounded-xl bg-transparent !text-white'>
                                    {item?.description || ""}
                                </CardBody>
                            </Card>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </>
    )
}

export default BioTab
