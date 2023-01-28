import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import Icon from '../components/icon';
import Links from '../data/home-content.json';
import LinkComponent from '../components/link';

const HomeContent = () => {
  return (
    <div className='flex flex-row dark:bg-[#010101] dark:text-gray-300'>
      <Sidebar />
      <div className='flex flex-col items-center justify-center w-full md:ml-80'>
        <div className='container flex flex-col w-full p-4 px-5 pb-10 space-y-7 lg:px-20 xl:px-36'>
          {/* Links Section */}
          {Links.map((category) => {
            return (
              <section key={category.title}>
                <div className='flex flex-col space-y-3'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-bold'>{category.title}</h3>
                  </div>
                  <div className='grid grid-cols-1 gap-4 xm:grid-cols-2 lg:grid-cols-3'>
                    {category.links.map((link) => {
                      return (
                        <LinkComponent
                          key={link.name}
                          icon={link.icon}
                          title={link.name}
                          url={link.url}
                          target={link.target || ''}
                        />
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

export default HomeContent;
