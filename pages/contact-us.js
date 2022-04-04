import HeroSection from '../components/HeroSection'
import kontakta_oss from '../public/kontakta-oss.webp'

const contactUs = () => {
  return (
    <div className='contact-us'>
      <HeroSection
        image={kontakta_oss}
        alt={'Friends sitting on bed with dogs'}
      />
      <div className='contact-us__text-container'>
        <div className='contact-us__text-one'>
          <h2>Felanmälan: Malmö/Limhamn</h2>
          <h3>Fastighetsskötsel och felanmälan</h3>
          <p>
            Fastighetsskötsel utförs av Förvaltning AB Malmöborg.<br /><br />
            Samtliga felanmälningar skall registreras direkt till Förvaltnings
            AB Malmöborg vardagar mellan kl.8.00 - 16.00 på telefon 072 353 46
            31 alternativt email info@malmoborg.se.
          </p>
          <h3>Journummer</h3>
          <p>
            För akuta fel och störningar på kvällar och helger som inte kan
            vänta till följande vardag hänvisar vi till Örestads Bevakning på
            telefon 040 93 12 70.
          </p>
        </div>
        <div className='contact-us__text-two'>
          <h2>Felanmälan: Ystad</h2>
          <h3>Fastighetsskötsel och felanmälan</h3>
          <p>
            Fastighetsskötsel och felanmälningar utförs av Kanslihuset AB.{' '}
            <br /><br />
            Felanmälan ska i första hand göras på www.kanslihuset.se under ”FÖR
            HYRESGÄSTER”, ”FELANMÄLAN”. Vid entren till trapphus finner ni
            detaljerade instruktioner och den information ni behöver uppge till
            Kanslihuset vid felanmälan. <br /><br /> Det går också bra att ringa in på
            vardagar (måndag-fredag) under telefontid kl. 08:00 - 11:00 på
            telefonnummer 040 680 15 65.
            <br /><br /> Akuta fel och störningar mellan kl. 11:00 - 16:30 som ej kan
            vänta till nästkommande vardag ring 040 680 15 67
          </p>
          <h3>Journummer</h3>
          <p>
            Akuta fel och störningar under kvällar och helger som ej kan vänta
            till nästkommande vardag hänvisar vi till Örestad Bevakning på
            telefon 040 93 12 70.
          </p>
        </div>
      </div>
    </div>
  )
}

export default contactUs
