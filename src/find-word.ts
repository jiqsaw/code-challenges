/*

    Find the encrypted word that in the array

    for example;
    A = [ 'U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R' ]
    Word = HUNGARY

*/

class Words {

    static findWord(A: string[]): string {
        let arrStr = A.toString();
        let W = '';

        for (const key in A) {
            const value = A[key];

            if (arrStr.indexOf('>' + value.substr(0,1)) === -1) {
                W = value.replace('>', '');
                arrStr = arrStr.replace(value, '');
                break;
            }
        }

        for (let index = 0; index < A.length - 1; index++) {
            
            let ws = W.substring(W.length - 1) + '>';
            W += arrStr.substr(arrStr.indexOf(ws) + 2, 1);
            
        }

        return W;
    }

}

class WordsTest {

    constructor() {

        console.log('// FIND WORD //');

        // TEST 1
        this.exec(['U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R']);
    }

    exec(A: string[]) {
        const result = Words.findWord(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new WordsTest();