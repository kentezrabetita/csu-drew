import React from 'react';
import MainLayout from '../common/layouts/main';
import Head from 'next/head';
import AboutContent from '../common/content/about';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <MainLayout>
        <AboutContent />
      </MainLayout>
    </>
  );
};

export default AboutPage;
