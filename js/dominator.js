/*

    https://app.codility.com/programmers/lessons/8-leader/dominator/

    Dominator
    Find an index of an array such that its value occurs at more than half of indices in the array.

*/

console.log('DOMINATOR');

function solution(A) {
    
    const B = [];
    const threshold = Math.floor(A.length / 2) + 1;
    let i = 0;
    while (i < A.length) {
        B[A[i]] = B[A[i]] ? B[A[i]] + 1 : 1;
        if (B[A[i]] === threshold) {
            return i;
        }
        i++;
    }

    return -1;
}

test([3, 4, 3, 3, 3, -1, 3, 3]);
// 0, 2, 4, 6 or 7

test([1, 2, 3]);
// -1


function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}

