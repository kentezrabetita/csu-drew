import React from 'react';
import Sidebar from '../components/web/sidebar.web';

const AboutContent = () => {
  return (
    <div className='flex flex-row dark:bg-[#010101] dark:text-gray-300'>
      <Sidebar />
      <div className='flex flex-col w-full p-2 md:ml-80'>
        <h1>This is the About page.</h1>
      </div>
    </div>
  );
};

export default AboutContent;
