'use client'

import React, { useState } from 'react'
import { eventListByArtists } from '@/services/api/artist-api'
import {
    Chip,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    User,
} from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { FaEye, FaRegEye } from 'react-icons/fa'
import { PiPencilSimpleLineBold } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import queryConstants from '@/constants/query-constants'
import useAuth from '@/hooks/useAuth'
import DeleteEvent from './_components/DeleteEvent'
import Link from 'next/link'
import { EVENT_COLUMN } from '@/utils/constant'

const statusColorMap = {
    active: 'success',
    paused: 'danger',
    vacation: 'warning',
}

const Events = () => {
    const [openDelete, setOpenDelete] = useState(false)
    const [eventId, setEventId] = useState(false)
    const { user } = useAuth()
    console.log('user', user)

    const { data: events = [], status } = useQuery({
        queryKey: [queryConstants.eventListByArtists, true],
        queryFn: () =>
            eventListByArtists({
                id: user?._id,
            }),
    })


    const handleDelete = (id) => {
        setEventId(id);
        setOpenDelete(true);
    };

    const cellRenderers = {
        image: (event) => (
            <User
                avatarProps={{
                    radius: 'full',
                    size: 'sm',
                    src: event.imageUrl,
                }}
                name=''
            />
        ),
        title: (event) => <span className='capitalize'>{event.title}</span>,
        link: (event) => (
            <a
                href={event.third_party_url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline hover:text-blue-800'
            >
                View
            </a>
        ),
        date: (event) => (
            <span>{new Date(event.date).toLocaleDateString('en-GB')}</span>
        ),
        venue: (event) => <span>{event.venue}</span>,
        city: (event) => <span className='capitalize'>{event.city}</span>,
        state: (event) => <span className='capitalize'>{event.state}</span>,
        actions: (event) => (
            <div className='relative flex items-center gap-2'>
                <Tooltip content='Edit event'>
                    <Link href={`/artists/edit-event/${event?._id}`} className='cursor-pointer text-lg text-default-400 active:opacity-50'>
                        <PiPencilSimpleLineBold />
                    </Link>
                </Tooltip>
                <Tooltip color='danger' content='Delete event'>
                    <button onClick={() => handleDelete(event?._id)} className='cursor-pointer text-lg text-danger active:opacity-50'>
                        <RiDeleteBin6Line />
                    </button>
                </Tooltip>
            </div>
        ),
    }


    return (
        <>
            <Table aria-label='Artist event list'>
                <TableHeader columns={EVENT_COLUMN}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={
                                // column.uid === 'actions' ? 'center' : 'start'
                                'start'
                            }>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={events}>
                    {(event) => (
                        <TableRow key={event._id}>
                            {(columnKey) => (
                                <TableCell>
                                    {cellRenderers[columnKey]?.(event) ??
                                        event[columnKey]}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {openDelete && (
                <DeleteEvent
                    openDelete={openDelete}
                    setOpenDelete={setOpenDelete}
                    eventId={eventId}
                />
            )}
        </>
    )
}

export default Events
