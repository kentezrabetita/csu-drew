import React from 'react';
import Link from 'next/link';
import Icon from '../components/icon';

interface LinkProps {
  url: string;
  target: string;
  icon: String;
  title: string;
}

const LinkComponent = ({ url, target, icon, title }: LinkProps) => {
  return (
    <Link
      href={url}
      target={target || '_blank'}
      className='flex flex-row items-center p-4 space-x-4 text-sm font-bold text-gray-500 border border-gray-100 rounded-md dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 bg-gray-50'
    >
      <Icon name={icon} />
      <span>{title}</span>
    </Link>
  );
};

export default LinkComponent;
