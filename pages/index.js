import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>M. Al-Musawi | Portfolio</title>
        <meta name="description" content="Mohammed Al-Musawi's Portfolio" />
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  )
}
