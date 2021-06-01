import 'styles/global.css';
import "vditor/src/assets/scss/index.scss";
import { AppProps } from 'next/app';

export default function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
