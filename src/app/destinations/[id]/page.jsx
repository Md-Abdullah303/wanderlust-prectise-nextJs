import { DeleteModalPage } from "@/components/DestinationDetailsPage/DeleteModal";
import { EditModal } from "@/components/DestinationDetailsPage/EditModal";
import InputRightForm from "@/components/forms/InputRightForm";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowRight } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { MdDeleteForever, MdOutlineStar } from "react-icons/md";
import { toast } from "react-toastify";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://wanderlust-server-theta.vercel.app/destination/${id}`,
  );
  const destination = await res.json();
  // console.log(destination);

  const {
    _id,
    imageUrl,
    price,
    duration,
    destinationName,
    description,
    departureDate,
    country,
    category,
  } = destination;

  //   console.log(destination);
  // console.log(id);
  return (
    <div className="lg:max-w-7xl w-[90%] pt-10 px-4 md:px-8 pb-20 mx-auto">
      {/* top of destinationDetails */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Link className="flex items-center gap-1.5" href={"/destinations"}>
          <FaArrowLeft /> Back to Destinations
        </Link>
        <div className="flex items-center gap-4">
          <EditModal destination={destination} />
          <DeleteModalPage destination={destination} />
        </div>
      </div>
      <div className="mt-10">
        {/* destinationDetails img */}
        <div className="w-full relative border">
          <Image
            src={imageUrl}
            alt="img"
            width={2000}
            height={2000}
            className="w-full h-130 object-center object-cover"
          />
        </div>
        <hr className="w-full my-7" />
        {/* destinationDetails info */}
        <div className="grid grid-cols-3 items-start gap-7">
          {/* info left */}
          <div className="space-y-5 col-span-3 md:col-span-2">
            <div className="space-y-3">
              <h2 className="text-xl text-gray-600 flex items-center gap-1.5">
                <FaMapMarkerAlt /> {country}
              </h2>
              <h1 className="text-3xl">{destinationName}</h1>
              <p className="text-lg text-gray-400 flex items-center gap-2">
                <span className="font-bold text-black flex items-center gap-1">
                  <MdOutlineStar /> 4.9
                </span>{" "}
                <span>(234 reviews)</span>{" "}
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt /> {duration}
                </span>
              </p>
            </div>
            <div className="">
              <h1 className="text-2xl">Overview</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                corporis dignissimos velit non ea vitae consectetur enim, dolor,
                ab, id ex hic tempora! Hic animi cupiditate, deleniti et
                distinctio ratione!
              </p>
            </div>
            <div className="">
              <h1 className="text-2xl">Highlights</h1>
              <p className="text-gray-400">
                {description}, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolorem corporis dignissimos velit non ea
                vitae consectetur enim, dolor, ab, id ex hic tempora! Hic animi
                cupiditate, deleniti et distinctio ratione!
              </p>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <p className="flex items-center gap-1.5">
                  <FcOk /> Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="flex items-center gap-1.5">
                  <FcOk /> Lorem ipsum dolor sit amet consectetur.
                </p>
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
          </div>
          {/* info right */}
          <div className="col-span-3 border-t sm:border-none md:col-span-1">
            <InputRightForm destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
