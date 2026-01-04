let deck = []; //creando la baraja
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']
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

    console.log(deck);
    console.log(carta)
    return carta;
}

// pedirCarta()
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;


}
const valor = valorCarta(pedirCarta());
console.log({ valor })