import React from 'react';

export default function Card() {
  return (
    <div className='max-w-lg'>
      <div className='bg-white border rounded-r-xl shadow-sm overflow-hidden'>
        <header className='border-b bg-gray-50/50 px-4 py-2.5 flex items-center justify-between'>
          <div>
            <h1 className='font-medium'>Lorem Ipsum is simply dummy text of the printing</h1>
            <span className='text-gray-500'>There are many variations of</span>
          </div>
          <a href='#' className='bg-pink-500 text-white hover:bg-pink-600 transition duration-300 rounded-xl px-5 py-2.5 font-semibold text-sm focus:outline-none focus:ring focus:ring-pink-200'>new card</a>
        </header>
        <section className='px-4 py-2.5'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of `de Finibus Bonorum et Malorum` (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        </section>
        <footer className='border-t px-4 py-2.5 text-gray-600 bg-gray-50/50'>It is a long established fact</footer>
      </div>
    </div>
  )
}
