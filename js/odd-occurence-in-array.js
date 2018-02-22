console.log('// ODD OCCURRENCES IN ARRAY //');

/*

    https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

    Find value that occurs in odd number of elements.

*/

function solution(A) {

    return A.reduce((x, y) => x ^ y)

}



test([9, 3, 9, 3, 9, 7, 9]);
// 7





function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}