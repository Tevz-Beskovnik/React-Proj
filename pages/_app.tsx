import '../styles/globals.css';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

export default function MyApp({ Component, pageProps }: PropsWithChildren<AppProps>) {
  return (
    <>
      <Head>
        <title>Maybe</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}




