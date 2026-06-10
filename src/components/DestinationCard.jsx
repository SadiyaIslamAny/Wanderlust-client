import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({ destination }) => {
    const { imageUrl, price, destinationName, duration, country } = destination;
    return (
        <div className='border'>
            <Image
                src={imageUrl}
                alt={destinationName}
                height={400}
                width={400}
            />
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
                    <div>
                        <h3 className='text-2xl font-bold'>$ {price}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DestinationCard;