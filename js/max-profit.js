/*

    https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/

    Max Prodit
    Given a log of stock prices compute the maximum possible earning.

    https://app.codility.com/demo/results/training9NTTAN-694/

*/

console.log('MAX PROFIT');


function solution(A) {

    let i = 0;
    let min = 0;
    let max = 0;
    let profit = 0;
    while (i < A.length) {

        let value = A[i];
        
        if (i === 0 || value < min) {
            min = value;
            max = value;
        }

        if (value > max) {
            max = value;
            
            if (max - min > profit) {
                profit = max - min;
            }
        }

        i++;
    }

    return profit;
}

test([
    23171,
    21011,
    21123,
    21366,
    21013,
    21367
]);
// 356


test([
    6,
    1,
    3,
    4,
    2,
    5
]);
// 4

test([]);
// 0


test([
    8, 9, 3, 6, 1, 2
]);
// 3



function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}

