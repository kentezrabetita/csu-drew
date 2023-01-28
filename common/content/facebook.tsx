import Sidebar from '../components/web/sidebar.web';
import Link from 'next/link';
import FacebookLinks from '../data/facebook-pages.json';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Footer from '../components/shared/footer.shared';

const FacebookContent = () => {
  return (
    <div className='flex flex-row dark:bg-[#010101] dark:text-gray-300'>
      <Sidebar />
      <div className='flex flex-col items-center justify-center w-full md:ml-80'>
        <div className='container flex flex-col w-full p-4 px-5 pb-10 space-y-5 lg:px-20 xl:px-36'>
          {FacebookLinks.map((link) => {
            return (
              <section key={link.category}>
                <div className='flex flex-col space-y-3'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-bold'>{link.category}</h3>
                  </div>
                  <div className='grid grid-cols-1 gap-4 xm:grid-cols-2 lg:grid-cols-3'>
                    {link.pages.map((page) => {
                      return (
                        <Link
                          key={page.name}
                          href={page.link}
                          target='_blank'
                          className='flex flex-row p-2 text-sm font-bold text-gray-500 border border-gray-100 rounded-md sm:p-4 sm:space-x-4 sm:items-center dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
                        >
                          <div className='hidden text-md sm:block'>
                            <FaExternalLinkSquareAlt />
                          </div>
                          <div className='flex flex-col space-y-1'>
                            <span>{page.name}</span>
                            <span className='text-xs font-normal text-gray-600'>
                              {page.description}
                            </span>
                          </div>
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
        <Footer />
      </div>
    </div>
  );
};

export default FacebookContent;
