/*

    In a casino, all the playing cards got mixed up, and some of them got lost.
    You have to collect as many full decks as possible.

    You get N mixed up French playing cards as your input.

    The cards are of the following ranks:
    2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A

    The four suits are:
    S - Spade (♠), C - Club(♣), H - Heart(♥), D - Diamond(♦)

    The cards are given using their rank followed by their suit:

    2 of Spades: 2S
    Ace of Clubs: AC
    10 of Hearts: TH

    Write a function that will accept an array of cards and return the number of full 
    decks contained in the array.

    Examples:
    a)  ['9C', 'KS', 'AC', 'AH', '8D', '4C', 'KD', 'JC', '7D', '9D', '2H', 
        '7C', '3C', '7S', '5C', '6H', 'TH']
        
        -> 0

    b)  ['2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', 
        '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', 
        '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 
        'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH', 
        '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', 
        '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', 
        '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 
        'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH', 
        '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', 
        '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', 
        '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 
        'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD']
        
        -> 2


*/

class CollectCard {

    static collectCards(A: string[]): number {

        A = A.map(i => i =
                i.replace('A', '1')
                .replace('T', '10')
                .replace('J', '11')
                .replace('Q', '12')
                .replace('K', '13')

                .replace('S', '0')
                .replace('C', '1')
                .replace('H', '2')
                .replace('D', '3')
        );

        let decks: Array<number[]> = Array.apply(null, { length: 4 })
        .map(() => Array.apply(null, { length: 13 }).map(() => 0));


        A.forEach(e => {

            let type: number = Number(e.charAt(e.length - 1));
            let value: number = Number(e.toString().substr(0, e.length - 1));

            decks[type][value - 1] = decks[type][value - 1] + 1;

        });

        return Math.min.apply(null, decks.map(i => Math.min.apply(null, i)));

    }

}




class CollectCardTest {

    constructor() {

        console.log('COLLECT CARD');

        this.exec(1, ['9C', 'KS', 'AC', 'AH', '8D', '4C', 'KD', 'JC', '7D', '9D', '2H',
            '7C', '3C', '7S', '5C', '6H', 'TH', '5C']
        );

        this.exec(2, ['2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S',
            '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C',
            '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD',
            'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH',
            '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S',
            '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C',
            '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD',
            'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH',
            '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S',
            '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C',
            '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD',
            'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD']
        );

    }

    exec(testNo: number, cards: string[]) {
        const result = CollectCard.collectCards(cards);

        console.log('');
        console.log("test:", testNo);
        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }
}

new CollectCardTest();