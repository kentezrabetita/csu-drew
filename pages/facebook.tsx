import Head from 'next/head';
import MainLayout from '../common/layouts/main';
import FacebookContent from '../common/content/facebook';

const FacebookPage = () => {
  return (
    <>
      <Head>
        <title>Facebook Pages</title>
      </Head>
      <MainLayout>
        <FacebookContent />
      </MainLayout>
    </>
  );
};

export default FacebookPage;
