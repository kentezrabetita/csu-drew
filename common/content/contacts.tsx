import React from 'react';
import Sidebar from '../components/sidebar';

const ContactsContent = () => {
  return (
    <div className='flex flex-row dark:bg-[#010101] dark:text-gray-300'>
      <Sidebar />
      <div className='flex flex-col w-full p-2 md:ml-80'>
        <h1>This is the Contacts page.</h1>
      </div>
    </div>
  );
};

export default ContactsContent;
