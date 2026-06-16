import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const destinations = await res.json();
    console.log(destinations)
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-xl font-bold mb-4'>All Destinations</h1>
            <div className='grid grid-cols-4 gap-2'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination = {destination}>
                        
                    </DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;