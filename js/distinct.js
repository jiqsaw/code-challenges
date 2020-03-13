/*

    https://app.codility.com/programmers/lessons/6-sorting/distinct/

    Compute number of distinct values in an array.

*/

function solution(A) {
    let sorted = [], count = 0;
    
    sorted = A.sort((a, b) => a - b);
    
    for(let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i-1]) {
            count++;
        }
    }
    
    return count;
}


test([2, 1, 1, 2, 3, 1]);
// 3












function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
