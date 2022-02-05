import React from 'react';

export default function Input({type="text",...props}) {
  return (<div>
      <input type={type} {...props} className='w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-400 transition duration-300'/>
  </div>);
}
