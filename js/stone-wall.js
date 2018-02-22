/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

    Cover "Manhattan skyline" using the minimum number of rectangles.

*/

console.log('STONE WALL');

function solution(A) {

    if (A.length < 1) return 0;
    if (A.length === 1) return 1;

    let i = 1;
    let total = Number(A[i] === A[i + 1]);
    while (i < A.length - 2) {
        total += Number(A[i] !== A[i + 1]);
        i++;
    }
    total += Number(A[A.length - 2] === A[A.length]);
    return total;
}


test([1]);
// 1

test([8, 8, 5, 7, 9, 8, 7, 4, 8]);
// 7

test([3, 2, 1]);
// 3

test([1, 1, 1]);
// 3




function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}