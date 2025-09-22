"use client"

import CreateEventForm from "./_components/CreateEventForm";
import { withAuthProtection } from '@/components/auth/protected-component'
const CreateEvent = () => {
    return (
        <div className='w-full rounded-[0.876rem] bg-[#2A2929] px-4 py-7'>
            <CreateEventForm />
        </div>
    )
}

export default withAuthProtection(CreateEvent);