import React from 'react';
import Link from 'next/link';

const HomeContent = () => {
  return (
    <div className='container flex flex-col p-4 px-5 pb-10 space-y-10'>
      {/* Services Section */}
      <section>
        <div className='flex flex-col space-y-3'>
          <Link
            href={'/services'}
            className='flex items-center justify-between'
          >
            <h3 className='text-xl font-bold'>Services</h3>
            <h3 className='pr-2 text-sm text-gray-500'>more</h3>
          </Link>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              href={
                'https://sso.carsu.edu.ph/sso/module.php/core/loginuserpassorg.php?AuthState=_0e2b7048b06cbff8986ad5f0895a3089516863451b%3Ahttps%3A%2F%2Fsso.carsu.edu.ph%2Fsso%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmyschool.carsu.edu.ph%252Fsso%252Fmodule.php%252Fsaml%252Fsp%252Fmetadata.php%252Fdefault-sp%26cookieTime%3D1674073107%26RelayState%3Dhttps%253A%252F%252Fmyschool.carsu.edu.ph%252Findex.php%253Fq%253Dsaml_login'
              }
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              MySchool
            </Link>
            <Link
              href={'https://masaolms.carsu.edu.ph/login/index.php'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              MyLMS
            </Link>
            <Link
              href={'https://admission.carsu.edu.ph/sites/admission_portal/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              MyAdmissions
            </Link>
            <Link
              href={'https://csulibrary.github.io/carsulibrary/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              MyLibrary
            </Link>
          </div>
        </div>
      </section>

      {/* Account Section */}
      <section>
        <div className='flex flex-col space-y-3'>
          <Link href={'/courses'} className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>Account</h3>
            <h3 className='pr-2 text-sm text-gray-500'>more</h3>
          </Link>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              href={'https://myschool.carsu.edu.ph/index.php?q=evaluation'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Grades
            </Link>
            <Link
              href={'https://myschool.carsu.edu.ph/index.php?q=My_transcript'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Transcript
            </Link>
            <Link
              href={'https://myschool.carsu.edu.ph/index.php?q=onlineclearance'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Clearance
            </Link>
            <Link
              href={'https://myschool.carsu.edu.ph/index.php?q=myappointment'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Appointment
            </Link>
            <Link
              href={'https://myschool.carsu.edu.ph/index.php?q=My_schedule'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Schedule
            </Link>
            <Link
              href={'https://myschool.carsu.edu.ph/index.php?q=mysurvey'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Survey
            </Link>
            <Link
              href={'https://myschool.carsu.edu.ph/index.php?q=csg-election'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Votes
            </Link>
          </div>
        </div>
      </section>

      {/* Colleges Section */}
      <section>
        <div className='flex flex-col space-y-3'>
          <Link href={'/courses'} className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>Colleges</h3>
            <h3 className='pr-2 text-sm text-gray-500'>more</h3>
          </Link>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              href={'http://cofes.carsu.edu.ph/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              COFES
            </Link>
            <Link
              href={'https://5d8c147883e8f.site123.me/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              CMNS
            </Link>
            <Link
              href={'http://cegs.carsu.edu.ph/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              CEGS
            </Link>
            <Link
              href={'https://ccis.carsu.edu.ph/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              CCIS
            </Link>
            <Link
              href={'https://ccis.carsu.edu.ph/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              CAA
            </Link>
            <Link
              href={'http://chass.carsu.edu.ph/'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              CHASS
            </Link>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section>
        <div className='flex flex-col space-y-3'>
          <Link href={'/courses'} className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>Socials</h3>
            <h3 className='pr-2 text-sm text-gray-500'>more</h3>
          </Link>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              href={'https://www.reddit.com/r/carsu'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Reddit
            </Link>
            <Link
              href={'https://discord.gg/gPc3myEGZV'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Discord
            </Link>
            <Link
              href={
                'https://www.carsu.edu.ph/?q=student-campus-org/student-campus-organization'
              }
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Clubs
            </Link>
            <Link
              href={'/facebook'}
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Facebook
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section>
        <div className='flex flex-col space-y-3'>
          <Link href={'/courses'} className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>Resources</h3>
            <h3 className='pr-2 text-sm text-gray-500'>more</h3>
          </Link>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              href={
                'https://drive.google.com/drive/folders/1-2P2uJiziZHND_8gH5-d20uDmAiPs5gt'
              }
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              E-books
            </Link>
            <Link
              href={
                'https://www.carsu.edu.ph/sites/default/files/downloadables/Student%20Handbook%20Final%20Revision.pdf'
              }
              target='_blank'
              className='p-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md bg-gray-50'
            >
              Handbook
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
