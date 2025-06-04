/* eslint-disable react/no-unknown-property */
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adventure Together</title>
        <meta
          name="description"
          content="A simple project start to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
