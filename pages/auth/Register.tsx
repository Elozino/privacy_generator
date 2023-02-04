import Image from 'next/image'
import React from 'react'
import Svg from '../../public/assets/register.svg'
import Logo from '../../public/assets/logo.svg'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='flex h-screen'>
      {/* left screen */}
      <div className='flex justify-center items-center bg-pryBlue p-4 w-1/3'>
        <Image src={Svg} alt='image' />
      </div>
      {/* right screen */}
      <div className='flex flex-col justify-center items-center h-full p-8 w-full'>
        <div className='w-3/4'>
          <div className='flex items-center'>
            <Image src={Logo} alt='image' />
            <p className='text-5xl'>
              <span className='font-bold'>Terms</span>
              <span className='font-thin italic'>tree</span>
            </p>
          </div>
          <div className='text-center my-2'>
            <p className='text-pryBlue text-3xl'>Create your Termstree Account</p>
            <p className='my-3'>Sign up now and proceed to terms generation</p>
          </div>
          <form action="" className='flex flex-col gap-6 '>
            <div>
              <label htmlFor="email" className='text-zinc-700'>Email</label><br />
              <input type="text" name="email" id="email" className='w-full border p-3 rounded mt-3' />
            </div>
            <div>
              <label htmlFor="password" className='text-zinc-700'>Password</label><br />
              <input type="text" name="password" id="password" className='w-full border p-3 rounded mt-3' />
            </div>
            {/* checkbox */}
            <div className='flex items-center'>
              <input type="checkbox" name="" id="" />
              <span className='ml-3'>I agree to the terms of services and private policy </span>
            </div>
            <button className='rounded p-3 cursor-pointer w-full bg-pryBlue text-white'>
              Sign Up
            </button>
          </form>
          <div className='text-center mt-10'>
            Already have an account?
            {" "}
            <Link href="/">Sign In</Link>
          </div>
          <div className='flex items-center my-10'>
            <div className='bg-gray-500 w-1/2 rounded-xl' style={{ height: 2 }} />
            <span className='mx-2'>OR</span>
            <div className='bg-gray-500 w-1/2 rounded-xl' style={{ height: 2 }} />
          </div>
          <button className='border-2 border-gray-500 w-full hover:border-pryBlue rounded p-3 cursor-pointer hover:bg-pryBlue hover:text-white'>
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register