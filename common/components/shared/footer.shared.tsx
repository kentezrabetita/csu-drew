import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t dark:border-gray-900'>
      <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-center p-3 space-x-4 text-gray-500'>
          <p className='flex flex-row items-center p-1 px-2 space-x-4 bg-gray-100 rounded-md dark:text-gray-400 dark:border-gray-900 dark:bg-gray-900'>
            Made with 💙 by
            <Link
              href={'https://kentezrabetita.vercel.app'}
              target='_blank'
              className='font-semibold dark:text-blue-500'
            >
              &nbsp;Kent Ezra Betita
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
