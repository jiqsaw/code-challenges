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

}


test([5, -1000], 1);
// [ -1000, 5 ]









function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}