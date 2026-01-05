let deck = []; //creando la baraja
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0;
puntosComputadora = 0;

//Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('small')

//esta funcion crea una nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales)
            deck.push(esp + tipo);

    }

    //deck.push(i + tipos)

    deck = _.shuffle(deck) //mezcla la baraja para que salga en orden aleatorio (libreria externa underscore)
    console.log(deck);
    return deck;

}
crearDeck();
// funcion pedir carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'Nohay cambio denel deck'

    }

    const carta = deck.pop();


    return carta;
}

// valor de la carta
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;


}

//Eventos

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');


    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {


    } else if (puntosJugador === 21) {

    }

});