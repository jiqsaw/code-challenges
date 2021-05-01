/*

    ChocolatesByNumbers
    There are N chocolates in a circle. Count the number of chocolates you will eat.

    https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/

*/

function solution(N, M) {

    let i = 0;
    let count = 1;

    if (N % M === 0) {
        return N / M;
    }

    while (i !== -1) {

        i = i + M;

        if (i >= N) {
            i = i % N;

            if (i === 0) {
                return count;
            }
        }

        count++;

    }

    return 1;
}



test(10, 4);
// 5

test(20, 5);
// 4

test(24, 18);
// 4


function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}