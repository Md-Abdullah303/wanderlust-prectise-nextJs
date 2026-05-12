import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/Wanderlast.png";
import { FaRegUser } from "react-icons/fa";
import MyNavLink from "./MyNavLink";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { Button } from "@heroui/react";
import LogoutButton from "./LogoutButton";

const Navber = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session?.user;

  console.log(userData);

  return (
    <nav className="flex items-center justify-between gap-8 px-15 py-5 shadow-sm sticky top-0  z-50 bg-white w-full">
      <ul className="flex items-center gap-5  text-lg">
        <li>
          <MyNavLink href={"/"}>Home</MyNavLink>
        </li>
        <li>
          <MyNavLink href={"/destinations"}>Destinations</MyNavLink>
        </li>
        <li>
          <MyNavLink href={"/my-booking"}>My Booking</MyNavLink>
        </li>
        <li>
          <MyNavLink href={"/admin"}>Admin</MyNavLink>
        </li>
        <li>
          <MyNavLink href={"/add-destination"}>Add Destination</MyNavLink>
        </li>
      </ul>
      <div className="">
        <Image src={logo} alt="logo" />
      </div>
      <ul className="flex items-center gap-4 text-lg">
        {userData ? (
          <>
          <Image
          className="h-10 w-10 object-center object-cover rounded-full"
          src={userData?.image}
          alt="user logo"
          width={40}
          height={40}
          />
          <LogoutButton/>
          </>
        ) : (
          <>
            <li>
              <Link className="flex items-center gap-1.5" href={"/profile"}>
                <FaRegUser /> Profile
              </Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/singUp"}>Sing Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navber;
