import React, { useState } from 'react';
import Link from 'next/link';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

const Sidebar = () => {
  const [theme, setTheme] = useState('system');

  return (
    <aside className='hidden h-screen bg-white border-r dark:border-gray-900 dark:bg-[#010101] md:block md:fixed md:z-10 md:h-screen md:w-80'>
      <div>
        <div className='flex flex-row justify-between p-4 px-5 border-b dark:border-gray-900'>
          <div className='flex items-center space-x-3'>
            <span className='text-lg font-bold dark:text-gray-400'>Drew</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-center w-full p-4 space-x-4 border-b dark:border-gray-900'>
            <Link
              target={'_blank'}
              href={'https://www.reddit.com/r/carsu'}
              className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-900'
            >
              <FaRedditAlien />
              <span>Reddit</span>
            </Link>
            <Link
              target={'_blank'}
              href={'https://discord.gg/gPc3myEGZV'}
              className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-900'
            >
              <FaDiscord />
              <span>Discord</span>
            </Link>
          </div>
          <div className='p-3'>
            <ul className='text-sm font-bold'>
              <li className='p-2 bg-gray-100 border rounded-md dark:text-gray-400 dark:border-gray-900 dark:bg-gray-900'>
                <Link href={'/'}>Links</Link>
              </li>
              <li className='p-2 dark:text-gray-400'>
                <Link href={'/contacts'}>Contacts</Link>
              </li>
              <li className='p-2 dark:text-gray-400'>
                <Link href={'/about'}>About</Link>
              </li>
            </ul>
          </div>
          <footer className='absolute bottom-0 left-0 w-full border-t dark:border-gray-900'>
            <div className='flex flex-row items-center justify-between p-3'>
              <button className='flex flex-row items-center p-1 px-2 space-x-4 bg-gray-100 border rounded-md dark:border-gray-900 dark:text-gray-400 dark:bg-gray-900'>
                <MdDarkMode />
                <span>Dark Mode</span>
              </button>
              <a className='p-2 dark:text-gray-400'>
                <IoMdSettings />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
