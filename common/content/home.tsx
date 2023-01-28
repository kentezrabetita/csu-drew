import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/sidebar';

import {
  MdSchool,
  MdGrade,
  MdOutlineHowToVote,
  MdOutlineAccountBalanceWallet
} from 'react-icons/md';
import { IoBookSharp, IoLibrary } from 'react-icons/io5';
import { SlDocs } from 'react-icons/sl';
import { CgTranscript } from 'react-icons/cg';
import { CgFileDocument } from 'react-icons/cg';
import { BsCalendarPlus, BsCalendarRange, BsHouseDoor } from 'react-icons/bs';
import { RiSurveyLine } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { SiGooglescholar } from 'react-icons/si';
import {
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineLibrary
} from 'react-icons/hi';
import { GrFacebook } from 'react-icons/gr';

import Links from '../constants/home-content.json';

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
                        <Link
                          key={link.name}
                          href={link.url}
                          target='_blank'
                          className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                        >
                          <span>{link.name}</span>
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

export default HomeContent;
