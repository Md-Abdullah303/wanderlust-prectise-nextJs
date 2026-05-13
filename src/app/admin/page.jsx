import React from "react";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { Button } from "@heroui/react";
import { FaDollarSign, FaGlobeAmericas, FaPlane } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { UpdateProfileModal } from "@/components/DestinationDetailsPage/UpdateProfileModal";

const AdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session?.user;

  const { email, name, image } = userData;
  console.log(userData);

  const res = await fetch(`http://localhost:5000/booking/${userData.id}`);
  const bookingDatas = await res.json();

  return (
    <div className="lg:max-w-7xl container pt-10 pb-20 mx-auto">
      <div className="space-y-2.5">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-400">
          Manage your account settings and travel preferences.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10 ">
        <div className="col-span-1 border p-3 flex flex-col items-center gap-3">
          <div className="w-40 rounded-full ">
            <Image
              src={image}
              alt={name}
              width={1000}
              height={800}
              className="w-full rounded-full border object-cover object-center h-40"
            />
          </div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="flex items-center gap-1.5 text-gray-400">
            <FiMapPin /> San Francisco, CA
          </p>
          <hr className="w-full " />
          <div className="w-full">
            <p className="flex gap-4 justify-between">
              <span className="text-gray-400">Member since</span>{" "}
              <span className="font-bold">{new Date(userData.createdAt).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
              })}</span>
            </p>
            <p className="flex gap-4 justify-between">
              <span className="text-gray-400">Nationality</span>{" "}
              <span className="font-bold">Bangladesh</span>
            </p>
          </div>

          <UpdateProfileModal />
        </div>
        <div className="col-span-2"> 
          <h1 className="text-2xl font-bold mb-5">Travel Stats</h1>
          <div className="grid grid-cols-2 gap-5">
            {/* stats card */}
            <div className="border rounded-lg p-3 flex items-center justify-between gap-3.5">
              <div className="">
                <h1 className="text-xl">Total Bookings</h1>
                <p className="text-green-500 text-3xl font-bold">{bookingDatas.length}</p>
              </div>
              <div className=" bg-green-100 w-10 h-10 rounded-full flex items-center justify-center">
                <FaPlane />
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center justify-between gap-3.5">
              <div className="">
                <h1 className="text-xl">Countrise Visited</h1>
                <p className="text-3xl text-blue-500 font-bold">18</p>
              </div>
              <div className=" bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
               <FaGlobeAmericas />
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center justify-between gap-3.5">
              <div className="">
                <h1 className="text-xl">Upcomming Trips</h1>
                <p className="text-3xl text-amber-200 font-bold">2</p>
              </div>
              <div className=" bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center">
                <AiOutlineStock />
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center justify-between gap-3.5">
              <div className="">
                <h1 className="text-xl">Total Spent</h1>
                <p className="text-3xl text-purple-500 font-bold">$15,750</p>
              </div>
              <div className=" bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
                <FaDollarSign />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
