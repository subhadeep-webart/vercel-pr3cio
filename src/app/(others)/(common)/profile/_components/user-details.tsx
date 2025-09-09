'use client'

import React from 'react'
import { Avatar } from '@heroui/react'

import { AccountUser } from '@/models/account-user'
import { withAuthProtection } from '@/components/auth/protected-component'

type UserDetailsProps = {
    data: AccountUser
}
const UserDetails = ({ data }: UserDetailsProps) => {
    return (
        <div className='flex flex-col gap-3'>
            <Avatar src={data.avatar} size='lg' className='h-20 w-20' />
            <div>
                <p className='text-subtitle'>{data.name}</p>
                <p className='text-body1'>{data.email}</p>
            </div>
        </div>
    )
}

export default withAuthProtection(UserDetails)
