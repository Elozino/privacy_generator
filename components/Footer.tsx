/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import google from '/public/assets/google.svg'
import facebook from '/public/assets/facebook-logo.svg'
import pintrest from '/public/assets/pinterest-1.svg'
import twitter from '/public/assets/twitter.svg'

const Footer = () => {
  return (
    <footer className='px-16 py-10 bg-sky-100'>
      <div className='flex justify-between gap-10'>
        <div className='w-1/3'>
          <h2 className='font-medium text-xl mb-2'>
            <span className='font-bold'>Terms</span>
            <span className='italic'>tree</span>
          </h2>
          <p>
            This is a tool for business and
            legal users to generate terms
            and conditions for their business. Download the free "Terms & Conditions" generator today,
            which will automatically create
            a legal contract of your own.
          </p>
        </div>
        <div className='w-1/4'>
          <h2 className='font-medium text-xl mb-2'>Products</h2>
          <div>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href=''>Website Templates</Link>
              </li>
              <li>
                <Link href=''>Domains</Link>
              </li>
              <li>
                <Link href=''>Pricing</Link>
              </li>
              <li>
                <Link href=''>Online Store</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-1/4'>
          <h2 className='font-medium text-xl mb-2'>Company</h2>
          <div>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href=''>About Us</Link>
              </li>
              <li>
                <Link href=''>Careers</Link>
              </li>
              <li>
                <Link href=''>Affiliates</Link>
              </li>
              <li>
                <Link href=''>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-1/4'>
          <h2 className='font-medium text-xl mb-2'>Resources</h2>
          <div>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href=''>Help Center</Link>
              </li>
              <li>
                <Link href=''>Business Glossary</Link>
              </li>
              <li>
                <Link href=''>Faqs</Link>
              </li>
              <li>
                <Link href=''>Commerce Guide</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* social links */}
      <div className='flex gap-3 mt-4'>
        <Link href=''>
          <Image src={google} alt='google' className='w-6' />
        </Link>
        <Link href=''>
          <Image src={facebook} alt='facebook' className='w-6' />
        </Link>
        <Link href=''>
          <Image src={pintrest} alt='pintrest' className='w-6' />
        </Link>
        <Link href=''>
          <Image src={twitter} alt='twitter' className='w-6' />
        </Link>
      </div>
    </footer>
  )
}

export default Footer