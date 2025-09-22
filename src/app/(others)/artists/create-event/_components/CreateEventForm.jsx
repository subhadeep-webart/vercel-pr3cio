'use client'

import { musicCategories } from '@/data/music-data'
import { now, getLocalTimeZone, ZonedDateTime,TimeZone, DateFormatter, parseZonedDateTime, parseAbsolute, toCalendarDateTime } from "@internationalized/date";
import {
    Button,
    cn,
    Image,
    Input,
    Select,
    SelectItem,
    Switch,
    Textarea,
    Tooltip,
    DatePicker
} from '@heroui/react'
import { CiCircleRemove } from 'react-icons/ci'
import { useFormik } from 'formik'
import { Album } from '@/models/responses/albums-data'
import FileUploader from '@/components/file-uploader'
import Container from '@/components/ui/container'
import Loader from '@/components/ui/Loader'
import { useMutation, useQuery } from '@tanstack/react-query'
import queryConstants from '@/constants/query-constants'
import { createEvent, editEvent, getAllCrews, getEventById } from '@/services/api/artist-api'
import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import * as Yup from "yup"
import toast from 'react-hot-toast';


function CreateEventForm({eventId}) {
    console.log("eventId",eventId)
    const router=useRouter();
    const [isOpenImageUpload, setIsOpenImageUpload] = useState(false)
    const initialValues = {
        "imageUrl": "",
        "third_party_url": "",
        "title": "",
        "description": "",
        "date": now(getLocalTimeZone()),
        "venue": "",
        "state": "",
        "city": ""
    }

    const {
        mutate,  // for fire & forget / callback style
        mutateAsync,  // for async/await style
        isLoading,
        isError,
        error,
        data,
        isSuccess
    } = useMutation({
        mutationFn: (eventDetails) => createEvent(eventDetails),
        onSuccess: (data, variables, context) => {
            // optional: do something when event is created
            console.log("Event created:", data);
            // e.g. invalidate or refetch queries so UI updates
            // queryClient.invalidateQueries(["events"]);
            toast.success(data?.message ?? 'Event Created Successfully');
            router.push("/artists/events");
        },
        onError: (err, variables, context) => {
            // optional: show some error feedback
            console.error("Failed to create event:", err);
        }
    });

    const validationSchema = useMemo(() =>
        Yup.object().shape({
            imageUrl: Yup.string()
                .url("Image URL must be a valid URL")
                .required("Image URL is required"),

            third_party_url: Yup.string()
                .url("Third party URL must be a valid URL")
                .required("Third party URL is required"),

            title: Yup.string()
                .trim()
                .min(3, "Title must be at least 3 characters")
                .max(100, "Title must be at most 100 characters")
                .required("Title is required"),

            description: Yup.string()
                .trim()
                .min(10, "Description must be at least 10 characters")
                .max(1000, "Description must be at most 1000 characters")
                .required("Description is required"),

            venue: Yup.string()
                .trim()
                .min(2, "Venue must be at least 2 characters")
                .max(200, "Venue must be at most 200 characters")
                .required("Venue is required"),

            state: Yup.string()
                .trim()
                .required("State is required"),

            city: Yup.string()
                .trim()
                .required("City is required"),
        }), [])

        const { data: eventData, isLoading: isEventLoading } = useQuery({
    queryKey: [queryConstants.getEventById, eventId],
    queryFn: () => getEventById({ id: eventId }),
    enabled: !!eventId, // only run if eventId is provided
});

console.log("eventData",eventData)

 

const {
    mutateAsync: editEventMutate,
    isLoading: isEditLoading,
} = useMutation({
    mutationFn: ({ id, payload }) => editEvent(id, payload),
    onSuccess: (data) => {
        toast.success(data?.message ?? 'Event updated successfully');
        router.push('/artists/events');
    },
    onError: (err) => {
        console.error("Edit event error:", err);
        toast.error("Failed to update event.");
    }
});


    // const onSubmit = async (values, { resetForm }) => {
    //     // const payload = {
    //     const { date } = values
    //     const formattedDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}T${String(date.hour).padStart(2, '0')}:${String(date.minute).padStart(2, '0')}:${String(date.second).padStart(2, '0')}.${String(date.millisecond).padStart(3, '0')}${date.offset}`
    //     const payload = {
    //         ...values,
    //         date: formattedDate
    //     };
    //     console.log("Payload---->", payload);
    //     try {
    //         const resp = await mutateAsync(payload)
    //         if (resp.status) {
    //             resetForm()
    //         }
    //     } catch (error) {
    //         console.log("Errorr=====>", error);
    //         toast.error('Submission failed.')
    //     }
    // }
    const onSubmit = async (values, { resetForm }) => {
    const { date } = values;
    // const formattedDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}T${String(date.hour).padStart(2, '0')}:${String(date.minute).padStart(2, '0')}:${String(date.second).padStart(2, '0')}.${String(date.millisecond).padStart(3, '0')}${date.offset}`;
    const jsDate = new Date(
            values.date.year,
            values.date.month - 1,
            values.date.day,
            values.date.hour ?? 0,
            values.date.minute ?? 0,
            values.date.second ?? 0,
            values.date.millisecond ?? 0
        );

        const formattedDate = jsDate.toISOString(); 
    
    const payload = {
        ...values,
        date: formattedDate
    };

    try {
        if (eventId) {
            await editEventMutate({ id: eventId, payload });
        } else {
            const resp = await mutateAsync(payload);
            if (resp.status) {
                resetForm();
            }
        }
    } catch (error) {
        console.error("Submit error:", error);
        toast.error('Submission failed.');
    }
}


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
        setFieldValue,
        getFieldProps
    } = formik

    const handleImageUpload = (url) => {
        setFieldValue('imageUrl', url)
    }

    const handleRemoveImage = () => {
        setFieldValue('imageUrl', '')
    }

    console.log("Values======>", values);
  useEffect(() => {
    if (eventId && eventData) {
        setFieldValue('title', eventData.title);
        setFieldValue('description', eventData.description);
        setFieldValue('venue', eventData.venue);
        setFieldValue('state', eventData.state);
        setFieldValue('city', eventData.city);
        setFieldValue('imageUrl', eventData.imageUrl);
        setFieldValue('third_party_url', eventData.third_party_url);
    
      if (eventData.date) {
    try {
        // Parse the ISO string to an Absolute
        const absoluteDate = parseAbsolute(eventData.date);
        // Convert to a ZonedDateTime using the local time zone
        const zonedDate = toCalendarDateTime(absoluteDate, getLocalTimeZone());
        setFieldValue('date', zonedDate);
    } catch (error) {
        console.error("Date parsing failed:", error);
    }
}
   
  
    }
}, [eventData, eventId,setFieldValue]);
  




    return (
        <>
            <div className="grid grid-cols-12 bg-[#2A2929] rounded-[0.876rem] py-7">
                <FileUploader
                    isOpen={isOpenImageUpload}
                    onClose={() => setIsOpenImageUpload(false)}
                    onSuccess={handleImageUpload}
                    accept={{
                        'image/*': ['.jpg', '.jpeg', '.png'],
                    }}
                />
                <form action="" className="col-span-12 md:col-span-10 md:col-start-2" onSubmit={handleSubmit}
                    onReset={handleReset}>
                    <div className="grid grid-cols-1 gap-4 items-end mb-6">
                        {values.imageUrl ? (
                            <div className='relative w-fit'>
                                <Image
                                    src={values.imageUrl}
                                    alt='product thumbnail'
                                    className='h-40 w-40 object-cover'
                                    radius='sm'
                                />
                                <Tooltip content='Remove Image'>
                                    <Button
                                        isIconOnly
                                        variant='light'
                                        className='absolute -right-8 -top-6'
                                        onPress={handleRemoveImage}
                                    >
                                        <CiCircleRemove className='text-2xl text-danger-500' />
                                    </Button>
                                </Tooltip>
                            </div>
                        ) : (
                            <button
                                type='button'
                                onClick={() => setIsOpenImageUpload(true)}
                                className="rounded-[0.3rem] border-1 border-[#666] border-solid p-3 col-span-4 z-1 relative after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 bg-custom-gradient after:rounded-[0.3rem] after:z-[-1] text-center cursor-pointer">
                                <div className="grid grid-flow-col gap-4 justify-center items-center">
                                    <span className="xl:text-[0.9rem] xxl:text-[1.05rem] font-bold col-span-auto">Upload Event Image</span>
                                    <span
                                        className="w-[2.40rem] h-[2.40rem] rounded-full bg-[rgba(255,255,255,.25)] leading-[2.40rem] text-center col-span-auto">
                                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="m-auto h-[2.40rem]">
                                            <path
                                                d="M18.9988 18.1143C18.9867 20.3122 18.8902 21.5025 18.1218 22.2789C17.2431 23.1669 15.8289 23.1669 13.0005 23.1669H11.0005C8.17206 23.1669 6.75785 23.1669 5.87917 22.2789C5.00049 21.391 5.00049 19.9619 5.00049 17.1038V9.01971C5.00049 6.16155 5.00049 4.73247 5.87917 3.84455C6.75785 2.95663 8.17206 2.95663 11.0005 2.95663H13.0005C15.8289 2.95663 17.2431 2.95663 18.1218 3.84455C19.0005 4.73247 19.0005 6.16155 19.0005 9.01971V14.0723"
                                                stroke="white" stroke-width="1.98585" stroke-linecap="round" />
                                            <path
                                                d="M19.0005 20.6406C19.465 20.6406 19.6973 20.6406 19.8916 20.6095C20.9613 20.4383 21.8003 19.5905 21.9697 18.5095C22.0005 18.3132 22.0005 18.0785 22.0005 17.6091V8.51446C22.0005 8.04508 22.0005 7.81039 21.9697 7.61401C21.8003 6.53303 20.9613 5.68524 19.8916 5.51403C19.6973 5.48293 19.465 5.48293 19.0005 5.48293"
                                                stroke="white" stroke-width="1.98585" />
                                            <path d="M13.0005 15.0828V12.0513V9.01971" stroke="white" stroke-width="1.98585"
                                                stroke-linecap="round" />
                                            <path
                                                d="M11.0005 17.1038C12.1051 17.1038 13.0005 16.199 13.0005 15.0828C13.0005 13.9666 12.1051 13.0618 11.0005 13.0618C9.89592 13.0618 9.00049 13.9666 9.00049 15.0828C9.00049 16.199 9.89592 17.1038 11.0005 17.1038Z"
                                                stroke="white" stroke-width="1.98585" />
                                            <path d="M15.0005 11.0407C13.8959 11.0407 13.0005 10.1359 13.0005 9.01971"
                                                stroke="white" stroke-width="1.98585" stroke-linecap="round" />
                                            <path
                                                d="M5.00049 20.6406C4.53599 20.6406 4.30374 20.6406 4.1094 20.6095C3.03967 20.4383 2.2007 19.5905 2.03127 18.5095C2.00049 18.3132 2.00049 18.0785 2.00049 17.6091V8.51446C2.00049 8.04508 2.00049 7.81039 2.03127 7.61401C2.2007 6.53303 3.03967 5.68524 4.1094 5.51403C4.30374 5.48293 4.53599 5.48293 5.00049 5.48293"
                                                stroke="white" stroke-width="1.98585" />
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-5 items-end">
                        <div className="mb-2 relative col-span-12 md:col-span-12">
                            <label htmlFor="title" className="text-base text-[#D1CAD5] mb-2 block">
                                Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                className={`w-full rounded-md px-3 h-[3rem] text-sm border-1 bg-[#2E2E2E] ${touched.title && errors.title
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Event title"
                                {...getFieldProps('title')}
                            />

                            {touched.title && errors.title && (
                                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                            )}
                        </div>
                        <div className="mb-2 relative col-span-12 md:col-span-12">
                            <label htmlFor="title" className="text-base text-[#D1CAD5] mb-2 block">
                                Button Link
                            </label>

                            <input
                                id="third_party_url"
                                type="url"
                                className={`w-full rounded-md px-3 h-[3rem] text-sm border-1 bg-[#2E2E2E] ${touched.third_party_url && errors.third_party_url
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Button Link"
                                {...getFieldProps('third_party_url')}
                            />

                            {touched.third_party_url && errors.third_party_url && (
                                <p className="text-red-500 text-sm mt-1">{errors.third_party_url}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 items-end">
                        <div className="mb-2 relative">
                            <label htmlFor="venue" className="text-base text-[#D1CAD5] mb-2 block">
                                Venue
                            </label>

                            <input
                                id="venue"
                                type="text"
                                className={`w-full rounded-md px-3 h-[3rem] text-sm border-1 bg-[#2E2E2E] ${touched.venue && errors.venue
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Event venue"
                                {...getFieldProps('venue')}
                            />

                            {touched.venue && errors.venue && (
                                <p className="text-red-500 text-sm mt-1">{errors.venue}</p>
                            )}
                        </div>
                        <div className="mb-2 relative">
                            {/* <label htmlFor="title" className="text-base text-[#D1CAD5] mb-2 block">
                                Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                className={`w-full rounded-md px-3 h-[3rem] text-sm border-1 bg-[#2E2E2E] ${touched.title && errors.title
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Song title"
                                {...getFieldProps('title')}
                            />

                            {touched.title && errors.title && (
                                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                            )} */}
                            {/* <DatePicker
                                hideTimeZone
                                showMonthAndYearPickers
                                defaultValue={now(getLocalTimeZone())}
                                label="Event Date"
                                variant="bordered"
                                labelPlacement="outside"
                            /> */}
                            <DatePicker
                                hideTimeZone
                                showMonthAndYearPickers
                                label="Event Date"
                                labelPlacement="outside"
                                variant='bordered'
                                value={values.date}
                                onChange={(val) => setFieldValue("date", val)}
                                classNames={{
                                    // wrapper (outer container)
                                    base: "w-full p-0",

                                    // input field styling
                                    inputWrapper: `w-full rounded-md px-3 !h-[3rem] text-sm border 
                   bg-[#2E2E2E] text-white
                   focus-within:border-[#6E56CF] 
                   data-[hover=true]:border-[#6E56CF]
                   ${touched.date && errors.date ? "border-red-500" : "border-[rgba(255,255,255,0.15)]"}`,

                                    // actual input text
                                    input: "text-sm text-white",

                                    // label
                                    label: "text-base text-[#D1CAD5] mb-2 block",
                                }}
                            />
                            {/* <DatePicker
                                hideTimeZone
                                showMonthAndYearPickers
                                defaultValue={now(getLocalTimeZone())}
                                name="date"
                                value={values.date}
                                label="Event Date"
                                labelPlacement="outside"
                                variant='bordered'
                                onChange={(val) => {
                                    // Formik expects a "real" Date or something it can handle
                                    setFieldValue("date", val);
                                }}
                                classNames={{
                                    base: "w-full p-0",
                                    inputWrapper: `w-full rounded-md px-3 !h-[3rem] text-sm border 
                   bg-[#2E2E2E] text-white
                   focus-within:border-[#6E56CF] 
                   data-[hover=true]:border-[#6E56CF]
                   ${touched.date && errors.date ? "border-red-500" : "border-[rgba(255,255,255,0.15)]"}`,
                                    input: "text-sm text-white",
                                    label: "text-base text-[#D1CAD5] mb-2 block",
                                }}
                            /> */}
                            {/* {touched.date && errors.date && (
                                <div className="text-sm text-red-500 mt-1">{errors.date}</div>
                            )} */}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 items-end">
                        <div className="mb-2 relative">
                            <label htmlFor="state" className="text-base text-[#D1CAD5] mb-2 block">
                                State
                            </label>

                            <input
                                id="state"
                                type="text"
                                className={`w-full rounded-md px-3 h-[3rem] text-sm border-1 bg-[#2E2E2E] ${touched.state && errors.state
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Song title"
                                {...getFieldProps('state')}
                            />

                            {touched.state && errors.state && (
                                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                            )}
                        </div>
                        <div className="mb-2 relative">
                            <label htmlFor="city" className="text-base text-[#D1CAD5] mb-2 block">
                                City
                            </label>

                            <input
                                id="city"
                                type="text"
                                className={`w-full rounded-md px-3 h-[3rem] text-sm border-1 bg-[#2E2E2E] ${touched.city && errors.city
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Song city"
                                {...getFieldProps('city')}
                            />

                            {touched.city && errors.city && (
                                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-5 items-end">
                        <div className="mb-2 relative col-span-12 md:col-span-12">
                            <label htmlFor="description" className="text-base text-[#D1CAD5] mb-2 block">
                                Description
                            </label>

                            <textarea
                                id="description"
                                rows={4}
                                className={`w-full rounded-md px-3 py-2 text-sm border bg-[#2E2E2E] resize-none ${touched.description && errors.description
                                    ? 'border-red-500'
                                    : 'border-[rgba(255,255,255,0.15)]'
                                    }`}
                                placeholder="Event description"
                                {...getFieldProps('description')}
                            />

                            {touched.description && errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-auto gap-4 mt-10 justify-center">
                        <button
                            type='submit'
                            className="w-auto h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center rounded-full px-20 text-black text-sm cursor-pointer" disabled={isSubmitting}>
                            {/* {isSubmitting ? <Loader /> : 'Create Event'} */}
                            {isSubmitting ? <Loader /> : eventId ? 'Update Event' : 'Create Event'}
                        </button>
                    </div>
                </form >
            </div >
        </>
    )
}

export default CreateEventForm
