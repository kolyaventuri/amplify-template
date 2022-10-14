import * as React from 'react';
import type {AppProps} from 'next/dist/shared/lib/router/router';

import 'tailwindcss/tailwind.css';

function App({Component, pageProps}: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
