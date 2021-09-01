import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/index.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;