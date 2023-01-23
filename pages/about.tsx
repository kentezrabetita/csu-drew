import React from 'react';
import MainLayout from '../common/layouts/main';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <MainLayout>
        <h1>This is the About page.</h1>
      </MainLayout>
    </>
  );
};

export default AboutPage;
