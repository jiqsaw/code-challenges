console.log('// PERMUTATION CHECK //');

/*

    https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

    Check whether array A is a permutation.

*/


function solution(A) {

    A = A.sort((a, b) => a - b);
    for (var i = 0; i < A.length; i++) {
        if (A[i] != i + 1) {
            return 0;
        }
    }

    return 1;

}



test([3, 2, 3, 2]);
// 0





function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}