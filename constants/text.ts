import {
  GiSpy,
  GiPaintBrush,
  GiPencilRuler,
  GiArmBandage,
} from 'react-icons/gi'
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from 'react-icons/ai'

const textFeatures = [
  {
    id: 0,
    title: 'Empreendedor',
    text: 'Comecei minha start-up em minha garagem, igualzinho Steve Jobs, e a minha jornada ainda está só começando',
  },
  {
    id: 1,
    title: 'Visionário',
    text: 'Faço o meu dinheiro virar dois dinheiros e cada um deles vira três e assim por diante, e isso não tem nada a ver com pirâmide',
  },
  {
    id: 2,
    title: 'Expert',
    text: 'Mais de 20 anos de experiência na faculdade da vida, compre o curso de auto-ajuda e saiba mais (não é coach)',
  },
]

const textMenu = [
  { route: '', name: 'sobre' },
  { route: 'trampos', name: 'trampos' },
  { route: 'contato', name: 'contato' },
]

const textTestimonials = [
  {
    name: 'Sarah Lins',
    job: 'Engenheira',
    commentary: 'Comentário legal sobre produto',
  },
  {
    name: 'Pegasus Sunshine',
    job: 'Artista',
    commentary: 'Comentário nota 10',
  },
  {
    name: 'Maya Raven',
    job: 'Dolar',
    commentary: 'Comentário maravilhoso',
  },
  {
    name: 'Dalila Rodriguez',
    job: 'Médica Veterinária',
    commentary: 'Comentarei denovo, concerteza',
  },
  {
    name: 'Lisa Adams',
    job: 'Presidente',
    commentary: 'Comentário melhor que já vi',
  },
]

const textFacts = [
  { icon: GiSpy, name: 'Clientes', number: 234 },
  { icon: GiPencilRuler, name: 'Desenhos', number: 1054 },
  { icon: GiPaintBrush, name: 'Pinturas', number: 523 },
  { icon: GiArmBandage, name: 'Tatuagens', number: 132 },
]

const textHero = {
  name: 'Vitor Valentim',
  slogan: 'From Hero to Zero',
  brand: 'UnderGround',
}

const textContact = [
  { icon: AiOutlineEnvironment, info: 'Endereço: Rua d tal, 3600' },
  { icon: AiOutlinePhone, info: 'Telefone: +55 11 99123-4563' },
  { icon: AiOutlineWhatsApp, info: 'Whatsapp: +55 11 99874-4619' },
  { icon: AiOutlineMail, info: 'E-mail: eumim@gmail.com' },
]

const textTrampos = {
  title: 'Trampos',
  phrase: 'Nenhum trabalho é ruim, ruim é ter que trabalhar',
}

const textContato = {
  title: 'Contato',
  subtitle: 'Chama',
  phrase: 'Se quiser saber como me chamar, me chame de deuso',
}

const textLogo = 'Me'

const textFoot = `@It's me!`

export {
  textFeatures,
  textMenu,
  textTestimonials,
  textFacts,
  textHero,
  textContact,
  textTrampos,
  textContato,
  textLogo,
  textFoot,
}
