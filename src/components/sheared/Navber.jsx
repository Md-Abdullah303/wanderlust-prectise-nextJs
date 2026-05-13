"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/assets/Wanderlast.png";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import MyNavLink from "./MyNavLink";
import LogoutButton from "./LogoutButton";
import { authClient } from "@/app/lib/auth-client";

const Navber = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  const userData = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ================= MOBILE + TABLET TOP BAR ================= */}
      <div className="flex items-center justify-between px-4 py-4 md:px-6 lg:hidden">
        {/* MENU BUTTON (mobile + tablet) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* LOGO */}
        <Image src={logo} alt="logo" className="h-9 w-auto" />

        {/* USER */}
        <div className="flex items-center gap-2">
          {userData ? (
            <>
              <Image
                src={userData?.image}
                alt="user"
                width={35}
                height={35}
                className="rounded-full object-cover h-8 w-8"
              />
              <LogoutButton />
            </>
          ) : (
            <FaRegUser className="text-xl" />
          )}
        </div>
      </div>

      {/* ================= MOBILE + TABLET MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden border-t flex flex-col items-start py-3 px-6 bg-white">
          <MyNavLink href="/">Home</MyNavLink>
          <MyNavLink href="/destinations">Destinations</MyNavLink>
          <MyNavLink href="/my-booking">My Booking</MyNavLink>
          <MyNavLink href="/admin">Admin</MyNavLink>
          <MyNavLink href="/add-destination">Add Destination</MyNavLink>

          {!userData && (
            <>
              <Link href="/login">Login</Link>
              <Link href="/singUp">Sign Up</Link>
            </>
          )}
        </div>
      )}

      {/* ================= DESKTOP (PC ONLY) ================= */}
      <div className="hidden lg:flex items-center justify-between gap-8 px-15 py-5">
        {/* LEFT LINKS */}
        <ul className="flex items-center gap-5 text-lg">
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

        {/* LOGO */}
        <div>
          <Image src={logo} alt="logo" />
        </div>

        {/* RIGHT USER */}
        <ul className="flex items-center gap-4 text-lg">
          {userData ? (
            <>
              <Image
                className="h-10 w-10 rounded-full object-cover"
                src={userData?.image}
                alt="user logo"
                width={40}
                height={40}
              />
              <LogoutButton />
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
      </div>
    </nav>
  );
};

export default Navber;
