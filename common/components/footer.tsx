import React from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaRegHeart,
  FaPhone,
  FaDiscord,
  FaReddit
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='p-4 px-5 border-t'>
      <ul className='flex flex-col space-y-3 text-sm font-bold text-gray-500'>
        <li>
          <Link
            href={'https://github.com/kentezrabetita'}
            className='flex items-center space-x-3'
            target='_blank'
          >
            <FaGithub />
            <span>Github</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/contribute'}
            className='flex items-center space-x-3'
            target='_blank'
          >
            <FaRegHeart />
            <span>Contribute</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/contacts'}
            className='flex items-center space-x-3'
            target='_blank'
          >
            <FaPhone />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link
            href={'https://discord.gg/gPc3myEGZV'}
            className='flex items-center space-x-3'
            target='_blank'
          >
            <FaDiscord />
            <span>Discord</span>
          </Link>
        </li>
        <li>
          <Link
            href={'https://www.reddit.com/r/carsu'}
            className='flex items-center space-x-3'
            target='_blank'
          >
            <FaReddit />
            <span>Reddit</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
