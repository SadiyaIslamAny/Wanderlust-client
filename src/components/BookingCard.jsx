"use client";
import { Button, Card } from '@heroui/react';
import { DateField, Label } from "@heroui/react";
import { FaArrowRight } from 'react-icons/fa';

const BookingCard = ({ destination }) => {
    const { imageUrl, price, destinationName, duration, country, description } = destination;

    return (
        <Card className='rounded-none border mt-5'>
            <p className='text-sm text-muted'>Starting from</p>
            <h2 className='text-3xl font-bold text-cyan-500'>${price}</h2>
            <p className='text-sm text-muted'>per person</p>
            <DateField className="w-[256px]" name="date">
                <Label>Departure Date</Label>

                <DateField.Group>
                    <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                </DateField.Group>
            </DateField>
            <Button className="bg-cyan-500 w-full rounded-none">Book Now<FaArrowRight /></Button>
        </Card>
    );
};

export default BookingCard;