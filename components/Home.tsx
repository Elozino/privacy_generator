import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
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
        Home Screen
      </main>
      <Footer />
    </>
  )
}

export default Home