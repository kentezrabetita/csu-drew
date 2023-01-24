import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/sidebar';

import { MdSchool, MdGrade, MdOutlineHowToVote } from 'react-icons/md';
import { IoBookSharp, IoLibrary } from 'react-icons/io5';
import { SlDocs } from 'react-icons/sl';
import { CgTranscript } from 'react-icons/cg';
import { CgFileDocument } from 'react-icons/cg';
import { BsCalendarPlus, BsCalendarRange } from 'react-icons/bs';
import { RiSurveyLine } from 'react-icons/ri';

const HomeContent = () => {
  return (
    <div className='flex flex-row dark:bg-[#010101] dark:text-gray-300'>
      <Sidebar />
      <div className='flex flex-col items-center justify-center w-full md:ml-80'>
        <div className='container flex flex-col w-full p-4 px-5 pb-10 space-y-10 lg:px-20 xl:px-36'>
          {/* Services Section */}
          <section>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Services</h3>
                {/* <h3 className='pr-2 text-sm text-gray-500'>more</h3> */}
              </div>
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <Link
                  href={
                    'https://sso.carsu.edu.ph/sso/module.php/core/loginuserpassorg.php?AuthState=_0e2b7048b06cbff8986ad5f0895a3089516863451b%3Ahttps%3A%2F%2Fsso.carsu.edu.ph%2Fsso%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmyschool.carsu.edu.ph%252Fsso%252Fmodule.php%252Fsaml%252Fsp%252Fmetadata.php%252Fdefault-sp%26cookieTime%3D1674073107%26RelayState%3Dhttps%253A%252F%252Fmyschool.carsu.edu.ph%252Findex.php%253Fq%253Dsaml_login'
                  }
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <MdSchool />
                  <span>MySchool</span>
                </Link>
                <Link
                  href={'https://masaolms.carsu.edu.ph/login/index.php'}
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <IoBookSharp />
                  <span>MyLMS</span>
                </Link>
                <Link
                  href={
                    'https://admission.carsu.edu.ph/sites/admission_portal/'
                  }
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <SlDocs />
                  <span>MyAdmissions</span>
                </Link>
                <Link
                  href={'https://csulibrary.github.io/carsulibrary/'}
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <IoLibrary />
                  <span>MyLibrary</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Account Section */}
          <section>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Account</h3>
                {/* <h3 className='pr-2 text-sm text-gray-500'>more</h3> */}
              </div>
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <Link
                  href={'https://myschool.carsu.edu.ph/index.php?q=evaluation'}
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <MdGrade />
                  <span>Grades</span>
                </Link>
                <Link
                  href={
                    'https://myschool.carsu.edu.ph/index.php?q=My_transcript'
                  }
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <CgTranscript />
                  <span>Transcript</span>
                </Link>
                <Link
                  href={
                    'https://myschool.carsu.edu.ph/index.php?q=onlineclearance'
                  }
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <CgFileDocument />
                  <span>Clearance</span>
                </Link>
                <Link
                  href={
                    'https://myschool.carsu.edu.ph/index.php?q=myappointment'
                  }
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <BsCalendarPlus />
                  <span>Appointment</span>
                </Link>
                <Link
                  href={'https://myschool.carsu.edu.ph/index.php?q=My_schedule'}
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <BsCalendarRange />
                  <span>Schedule</span>
                </Link>
                <Link
                  href={'https://myschool.carsu.edu.ph/index.php?q=mysurvey'}
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <RiSurveyLine />
                  <span>Survey</span>
                </Link>
                <Link
                  href={
                    'https://myschool.carsu.edu.ph/index.php?q=csg-election'
                  }
                  target='_blank'
                  className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  <MdOutlineHowToVote />
                  <span>Vote</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Financial Section */}
          <section>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Financial</h3>
                {/* <h3 className='pr-2 text-sm text-gray-500'>more</h3> */}
              </div>
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <Link
                  href={'https://myschool.carsu.edu.ph/index.php?q=My_balance'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  Balance
                </Link>
                <Link
                  href={'/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  Financial Aid
                </Link>
                <Link
                  href={'/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  Scholarship
                </Link>
              </div>
            </div>
          </section>

          {/* Housing Section */}
          <section>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Housing</h3>
                {/* <h3 className='pr-2 text-sm text-gray-500'>more</h3> */}
              </div>
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <Link
                  href={'/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  Dorms
                </Link>
              </div>
            </div>
          </section>

          {/* Social Section */}
          <section>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Socials</h3>
                {/* <h3 className='pr-2 text-sm text-gray-500'>more</h3> */}
              </div>
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <Link
                  href={
                    'https://www.carsu.edu.ph/?q=student-campus-org/student-campus-organization'
                  }
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  Clubs
                </Link>
                <Link
                  href={'/facebook'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  Facebook
                </Link>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Resources</h3>
                {/* <h3 className='pr-2 text-sm text-gray-500'>more</h3> */}
              </div>
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <Link
                  href={
                    'https://drive.google.com/drive/folders/1-2P2uJiziZHND_8gH5-d20uDmAiPs5gt'
                  }
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  E-books
                </Link>
                <Link
                  href={
                    'https://www.carsu.edu.ph/sites/default/files/downloadables/Student%20Handbook%20Final%20Revision.pdf'
                  }
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  Handbook
                </Link>
              </div>
            </div>
          </section>

          {/* Colleges Section */}
          <section>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Colleges</h3>
                {/* <h3 className='pr-2 text-sm text-gray-500'>more</h3> */}
              </div>
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <Link
                  href={'http://cofes.carsu.edu.ph/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  COFES
                </Link>
                <Link
                  href={'https://5d8c147883e8f.site123.me/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  CMNS
                </Link>
                <Link
                  href={'http://cegs.carsu.edu.ph/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  CEGS
                </Link>
                <Link
                  href={'https://ccis.carsu.edu.ph/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  CCIS
                </Link>
                <Link
                  href={'https://ccis.carsu.edu.ph/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  CAA
                </Link>
                <Link
                  href={'http://chass.carsu.edu.ph/'}
                  target='_blank'
                  className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                >
                  CHASS
                </Link>
              </div>
            </div>
          </section>
        </div>
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
