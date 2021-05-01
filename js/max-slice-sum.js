/*

    https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/

    Find a maximum sum of a compact subsequence of array elements.

*/

console.log('MAX SLICE SUM');

// function solution(A) {

//     let maxTotal = A[0];
//     let sum = 0

//     for (var i = 0; i < A.length; i++) {
//         console.log(A[i])
//         sum = 0;
//         for (var j = i; j < A.length; j++) {
//             sum += A[j];
//             if (sum > maxTotal) {
//                 maxTotal = sum;
//                 // console.log('maxTotal:', maxTotal)
//             }
//             console.log('A[j]:', A[j])
//             // console.log('sum:', sum)            
//             // console.log('...')
//         }

//         console.log('---------')

//     }


//     return maxTotal;
// }




function solution(A) {

    let sum = -1000000;
    let total = -1000000;
    let i = 0;

    while (i < A.length) {

        sum = Math.max(A[i], sum + A[i]);
        total = Math.max(sum, total);

        i++;

        console.log('----');

    }

    return total;
}



test([3, 2, -6, 4, 0]);
// 5

test([-10]);
// -10

// test([1, 1, -2])
// 2

// test([-2, -4, -1, -5, -3]);
// -2


// test([-2, 1])
// 1



function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}