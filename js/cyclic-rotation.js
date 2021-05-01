/*

    https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

    Rotate an array to the right by a given number of steps

*/

console.log('// CYCLIC ROTATION //');

function solution(A, K) {

    K = (A.length > K) ? K : K % A.length;

    var d = A.slice(0, A.length - K);
    var e = A.splice(A.length - K);
    return e.concat(d);

    // K = K % A.length;

    // if (K === 0 || K === A.length) {
    //     return A;
    // }

    // const sliceIndex = A.length - K;
    // return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]
}


test([5, -1000], 1);
// [ -1000, 5 ]


test([3, 8, 9, 7, 6], 3);
// [9, 7, 6, 3, 8]







function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}