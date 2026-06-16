import BookingCard from '@/components/BookingCard';
import { DeleteDialog } from '@/components/DeleteDialog';
import { EditModal } from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    console.log(token)
    // console.log(id)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const destination = await res.json()
    console.log(destination)
    const { imageUrl, price, destinationName, duration, country, description } = destination;
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-end items-center gap-4 mt-5 mb-3'>
                <EditModal destination={destination} />
                <DeleteDialog destination={destination} />
            </div>

            <Image
                src={imageUrl}
                alt={destinationName}
                width={800}
                height={500}
            />
            <div className='flex justify-between'>
                <div className='p-2'>
                    <div className='flex items-center gap-1'>
                        <LuMapPin /><span>{country}</span>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div>
                                <h2 className='text-xl font-bold'>{destinationName}</h2>
                            </div>
                            <div className='flex items-center gap-1 text-gray-400'><FaRegCalendar />{duration}</div>
                        </div>

                    </div>
                    <h1 className='mt-10 text-2xl font-bold'>Overview</h1>
                    <p>{description}</p>


                </div>

                <BookingCard destination={destination} />
            </div>
        </div>
    );
};

export default DestinationDetailsPage;



