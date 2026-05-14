"use client";

import React, { useState } from "react";
import { FcOk } from "react-icons/fc";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { CgArrowRight } from "react-icons/cg";
import { toast } from "react-toastify";
import { authClient } from "@/app/lib/auth-client";

const InputRightForm = ({ destination }) => {
  const {
    _id,
    price,
    imageUrl,
    departureDate,
    description,
    country,
    destinationName,
    duration,
  } = destination;

  const { data: session } = authClient.useSession();
  const userData = session?.user;
  const [bookingDepartureDate, setBookingDepartureDate] = useState(null);

  //   console.log(destination);
  const handleBooking = async () => {
    if (bookingDepartureDate == null) {
      alert("Departure Date is empty");
      return;
    }
    const bookingData = {
      userId: userData?.id,
      userName: userData?.name,
      userImage: userData?.image,
      userEmail: userData?.email,
      destinationId: _id,
      destinationName,
      price,
      country,
      imageUrl,
      description,
      duration,
      departureDate: new Date(bookingDepartureDate),
    };

    // console.log(bookingData);

    const res = await fetch(
      "https://wanderlust-server-theta.vercel.app/booking",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      },
    );
    const data = await res.json();

    if (data.insertedId) {
      toast.success("Successfully Booking");
    }
  };

  return (
    <div className="">
      <h3 className="text-gray-400">Starting from</h3>
      <h1 className="text-3xl font-bold">${price}</h1>
      <p className="text-gray-400 text-lg">per person</p>
      {/* input date */}
      <div className="col-span-1 py-3 space-y-1">
        <div className="">
          <TextField
            onChange={setBookingDepartureDate}
            name="departureDate"
            type="date"
            isRequired
          >
            <Label>Departure Date</Label>
            <Input className={"rounded-none"} type="date" />
            <FieldError />
          </TextField>
        </div>
        <hr className="w-full my-3.5" />
        <Button
          onClick={handleBooking}
          className={"w-full rounded-none bg-cyan-400 text-white"}
        >
          Book Now <CgArrowRight />
        </Button>
      </div>

      <div className="space-y-2">
        <p className="flex items-center gap-1.5">
          <FcOk /> Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="flex items-center gap-1.5">
          <FcOk /> Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="flex items-center gap-1.5">
          <FcOk /> Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default InputRightForm;
