import Sidebar from '../components/sidebar';
import Link from 'next/link';

import FacebookLinks from '../constants/facebook-pages.json';

import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const FacebookContent = () => {
  return (
    <div className='flex flex-row dark:bg-[#010101] dark:text-gray-300'>
      <Sidebar />
      <div className='flex flex-col items-center justify-center w-full md:ml-80'>
        <div className='container flex flex-col w-full p-4 px-5 pb-10 space-y-10 lg:px-20 xl:px-36'>
          {FacebookLinks.map((link) => {
            return (
              <section key={link.category}>
                <div className='flex flex-col space-y-3'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-bold'>{link.category}</h3>
                  </div>
                  <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                    {link.pages.map((page) => {
                      return (
                        <Link
                          key={page.name}
                          href={page.link}
                          target='_blank'
                          className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                        >
                          <FaExternalLinkSquareAlt />
                          <span>{page.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
        {/* Footer Section */}
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
      </div>
    </div>
  );
};

export default FacebookContent;
