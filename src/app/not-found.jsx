import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[50vh] flex items-center justify-center flex-col gap-3'>
            <h1>404 Page not Found</h1>
            <p>Go Back</p>
            <Link href={'/'}><Button variant='outline' className={'rounded-lg'}>Go Home</Button></Link>
        </div>
    );
};

export default NotFoundPage;