/*

    https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

    Find the earliest time when a frog can jump to the other side of a river.

*/

console.log('// FROG RIVER ONE //');

function solution(X, A) {

    var leaves = [];
    var i = 0;
    var result = -1;

    for (i = 0; i < A.length; i++) {
        if (typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }

    if (leaves.length <= X) {
        return -1;
    }

    for (i = 1; i <= X; i++) {
        if (typeof leaves[i] == 'undefined') {
            return -1;
        } else {
            result = Math.max(result, leaves[i]);
        }
    }

    return result;

}



test(5, [1, 3, 1, 4, 2, 3, 5, 4]);





function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}