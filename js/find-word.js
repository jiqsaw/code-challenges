/*

    Find the encrypted word that in the array

    for example;
    A = [ 'U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R' ]
    Word = HUNGARY

*/

console.log('// FIND WORD //')

function solution(A) {
    let arrStr = A.toString();
    let W = '';

    for (const key in A) {
        const value = A[key];

        if (arrStr.indexOf('>' + value.substr(0, 1)) === -1) {
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

test(['U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R']);
// HUNGARY


function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}