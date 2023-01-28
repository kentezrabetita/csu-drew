import React, { useState } from 'react';
import MobileSidebar from '../components/mobile/sidebar.mobile';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(true);

  const handleShowContent = (data: boolean) => {
    setShowContent(data);
  };

  return (
    <>
      <MobileSidebar handleShowContent={handleShowContent} />
      {showContent && (
        <>
          <main className='relative'>{children}</main>
        </>
      )}
    </>
  );
};

export default MainLayout;
