import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '@/components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Unit Testing With Jest</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header />

      <Component {...pageProps} />
    </>
  );
}
