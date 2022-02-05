import React from 'react';

export default function Layout({children}) {
  return <div className='bg-blue-500 flex items-center justify-center min-h-screen antialiased tracking-tighter text-gray-800'>
      {children}
  </div>;
}