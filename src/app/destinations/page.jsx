import DestinationCard from "@/components/sheared/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  // console.log(destination);

  return (
    <div className="w-[70%] md:container mx-auto py-20">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-lg text-gray-400">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
