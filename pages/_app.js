import { NextSeo } from 'next-seo'
import Navbar from '../components/Navbar'
import '../styles/style.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title='Timotuz Fastigheter'
        description='Vi förvärvar, förädlar, nyproducerar, exploaterar, äger och förvaltar hyresbostäder i Södra Sverige.'
        canonical='https://timotuz.se/'
        openGraph={{
          url: 'https://timotuz.se/',
          title: 'Timotuz Fastigheter',
          description:
            'Vi förvärvar, förädlar, nyproducerar, exploaterar, äger och förvaltar hyresbostäder i Södra Sverige.',
          images: [
            {
              url: 'publicaurora-court.webp',
              width: 1200,
              height: 630,
              alt: 'Timotuz Fastigheter',
            },
          ],
          site_name: 'Timotuz Fastigheter',
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
