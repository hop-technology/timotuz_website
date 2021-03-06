import { NextSeo } from 'next-seo'
import HeroSection from '../components/HeroSection'
import PropertiesCards from '../components/PropertiesCards'
import fastigheter_hero from '../public/fastigheter-hero-1920.webp'

const properties = () => {
  const properties_text = {
    id: 1,
    tag_line: 'Fastigheter med hög standard i centrala lägen',
  }

  return (
    <>
      <NextSeo
        description='Fastigheter med hög standard i centrala lägen'
        openGraph={{
          url: 'https://timotuz.se/fastigheter',
          title: 'Fastigheter',
          description: 'Fastigheter med hög standard i centrala lägen',
          images: [
            {
              url: 'publicaurora-court.webp',
              width: 1200,
              height: 630,
              alt: 'Timotuz Fastigheter',
            },
          ],
        }}
      />
      <HeroSection
        image={fastigheter_hero}
        alt={'Birdseye view of property in Ystad'}
        text={properties_text}
      />
      <div className='properties'>
        <PropertiesCards />
      </div>
    </>
  )
}

export default properties
