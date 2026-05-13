import React from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaHeadphones } from 'react-icons/fa';
import { RiGuideFill } from 'react-icons/ri';

const ChoseWanderlust = () => {
    return (
        <div className='bg-[#EDFCFF]'>
            <div className="py-15 w-[70%] md:container mx-auto space-y-3.5">
            <div className="text-center space-y-4">
                <h1 className='text-5xl font-bold'>Why Choose Wanderlust</h1>
                <p className='text-lg text-gray-500'>Your trusted partner for exceptional travel experiences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
                <div className=" border space-y-3 bg-white p-7">
                    <AiOutlineSafety className='text-purple-500 text-5xl' />
                    <h1 className='text-3xl font-bold'>Safe & Secure</h1>
                    <p className='text-gray-400'>Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
                </div>
                <div className=" border space-y-3 bg-white p-7">
                    <RiGuideFill className='text-purple-500 text-5xl' />
                    
                    <h1 className='text-3xl font-bold'>Expert Guides</h1>
                    <p className='text-gray-400'>Local experts who bring destinations to life with authentic cultural insights.</p>
                </div>
                <div className=" border space-y-3 bg-white p-7">
                    <FaHeadphones className='text-purple-500 text-5xl' />
                    
                    <h1 className='text-3xl font-bold'>24/7 Support</h1>
                    <p className='text-gray-400'>Round-the-clock customer service to assist you wherever your journey takes you.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChoseWanderlust;