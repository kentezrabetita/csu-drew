import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='p-4 px-5 border-t'>
      <ul className='flex flex-col space-y-3 text-sm font-bold text-gray-500'>
        <li>
          <Link href={'https://github.com/kentezrabetita'} target='_blank'>
            Github
          </Link>
        </li>
        <li>
          <Link href={'https://github.com/kentezrabetita'} target='_blank'>
            Contribute
          </Link>
        </li>
        <li>
          <Link href={'https://github.com/kentezrabetita'} target='_blank'>
            Contact
          </Link>
        </li>
        <li>
          <Link href={'https://github.com/kentezrabetita'} target='_blank'>
            Discord
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
