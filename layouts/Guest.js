import React from 'react';
import Head from 'next/head'

export default function Layout({header, title, cardClassName, children}) {
  return (<div className='bg-gray-200 flex items-center justify-center min-h-screen antialiased tracking-tighter text-gray-800 rounded'>
      <Head>
          <title>{title}</title>
      </Head>
      <div className={cardClassName ? cardClassName : 'w-1/3'}>
        <div className='bg-white rounded-2xl shadow-sm overflow-hidden outline-hidden'>
            <div className='px-6 py-3 border-b bg-gray-50/50'><h1 className='font-medium text-2xl capitalize'>{header}</h1></div>
            <div className='px-6 py-3 border-b'>{children}</div>
        </div>
      </div>
  </div>);
}