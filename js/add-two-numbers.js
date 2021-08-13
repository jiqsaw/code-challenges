/*

    3. stage

       65
       55
    +----
      120

    5 + 5 = 10 take 0 carry 1 -- 0
    6 + 5 = 11 take 1 plus carried one = 2 and carry 1 -- 20
    finalise > 120

*/

function solution(A, B) {

    let strA = A.toString();
    let strB = B.toString();

    strA = strA.padStart(strB.length, '0');
    strB = strB.padStart(strA.length, '0');

    console.log('strA:', strA)
    console.log('strB:', strB)

    let i = strA.length - 1;

    let additional = 0;

    let result = '';

    while (i >= 0) {
        let sum = Number(strA[i]) + Number(strB[i]) + additional;
        if (sum >= 10) {
            additional = 1;
            sum = sum - 10;
        } else {
            additional = 0;
        }

        result = String(sum) + result;
        i--;
    }

    return result;

}

test(20, 145);

test(98397, 37234226);

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
