/*

    https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/

    Count the semiprime numbers in the given range [a..b]

*/

console.log('CountSemiprimes');

function solution(N, P, Q) {

    let i = 0;
    let arr = [];

    while (i < P.length) {

        console.log(i);

        arr[i] = 0;

        let p = P[i];
        let q = Q[i];

        let j = p;
        while (j <= q) {
            console.log('j:', j)

            arr[i] += isSemiPrime(j);
            j++;

            console.log('arr:', arr)
        }

        i++;

        console.log('----');

    }

    return arr;
}

function isSemiPrime(N) {
    return 1;
}



// test(1, [1], [1])
// 1

test(26,
    [1, 4, 16],
    [26, 10, 20]);
// [10, 4, 0]


function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}