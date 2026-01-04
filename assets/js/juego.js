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

    deck = _.shuffle(deck) //mezcla la baraja para que salga en orden aleatorio
    console.log(deck);
    return deck;

}

crearDeck();