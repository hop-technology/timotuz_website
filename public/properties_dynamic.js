import PågåendeYstad1 from '../public/aurora-street.webp'
import PågåendeYstad2 from '../public/aurora-court.webp'

import Ystad1 from '../public/ystad-yard.webp'
import Ystad2 from '../public/ystad-street.webp'
import Ystad3 from '../public/ystad-angel.webp'
import Ystad4 from '../public/ystad-sushi.webp'
import Limhamn1 from '../public/limhamn-front.webp'
import Limhamn2 from '../public/limhamn-back.webp'
import Limhamn3 from '../public/limhamn-back-2.webp'
import Limhamn4 from '../public/limhamn-bench.webp'
import Helsingborg1 from '../public/helsingborg-street.webp'

const properties_dynamic = [
  {
    id: 1,
    district: 'YSTAD',
    name: 'Pågående nyproduktion: Aurora',
    description_text: [
      {
        description_1:
          'Aurora, möjligheternas kvarter, beläget i hjärtat av pittoreska Ystad längs de brokiga kullerstensgatorna. Här har vi ambitionen och förutsättningarna att bygga bostäder som möter morgondagens behov. Vi är i full fas med att utveckla ett nytt bostadskoncept i Ystad för den medvetna stadsmänniskan.',
        description_2:
          'Fastigheten som sträcker sig från Stora Östergatan, den så kallade gågatan, och Lilla Östergatan, är i dagens läge en fastighet som har en enorm potential till att bidra med något speciellt till Ystad som stad.',
        description_3:
          'Kvarterets centrala läge gör det enkelt att gå, cykla eller åka kollektivt. Med fokus på att leva hållbart och tillgängligt bidrar livsstilen samtidigt till en bättre miljö och en bättre hälsa för de boende. I sann Ystadsanda med en pittoresk innergård och privat pool så är vår ambition att  skapa Ystads Gårdshus 2.0.',
        description_4: 'Preliminär säljstart: Hösten 2022 ',
      },
    ],
    address: 'Stora Östergatan 31 / Lilla Östergatan 36',
    type: 'Bostäder',
    housing: '19st',
    boa: '1500 kvm',
    button: 'Intresseanmälan',
    images: [
      {
        id: 1,
        photo: PågåendeYstad1,
        alt: 'Gatuvy av nyproduktion Aurora',
      },
      {
        id: 2,
        photo: PågåendeYstad2,
        alt: 'Innegård av nyproduktion Aurora',
      },
    ],
  },
  {
    id: 2,
    district: 'YSTAD',
    name: 'Fredrik 16',
    description:
      'Fastigheten är belägen i den gamla citykärnan och de anrika medeltida delarna av Ystad och angränsar dels till den livliga gågatan Stora Östergatan samt Lilla Östergatan. Här kan boende ta del av stadens utbud av restauranger, caféer och butiker rakt utanför dörren samt promenera längst havet runt hörnet.',
    address: 'Stora Östergatan 31 / Lilla Östergatan',
    type: 'Bostäder/Lokaler',
    housing: '9st',
    boa: '667 kvm',
    premises: '5st',
    loa: '1155 kvm',
    parking: 'Parkeringsplats (16st)',
    foradling:
      'Lokalerna på innegården kommer rivas och ombildas till 19 bostäder och en levande innergård.',
    images: [
      {
        id: 1,
        photo: Ystad1,
        alt: '',
      },
      {
        id: 2,
        photo: Ystad2,
        alt: '',
      },
      {
        id: 3,
        photo: Ystad3,
        alt: '',
      },
      {
        id: 4,
        photo: Ystad4,
        alt: '',
      },
    ],
  },
  {
    id: 3,
    district: 'Malmö / Limhamn',
    name: 'Strutsen 25',
    description:
      'Fastigheten är belägen på centralt läge i de pittoreska “gamla” delarna av Limhamn på en lugn återvändsgata ett par minuters promenadavstånd från havet och ett stenkast från Limhamns centrum med restauranger, matbutiker och caféer.',
    address: 'Västra Bernadottesgatan 30, Limhamn ',
    type: 'Bostäder',
    housing: '13',
    boa: '727 kvm',
    premises: '2',
    loa: '460 kvm',
    parking: 'Underjordiskt garage (17st)',
    standard:
      'Fastigheten håller en hög teknisk standard. Lägenheter har under åren succesivt totalrenoverats med bruksvärdeshöjande uppgraderingar.',
    images: [
      {
        id: 1,
        photo: Limhamn1,
        alt: '',
      },
      {
        id: 1,
        photo: Limhamn2,
        alt: '',
      },
      {
        id: 3,
        photo: Limhamn3,
        alt: '',
      },
      {
        id: 4,
        photo: Limhamn4,
        alt: '',
      },
    ],
  },
  {
    id: 4,
    district: 'Helsingborg',
    name: 'Mörsaren Västra 6',
    description:
      'Fastigheten ligger på det mest attraktiva och expansiva industriområdet Berga i Norra Helsingborg. På endast 10 minuter med bil nås Helsingborg centrum. Buss avgår ett stenkast från fastigheten till centrala Helsingborg och från Maria station som ligger inom promenadavstånd från fastigheten avgår Pågatågen.',
    address: 'Pistolgatan 3, Helsingborg',
    type: 'Industrilokal',
    lager: '480 kvm',
    kontor: '120 kvm',
    images: [
      {
        id: 1,
        photo: Helsingborg1,
        alt: '',
      },
    ],
  },
]

export default properties_dynamic
