/*

    A[0] = 3    A[1] = 5    A[2] = 1

    represents the number V = 153;

    Write a function that should return 9, because:

    - array A represents the number 153,
    - 17 * 153 = 2601 (17 is given)
    - the sum of the digits in the decimal representation of 2601 is 2 + 6 + 0 + 1 =9

*/

console.log('// DECIMAL REPRESENTATION //');

function solution(A) {

    let newNumber = 17 * Number(A.reverse().toString().replace(/,/g, ''));

    let total = 0;
    newNumber.toString().split('').map(e => total += Number(e));
    return total;
}


test([3, 5, 1]);
// 9



function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}