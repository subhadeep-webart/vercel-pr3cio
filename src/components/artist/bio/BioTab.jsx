'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardBody, Tab, Tabs } from '@heroui/react'

const BioTab = ({ bioDetails }) => {
  const [isVertical, setIsVertical] = useState(false)

  // Handle responsive check only on client
  useEffect(() => {
    const checkWidth = () => setIsVertical(window.innerWidth >= 768)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <div className='flex w-full flex-col'>
      <Tabs
        disableCursorAnimation
        disableAnimation
        aria-label='Options'
        isVertical={isVertical}
        radius='sm'
        classNames={{
          base: 'flex',
          tabList: 'p-4 rounded-xl flex-col gap-5 text-lg bg-transparent',
          tab: [
            'relative text-base font-normal px-0 py-2 text-left !bg-transparent',
            '!text-white',
            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#414141]",
            'data-[selected=true]:font-semibold data-[selected=true]:text-[#d6ff31]',
            'data-[selected=true]:after:bg-[#d6ff31] data-[selected=true]:after:h-[2px]',
            '!data-[selected=true]:bg-transparent',
            'outline-none',
          ],
          tabContent: 'w-full capitalize !text-white',
          panel: 'flex-1 p-6 bg-[#2f2f2f] rounded-xl text-white',
        }}
      >
        {bioDetails?.length > 0 &&
          bioDetails.map((item) => (
            <Tab key={item?.key} title={item?.title}>
              <Card
                classNames={{
                  base: 'bg-transparent shadow-none',
                  body: 'bg-transparent text-white',
                }}
              >
                <CardBody className='rounded-xl bg-transparent !text-white'>
                  {item?.description || ''}
                </CardBody>
              </Card>
            </Tab>
          ))}
      </Tabs>
    </div>
  )
}

export default BioTab
