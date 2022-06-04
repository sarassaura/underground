function textFeatures() {
  return [
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
}

function textMenu() {
  return [
    { route: '', name: 'sobre' },
    { route: 'trampos', name: 'trampos' },
    { route: 'contato', name: 'contato' },
  ]
}

export { textFeatures, textMenu }
