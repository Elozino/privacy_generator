import Head from 'next/head'
import Login from './auth/login'
import Register from './auth/register'
import HomeScreen from '../components/HomeScreen'

export default function Home() {
  return (
    <>
      <Head>
        <title>Termstree</title>
        <meta name="description" content="Terms and condition generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Elozino Ovedhe" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        {/* <Register /> */}
        {/* <Login /> */}
        <HomeScreen />
      </main>
    </>
  )
}
