"use client";
import React, { useEffect, useState } from "react";
import Swiper from "swiper";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Button, Chip } from "@heroui/react";
import { FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import Link from "next/link";
import { FiCompass, FiMapPin } from "react-icons/fi";
import Image from "next/image";

const AddPagination = () => {
  const [destination, setDestination] = useState([]);

  // FETCH
  useEffect(() => {
    const fetchDestination = async () => {
      const res = await fetch("http://localhost:5000/destination");
      const data = await res.json();
      setDestination(data);
    };

    fetchDestination();
  }, []);

  // SWIPER INIT
  useEffect(() => {
    if (destination.length === 0) return;



    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination, Autoplay],
    
      direction: "horizontal",
      loop: true,

      

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiper.autoplay.start()

    return () => swiper.destroy(true, true);
  }, [destination]);

  return (
    <div className="w-[70%] md:container mx-auto py-10 space-y-5">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-7">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Featured Destinations</h1>
          <p className="text-lg text-gray-400">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link href={'/destinations'}><Button
          className="rounded-none text-cyan-400 border-cyan-400"
          variant="outline"
        >
          All Destinations <FaLongArrowAltRight />
        </Button></Link>
      </div>

      {/* ARROWS (OUTSIDE) */}
      {/* <div className="flex justify-between">
        <div className="swiper-button-prev bg-black text-white px-3 py-2">
          Prev
        </div>

        <div className="swiper-button-next bg-black text-white px-3 py-2">
          Next
        </div>
      </div> */}

      {/* SWIPER */}
      <div className="swiper w-full  relative">
        {/* ADDED: arrows inside swiper */}
        <div className="swiper-button-prev !text-black !left-3 !z-10"></div>
        <div className="swiper-button-next !text-black !right-3 !z-10"></div>

        <div className="swiper-wrapper">
          {destination.map((desti) => (
            <div
              key={desti._id}
              className="swiper-slide h-full flex items-center justify-center  border-red-400"
            >
              <div className="border p-5 w-[80%] mx-auto space-y-7">
                <div className="relative w-full ">
                  <Image
                    src={desti.imageUrl}
                    alt={desti.country}
                    width={700}
                    height={400}
                    className="w-full object-center h-140 object-cover"
                  />
                  <Chip className="absolute top-4 right-4" color="success">
                    <FiCompass /> Conformed
                  </Chip>
                </div>
                <div className="w-full space-y-2 px-4">
                  <h1 className="flex items-center gap-1 text-gray-500 text-lg">
                    <FiMapPin /> {desti.country}
                  </h1>
                  <div className="flex justify-between gap-3 items-center text-xl italic">
                    <h2 className="">{desti.destinationName}</h2>
                    <p>
                      ${desti.price}
                      <span className="text-xs text-gray-500">/Person</span>
                    </p>
                  </div>
                  <p className="flex items-center text-gray-500 text-lg">
                    <FaCalendarAlt /> {desti.duration}
                  </p>
                  <p></p>
                  <Link href={`/destinations/${desti._id}`}>
                    <Button
                      className={
                        "flex items-center gap-1 text-cyan-400 border-b border-cyan-400 border-none mb-2"
                      }
                      variant="ghost"
                    >
                      BOOK NOW <IoIosTrendingUp />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default AddPagination;
