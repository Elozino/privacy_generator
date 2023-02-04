import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '/public/assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='bg-pryBlue flex justify-between items-center h-16 px-16'>
      <div className='flex items-center'>
        <Image src={Logo} alt='image' className='' />
        <p className='text-2xl ml-2 text-white'>
          <span className='font-bold'>Terms</span>
          <span className='font-thin italic'>tree</span>
        </p>
      </div>
      {/* links */}
      <div>
        <ul className='flex text-white items-center gap-10'>
          <li>
            <Link href=''>Services</Link>
          </li>
          <li>
            <Link href=''>Policies</Link>
          </li>
          <li>
            <Link href=''>Contact Us</Link>
          </li>
          <li>
            <Link href='/auth/Login'>
              <button className='bg-white text-black py-1 px-4 rounded'>
                Sign In
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar