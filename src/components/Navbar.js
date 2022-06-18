import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] bg-slate-700 flex justify-between items-center px-3 sticky top-0 z-20'>
        <span className='text-slate-100 text-xl font-serif'>Sport's World</span>
        <ul className='flex items-center'>
            <li className='inline-block text-slate-50 font-serif text-xs'>Home</li>
        </ul>
    </div>
  )
}

export default Navbar