import React, { useState } from 'react';
import { FaGripLines, FaDiscord, FaRedditAlien } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { MdDarkMode } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

import Link from 'next/link';

const Header = ({ handleShowContent }: { handleShowContent: Function }) => {
  const [showMenu, setShowMenu] = useState(false);

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
        <header className='container mx-auto overflow-y-hidden bg-white'>
          <div className='w-full overflow-hidden bg-white '>
            <div className='flex flex-row justify-between p-4 px-5 border-b'>
              <div className='flex items-center space-x-3'>
                <button
                  onClick={() => {
                    handleShowContent(showMenu);
                    setShowMenu(!showMenu);
                  }}
                  className='p-2 border rounded-md'
                >
                  <CgClose />
                </button>
                <span className='text-lg font-bold'>Drew</span>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-center w-full p-4 space-x-4 border-b'>
                <Link
                  target={'_blank'}
                  href={'https://www.reddit.com/r/carsu'}
                  className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md'
                >
                  <FaRedditAlien />
                  <span>Reddit</span>
                </Link>
                <Link
                  target={'_blank'}
                  href={'https://discord.gg/gPc3myEGZV'}
                  className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md'
                >
                  <FaDiscord />
                  <span>Discord</span>
                </Link>
              </div>
              <div className='p-3'>
                <ul className='text-sm font-bold'>
                  <li className='p-2 bg-gray-100 border rounded-md'>
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
            <footer className='fixed bottom-0 left-0 z-10 w-full bg-white border-t'>
              <div className='flex flex-row items-center justify-between p-2'>
                <button className='flex flex-row items-center p-2 space-x-4 bg-gray-100 border rounded-md'>
                  <MdDarkMode />
                  <span>Dark Mode</span>
                </button>
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
