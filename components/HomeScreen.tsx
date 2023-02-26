import { features, logo, services, testimonials } from '@/constants/data'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import laptop from '/public/assets/laptop.svg'
import policyImg from '/public/assets/policy_statement.svg'
import tcImg from '/public/assets/tc_statement.svg'


const HomeScreen = () => {
  return (
    <>
      <Head>
        <title>Termstree</title>
        <meta name="description" content="Terms and condition generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Elozino Ovedhe" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main>
        <section className='flex flex-col lg:flex-row px-16 lg:px-32 h-screen items-center lg:justify-between justify-evenly'>
          <div className='lg:w-1/2 grid gap-5'>
            <h1 className='text-3xl lg:text-6xl lg:leading-tight lg:w-2/3 font-bold'>
              One Stop Privacy
              Policy Generator
            </h1>
            <p className='lg:my-16 w-2/3 text-xl'>
              Termstree is an easy to use, powerful tool that allows you to generate terms and conditions for your blog or website. Generate net-friendly Privacy Policies in a few minutes with no design knowledge required.
            </p>
            <button className='bg-pryYellow py-2 px-14 rounded w-fit'>
              <Link href=''> Get Started</Link>
            </button>
          </div>
          <div className='lg:w-1/2'>
            <Image src={laptop} alt='' />
          </div>
        </section>
        {/* Our Services */}
        <section className='mb-20 px-16'>
          <h2 className='font-medium text-center text-3xl mb-10'>Our Services</h2>
          <div className='grid md:grid-cols-3 gap-10 lg:px-32'>
            {services.map((item, index) => (
              <div key={index} className=''>
                <div className='bg-pryBlue text-center rounded-xl py-5 shadow-lg'>
                  <h5 className='text-white'>{item.title}</h5>
                </div>
                <p className='mt-5'>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Features that Aid Your Business Requirements */}
        <section className='px-16 lg:px-32 mb-10'>
          <div className='mb-5 grid place-items-center'>
            <h2 className='font-medium text-3xl text-center'>
              Features that Aid Your {" "}
              <span className='text-pryBlue'>Business Requirements</span>
            </h2>
            <p className='my-5 lg:w-1/3 text-center'>We know what your business requires to achieve its goals, hence our
              flexible features to help you achieve your ultimate business goals </p>
          </div>
          <div className='grid place-content-center'>
            {features.map((item, index) => (
              <div key={index} className='bg-pryBlue rounded-xl px-16 py-5 mb-5'>
                <h5 className='font-medium text-2xl'>{item.title}</h5>
                <p className='mt-2'>{item.desc}</p>
              </div>
            ))}
            <div className='text-center mt-6'>
              <button className='bg-pryYellow py-2 px-6 rounded-xl'>Learn More</button>
            </div>
          </div>
        </section>
        {/* Why you need a Privacy Policy Statement? */}
        <section className='px-16 lg:px-32 my-32'>
          <div className='mb-5'>
            <h2 className='font-medium text-3xl text-center'>Why you need a {' '}
              <span className='text-pryBlue'>Privacy Policy Statement?</span>
            </h2>
          </div>
          <div className='lg:flex justify-center mt-10'>
            <div className='flex justify-center mb-10 lg:w-1/3'>
              <Image src={policyImg} alt='' />
            </div>
            <div className='lg:w-1/3'>
              <p className='lg:leading-lg font-medium'>
                Legally, every business should have a private
                policy statement especially if they collect some
                form of data from visitors who constantly
                interact their site. In most cases, websites would
                usually use cookies to access visitors personal
                data. For this reason most online businesses are
                required to have a privacy policy statement.
              </p>
            </div>
          </div>
        </section>
        {/* Why you need a Terms and Condition Statement? */}
        <section className='px-16 lg:px-32 py-32 bg-pryBlue text-white'>
          <div className='mb-5'>
            <h2 className='font-medium text-3xl text-center'>Why you need a Terms and Condition Statement?</h2>
          </div>
          <div className='lg:flex justify-center items-center mt-10 gap-20'>
            <div className='lg:w-1/3'>
              <p className='lg:leading-lg font-medium text-lg'>
                Terms and conditions are what establishes a legal
                binding contracts between you and your clients. Most
                businesses in their opening phase usually have a lot
                to do, si it is safe to say that terms and conditions
                would likely be the last thing on their priority list.
              </p>
              <p className='lg:leading-lg font-medium mt-10 text-lg'>
                Having a set of terms and conditions helps ensure
                compliance with legal obligations. Hence there may
                be specific regulation that apply to your industry and
                you may refer to the in your terms and condition.
              </p>
            </div>
            <div className='lg:w-1/3 flex justify-center mt-10'>
              <Image src={tcImg} alt='' />
            </div>
          </div>
        </section>
        {/* What our Clients Are Saying */}
        <section className='px-16 lg:px-32 my-32'>
          <div className='mb-5'>
            <h2 className='font-medium text-3xl text-center'>What our Clients {' '}
              <span className='text-pryBlue'>Are Saying</span>
            </h2>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-20'>
            {testimonials.map((item, index) => (
              <div key={index} className='bg-pryBlue rounded-lg p-5 pt-10 lg:p-10 relative'>
                <Image src={item.testifier} alt='' width={60} height={60} className='rounded-full absolute -top-7 left-1/2 -translate-x-1/2' style={{ left: '50%' }} />
                <p>{item.testimony}</p>
              </div>
            ))}
          </div>
        </section>
        {/* logos */}
        <section className='flex justify-between px-16 lg:px-32 mb-10'>
          {logo.map((item, index) => (
            <Image src={item} key={index} alt={item + 'logo'} width={80}/>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomeScreen