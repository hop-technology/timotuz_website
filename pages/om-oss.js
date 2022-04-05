import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us__image-container'>
        <div className='about-us__image-container--image'>
          <Image
            src='/people_2.webp'
            alt='couple in living room'
            layout='fill'
            priority
          />
        </div>
        <div className='image-overlay'>
          <h1>Om oss</h1>
        </div>
      </div>
      <div className='about-us__text-container'>
        <div className='about-us__text-container--text'>
          <h1>Om oss</h1>
          <p>
            Timotuz har varit verksamt inom fastighetsbranschen sedan 2014.
            <br></br> <br></br> Vi förvärvar, förädlar, nyproducerar,
            exploaterar, äger och förvaltar hyresbostäder i Södra Sverige.
            Strategin är att i städer med tillväxtpotential förvärva befintliga
            bostadsfastigheter liksom mark för nyproduktion samt strategiskt
            belägna lager och logistikfastigheter.<br></br>
            <br></br>Bolagets nyproducerade bostäder är alltid ytsmarta där
            hållbarhet är vår ledstjärna med ett högt miljötänk. I våra projekt
            letar vi ständigt efter möjligheter att integrera teknologiska
            innovationer inom mobilitetsåtgärder, hållbarhet och effektiv
            användning av resurser bland de boende.<br></br>
            <br></br> Vi är lyhörda och jobbar alltid i ett nära samarbete med
            kommunen var sig det beträffar gestaltning, planritningar eller
            mobilitetsåtgärder.<br></br>
            <br></br> Timotuz är en långsiktigt fastighetsägare och finns idag
            etablerad i Malmö, Ystad och Helsingborg.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
