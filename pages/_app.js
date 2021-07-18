import 'tailwindcss/tailwind.css'
import { Provider } from 'next-auth/client'
import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  NProgress.configure({showSpinner: false});

  Router.events.on("routeChangeStart", (url) => {
    console.log("routing started");
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    console.log("routing completed");
    NProgress.done();
  });

 return  (
  <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Head>
  
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </> 
 )
}

export default MyApp
