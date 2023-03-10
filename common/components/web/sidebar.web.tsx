import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { useTheme } from 'next-themes';

const Sidebar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')}
          className='flex flex-row items-center p-1 px-2 space-x-4 bg-gray-100 rounded-md dark:border-gray-900 dark:text-gray-400 dark:bg-gray-900'
        >
          <MdLightMode />
          <span>Light Mode</span>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme('dark')}
          className='flex flex-row items-center p-1 px-2 space-x-4 bg-gray-100 rounded-md dark:border-gray-900 dark:text-gray-400 dark:bg-gray-900'
        >
          <MdDarkMode />
          <span>Dark Mode</span>
        </button>
      );
    }
  };

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
              <Link href={'/'}>
                <li className='p-2 rounded-md cursor-pointer dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-900'>
                  Links
                </li>
              </Link>
              <Link href={'/contacts'}>
                <li className='p-2 rounded-md cursor-pointer dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-900'>
                  Contacts
                </li>
              </Link>
              <Link href={'/about'}>
                <li className='p-2 rounded-md cursor-pointer dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-900'>
                  About
                </li>
              </Link>
            </ul>
          </div>
          <footer className='absolute bottom-0 left-0 w-full border-t dark:border-gray-900'>
            <div className='flex flex-row items-center justify-between p-3'>
              {renderThemeChanger()}
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
