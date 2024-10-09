// src/pages/_app.tsx
import '../styles/globals.css'; // Make sure Tailwind is properly set up
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
