import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiCalendar, FiCompass, FiMapPin } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";

const DestinationCard = ({ destination }) => {
    const {_id, price, imageUrl,departureDate, description, country, destinationName,duration } = destination;
    console.log(destination);
  return (
    <div className=" flex flex-col items-start gap-7 hover:shadow">
      <div className="relative w-full ">
        <Image
          src={imageUrl}
          alt={country}
          width={300}
          height={300}
          className="w-full object-center h-80 object-cover"
        />
        <Chip className="absolute top-4 right-4" color="success"><FiCompass/> Conformed</Chip>
      </div>
      <div className="w-full space-y-2 px-4">
        <h1 className="flex items-center gap-1 text-gray-500 text-lg"><FiMapPin /> {country}</h1>
        <div className="flex justify-between gap-3 items-center text-xl italic">
          <h2 className="">{destinationName}</h2>
          <p>${price}<span className="text-xs text-gray-500">/Person</span></p>
        </div>
        <p className="flex items-center text-gray-500 text-lg"><FaCalendarAlt /> {duration}</p>
        <p></p>
        <Link href={`/destination/${_id}`}><Button className={'flex items-center gap-1 text-cyan-400 border-b border-cyan-400 border-none mb-2'} variant="ghost">BOOK NOW <IoIosTrendingUp /></Button></Link>
      </div>
    </div>
  );
};

export default DestinationCard;
