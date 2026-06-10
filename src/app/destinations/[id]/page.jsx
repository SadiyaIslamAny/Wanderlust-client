import BookingCard from '@/components/BookingCard';
import { DeleteDialog } from '@/components/DeleteDialog';
import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)

    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json()
    console.log(destination)
    const { imageUrl, price, destinationName, duration, country, description } = destination;
    return (
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-end items-center gap-4 mt-5 mb-3'>
              <EditModal destination= {destination}/>
              <DeleteDialog destination={destination}/>
          </div>
            
            <Image
                src={imageUrl}
                alt={destinationName}
                height={500}
                width={800}
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

          <BookingCard destination={destination}/>
           </div>
        </div>
    );
};

export default DestinationDetailsPage;



