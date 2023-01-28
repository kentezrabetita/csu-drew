import React from 'react';
import Sidebar from '../components/web/sidebar.web';
import Links from '../data/home-content.json';
import LinkComponent from '../components/link';
import Footer from '../components/shared/footer.shared';

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
        <Footer />
      </div>
    </div>
  );
};

export default HomeContent;
