/*

    https://app.codility.com/programmers/lessons/6-sorting/distinct/

    Compute number of distinct values in an array.

*/

function solution(A) {

    var seen = [];
    var count = 0;
    var len = A.length;
    for (var i = 0; i < len; i++) {
        var item = A[i];
        if (seen[item] !== 1) {
            seen[item] = 1;
            count++
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