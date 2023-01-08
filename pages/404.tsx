import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  const youtubeLink = 'https://youtu.be/1yyRvyNQ5rQ?t=454';
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4 text-black bg-white'>
      <div className='text-3xl font-bold'>You got yourself a 404!</div>
      <div className='text-center text-gray-400 '>
        This page probably does not exist yet.
      </div>
      <div className='flex flex-row space-x-1'>
        <p className='text-gray-400'>What is a 404 error?</p>
        <Link
          href={'https://youtu.be/1yyRvyNQ5rQ?t=456'}
          target='_blank'
          className='underline'
        >
          Click here!
        </Link>
      </div>
      <Link href={'/'}>
        <button className='p-2 px-6 bg-gray-100 border rounded-md'>
          Go back
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
