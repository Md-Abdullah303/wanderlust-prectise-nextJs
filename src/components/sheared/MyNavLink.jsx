'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = ({href, children}) => {
    const path = usePathname()
    // console.log(path);
    const isActive = path === href;
    return (
        <Link href={href}
        className={`${isActive && 'text-cyan-400 border-b border-cyan-500'}`}
        >{children}</Link>
    );
};

export default MyNavLink;