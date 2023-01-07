import React, { useState } from 'react';
import { FaGripLines, FaDiscord, FaRedditAlien } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <div className='flex flex-row justify-between p-4 px-5 border'>
          <div className='flex items-center space-x-3'>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className='p-2 border rounded-md'
            >
              <FaGripLines />
            </button>
            <span className='text-lg font-bold'>Drew</span>
          </div>
          <div className='flex items-center space-x-3'>
            <button className='p-2 border rounded-md'>
              <FaRedditAlien />
            </button>
            <button className='p-2 border rounded-md'>
              <FaDiscord />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE HIDDEN MENU */}
      {showMenu && (
        <div className='container mx-auto overflow-auto'>
          <div className='absolute top-0 left-0 z-10 w-full bg-white '>
            <div className='flex flex-row justify-between p-4 px-5 border'>
              <div className='flex items-center space-x-3'>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className='p-2 border rounded-md'
                >
                  <CgClose />
                </button>
                <span className='text-lg font-bold'>Drew</span>
              </div>
            </div>
            <div className='flex flex-col h-screen'>
              <div className='flex flex-row justify-center w-full p-4 space-x-4 border-b'>
                <a className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md'>
                  <FaRedditAlien />
                  <span>Reddit</span>
                </a>
                <a className='flex flex-row items-center p-2 px-8 space-x-2 text-sm font-bold bg-gray-100 border rounded-md'>
                  <FaDiscord />
                  <span>Discord</span>
                </a>
              </div>
              <div className='p-3 border-b'>
                <ul className='text-sm font-bold'>
                  <li className='p-2 bg-gray-100 border rounded-md'>Links</li>
                  <li className='p-2'>Contacts</li>
                  <li className='p-2'>About</li>
                  <li className='p-2'>Contribute</li>
                  <li className='p-2'>Changelog</li>
                </ul>
              </div>
              <div className='p-3 pb-20 border-b'>
                <ul className='text-sm font-bold'>
                  <li className='p-2'>Services</li>
                  <li className='p-2'>Courses</li>
                  <li className='p-2'>Financial</li>
                  <li className='p-2'>Social</li>
                  <li className='p-2'>Housing</li>
                  <li className='p-2'>Resources</li>
                  <li className='p-2'>Miscellaneous</li>
                  <li className='p-2'>Programs</li>
                </ul>
              </div>
            </div>
            <footer className='fixed bottom-0 left-0 w-full p-4 bg-blue-500'>
              footer
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
