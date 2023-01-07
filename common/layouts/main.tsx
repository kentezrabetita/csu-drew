import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
