'use client'
import { Button } from '@heroui/react';
import React from 'react';
import { CgArrowRight } from 'react-icons/cg';
import { toast } from 'react-toastify';

const BookingButton = () => {
    return (
        <Button onClick={()=> toast.success("Successfully Booking")} className={'w-full rounded-none bg-cyan-400 text-white'}>Book Now <CgArrowRight /></Button>
    );
};

export default BookingButton;