"use client";

import React, { useState } from "react";
import { Button, Card, DateField, Label } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);


  if (!destination) {
    return <div>Loading...</div>;
  }

  const {
    price,
    _id,
    destinationName,
    imageUrl,
    country,
  } = destination;

  const handleBooking = async () => {
  
    if (!user) {
      alert("Please login first");
      return;
    }

    
    if (!departureDate) {
      alert("Please select a departure date");
      return;
    }

    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate,
    };

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      console.log(data);

      if (data.insertedId) {
        alert("Booking successful!");
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

    return (
        <Card className='rounded-none border mt-5'>
            <p className='text-sm text-muted'>Starting from</p>
            <h2 className='text-3xl font-bold text-cyan-500'>${price}</h2>
            <p className='text-sm text-muted'>per person</p>
            <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                <Label>Departure Date</Label>

                <DateField.Group>
                    <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleBooking} className="bg-cyan-500 w-full rounded-none">Book Now<FaArrowRight /></Button>
        </Card>
    );
};

export default BookingCard;