import { GlobalStyle } from '@/styles/global';
import { AppProps } from 'next/app';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
