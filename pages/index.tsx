import Head from 'next/head';
import MainLayout from '../common/layouts/main';
import HomeContent from '../common/content/home';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeContent />
    </MainLayout>
  );
}
