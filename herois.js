// herois.js

// Função para classificar heróis com base em suas habilidades e poderes.
const classificarHerois = (herois) => {
    return herois.sort((a, b) => b.poderes.length - a.poderes.length);
};

// Exemplo de uso:
const herois = [
    { nome: 'Superman', poderes: ['super força', 'voo', 'visão de raio x'] },
    { nome: 'Batman', poderes: ['inteligência', 'habilidades de combate'] },
    { nome: 'Flash', poderes: ['super velocidade'] }
];

const heroisClassificados = classificarHerois(herois);
console.log(heroisClassificados);