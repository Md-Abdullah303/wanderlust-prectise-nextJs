import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/Wanderlast.png'
import { FaRegUser } from 'react-icons/fa';
import MyNavLink from './MyNavLink';

const Navber = () => {
    return (
        <div>
            <nav className='flex items-center justify-between gap-8 px-15 py-3'>
                <ul className='flex items-center gap-5  text-lg'>
                    <li><MyNavLink href={'/'}>Home</MyNavLink></li>
                    <li><MyNavLink href={'/destinations'}>Destinations</MyNavLink></li>
                    <li><MyNavLink href={'/my-booking'}>My Booking</MyNavLink></li>
                    <li><MyNavLink href={'/admin'}>Admin</MyNavLink></li>
                </ul>
                <div className="">
                    <Image
                    src={logo}
                    alt='logo'
                    />
                </div>
                <ul className='flex items-center gap-4 text-lg'>
                    <li><Link className='flex items-center gap-1.5' href={'/profile'}><FaRegUser /> Profile</Link></li>
                    <li><Link href={'/login'}>Login</Link></li>
                    <li><Link href={'/singUp'}>Sing Up</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;