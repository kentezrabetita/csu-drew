import React from 'react';
import MainLayout from '../common/layouts/main';
import Head from 'next/head';

const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <MainLayout>
        <h1>This is the Contacts page.</h1>
      </MainLayout>
    </>
  );
};

export default ContactsPage;
