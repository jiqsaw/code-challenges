/*

    https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/

    Find a maximum sum of a compact subsequence of array elements.

*/

console.log('// MAX SLICE SUM //');

function solution(A) {
    let B = [];
    let maxTotal = 0;

    for (var i = 0; i < A.length; i++) {
        for (var j = i; j < A.length; j++) {
            B = A.slice(i, j + 1);
            let t = slicedTotal(B)
            if (t > maxTotal)
                maxTotal = t;
        }
    }

    return maxTotal;
}

function slicedTotal(A) {
    return A.reduce((x, y) => x + y);
}




test([3, 2, -6, 4, 0]);




function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}