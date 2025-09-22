"use client";

import { useParams } from "next/navigation";
import CreateEventForm from "../../create-event/_components/CreateEventForm";

const EditEvent=()=>{
     const params = useParams()
        const eventId = params.id
        console.log('event id', eventId)

    return(
        <>
           <div className='w-full rounded-[0.876rem] bg-[#2A2929] px-4 py-7'>
            <CreateEventForm eventId={eventId} />
        </div>
        </>
    )
};

export default EditEvent;