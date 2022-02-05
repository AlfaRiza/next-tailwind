import React from 'react';

export default function Button({children, className, ...props}) {
  return <div>
    <button {...props} className={`${className ? className : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-200'} px-6 py-2.5 text-sm border-transparent font-semibold transition duration-300 focus:outline-none focus:ring text-white rounded
 `}>
        {children}
    </button>
  </div>;
}
