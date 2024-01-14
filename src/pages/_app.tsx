import { global } from '@/styles/global';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
