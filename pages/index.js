import React from 'react';
import Button from '../components/Button';
import App from '../layouts/App'

export default function Home() {
  return <div className='flex space-x-2'>
    Tailwind Css
  </div>;
}


Home.getLayout = page => <App children={page}/>