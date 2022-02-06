import React from 'react';
import Button from '../components/Button';
import App from '../layouts/App'

export default function Home() {
  return <div className='grid grid-cols-3 gap-10'>
    <div className='bg-rose-500 sm:bg-blue-500 w-full aspect-video flex items-center justify-center text-white'>
    Tailwind Css
    </div>
    <div className='bg-rose-500 w-full aspect-video flex items-center justify-center text-white'>
    Tailwind Css
    </div>
    <div className='bg-rose-500 w-full aspect-video flex items-center justify-center text-white'>
    Tailwind Css
    </div>
  </div>;
}


Home.getLayout = page => <App children={page}/>