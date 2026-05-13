import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BookingDelteModal } from "./BookingDeleteModal";

const BookingCard = ({ booking }) => {
  const { imageUrl, price, destinationName, destinationId, _id } = booking;
//   console.log(booking);
  return (
    <div className="hover:shadow p-2 border duration-150 flex gap-3 items-center w-full">
      <div className=" max-w-100 ">
        <Image
          src={imageUrl}
          alt="booking img"
          width={1000}
          height={800}
          className="h-70 object-cover object-center"
        />
      </div>
      <div className="flex items-end justify-between gap-5 w-full">
        <div className="space-y-3.5">
          <Chip size="lg" color="success">
            Confirmed
          </Chip>
          <h1 className="text-3xl font-bold">{destinationName}</h1>
          <p className="flex font-semibold items-center gap-1">
            <CiCalendar /> <span className="font-normal">Departure : </span>{" "}
            {new Date(booking.departureDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="flex items-center gap-1 text-gray-400 text-xs">
            <FiMapPin /> BookingId: {destinationId}
          </p>
          <h1 className="text-3xl text-cyan-400 font-semibold">
            ${price}
            <span className="text-lg text-gray-400">/person</span>
          </h1>
        </div>
        <div className=" flex items-center gap-3 ">
            <BookingDelteModal destinationName={destinationName} _id={_id}/>
            <Button className={'rounded-none'} variant="outline"><IoEyeOutline /> View</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
