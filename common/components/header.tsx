import React, { useState, useEffect } from 'react';
import { FaGripLines, FaDiscord, FaRedditAlien } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { useTheme } from 'next-themes';

import Link from 'next/link';

const Header = ({ handleShowContent }: { handleShowContent: Function }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    <button className='flex flex-row items-center p-1 px-2 space-x-4 bg-gray-100 border rounded-md dark:border-gray-900 dark:text-gray-400 dark:bg-gray-900'>
      <MdDarkMode />
      <span>Dark Mode</span>
    </button>;

    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')}
          className='flex flex-row items-center p-2 space-x-4 bg-gray-100 border rounded-md dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400'
        >
          <MdLightMode />
          <span>Light Mode</span>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme('dark')}
          className='flex flex-row items-center p-2 space-x-4 bg-gray-100 border rounded-md dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400'
        >
          <MdDarkMode />
          <span>Dark Mode</span>
        </button>
      );
    }
  };

  return (
    <>
      <header
        className={` ${
          !showMenu ? 'sticky' : 'hidden'
        } top-0 z-50 flex flex-row justify-between dark:border-gray-800 p-4 px-5 dark:bg-[#010101] dark:text-gray-500 bg-white border-b md:hidden`}
      >
        <div className='flex items-center space-x-3'>
          <button
            onClick={() => {
              handleShowContent(showMenu);
              setShowMenu(!showMenu);
            }}
            className='p-2 border rounded-md dark:border-gray-800'
          >
            <FaGripLines />
          </button>
          <span className='text-lg font-bold dark:text-white'>Drew</span>
        </div>
        <div className='flex items-center space-x-3'>
          <button className='p-2 border rounded-md dark:border-gray-800'>
            <FaRedditAlien />
          </button>
          <button className='p-2 border rounded-md dark:border-gray-800'>
            <FaDiscord />
          </button>
        </div>
      </header>

      {/* MOBILE HIDDEN MENU */}
      {showMenu && (
        <header className='container mx-auto overflow-y-hidden bg-white h-screen dark:bg-[#010101]'>
          <div className='w-full overflow-hidden bg-white '>
            <div className='flex flex-row justify-between p-4 px-5 dark:border-gray-800 dark:bg-[#010101] dark:text-gray-500 border-b'>
              <div className='flex items-center space-x-3'>
                <button
                  onClick={() => {
                    handleShowContent(showMenu);
                    setShowMenu(!showMenu);
                  }}
                  className='p-2 border rounded-md dark:border-gray-800'
                >
                  <CgClose />
                </button>
                <span className='text-lg font-bold dark:text-white'>Drew</span>
              </div>
            </div>
            <div className='flex flex-col dark:border-gray-800 dark:bg-[#010101] dark:text-gray-500'>
              <div className='flex flex-row justify-center w-full p-4 space-x-4 border-b dark:border-gray-800'>
                <Link
                  target={'_blank'}
                  href={'https://www.reddit.com/r/carsu'}
                  className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-500'
                >
                  <FaRedditAlien />
                  <span>Reddit</span>
                </Link>
                <Link
                  target={'_blank'}
                  href={'https://discord.gg/gPc3myEGZV'}
                  className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-500'
                >
                  <FaDiscord />
                  <span>Discord</span>
                </Link>
              </div>
              <div className='p-3'>
                <ul className='text-sm font-bold'>
                  <li className='p-2 bg-gray-100 border rounded-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-500'>
                    <Link href={'/'}>Links</Link>
                  </li>
                  <li className='p-2'>
                    <Link href={'/contacts'}>Contacts</Link>
                  </li>
                  <li className='p-2'>
                    <Link href={'/about'}>About</Link>
                  </li>
                </ul>
              </div>
            </div>
            <footer className='fixed bottom-0 left-0 z-10 w-full dark:border-gray-800 dark:bg-[#010101] dark:text-gray-500 border-t'>
              <div className='flex flex-row items-center justify-between p-2'>
                {renderThemeChanger()}
                <a className='p-2'>
                  <IoMdSettings />
                </a>
              </div>
            </footer>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
