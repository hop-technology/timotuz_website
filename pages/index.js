import Head from 'next/head'
import IndexCarousel from '../components/IndexCarousel'
import IndexGrid from '../components/IndexGrid'
import IndexAboutUs from '../components/IndexAboutUs'

const Home = () => {
  return (
    <>
      <Head>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <IndexCarousel />
      <IndexGrid />
      <IndexAboutUs />
    </>
  )
}
export default Home
