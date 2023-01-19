import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(true);

  const handleShowContent = (data: boolean) => {
    setShowContent(data);
  };

  return (
    <>
      <Header handleShowContent={handleShowContent} />
      {showContent && (
        <>
          <main className='relative'>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
