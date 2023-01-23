import React from 'react';
import MainLayout from '../common/layouts/main';
import Head from 'next/head';
import ContactsContent from '../common/content/contacts';

const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <MainLayout>
        <ContactsContent />
      </MainLayout>
    </>
  );
};

export default ContactsPage;
