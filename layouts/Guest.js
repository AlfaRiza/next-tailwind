import React from 'react';
import Head from 'next/head'

export default function Layout({header, title, cardClassName, children}) {
  return (<div className='md:bg-gray-200 flex items-center justify-center md:min-h-screen antialiased tracking-tighter text-gray-800 rounded'>
      <Head>
          <title>{title}</title>
      </Head>
      <div className={`${cardClassName ? cardClassName : 'lg:w-1/3'} w-full md:w-2/3`}>
        <div className='bg-white md:rounded-2xl md:shadow-sm overflow-hidden outline-hidden md:border'>
            <div className='px-6 py-3 border-b bg-gray-50/50'><h1 className='font-medium text-2xl capitalize'>{header}</h1></div>
            <div className='px-6 py-3 border-b'>{children}</div>
        </div>
      </div>
  </div>);
}