import React, { useState } from 'react';
import Header from '../components/header';

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
        </>
      )}
    </>
  );
};

export default MainLayout;
