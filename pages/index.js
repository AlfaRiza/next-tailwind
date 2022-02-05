import React from 'react';
import Button from '../components/Button';

export default function Home() {
  return <div className='flex space-x-2'>
    <Button>Primary</Button>
    <Button className="bg-pink-600 hover:bg-pink-700 focus:ring-pink-200">Secondary</Button>
  </div>;
}
