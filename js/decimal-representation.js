/*

    A[0] = 3    A[1] = 5    A[2] = 1

    represents the number V = 153;

    Write a function that should return 9, because:

    - array A represents the number 153,
    - 17 * 153 = 2601 (17 is given)
    - the sum of the digits in the decimal representation of 2601 is 2 + 6 + 0 + 1 =9

*/

console.log('// DECIMAL REPRESENTATION //');

function solution(A) {
  let sum = 0, overflow = 0, result = 0;
  
  for (let i = 0; i < A.length; i ++) {
    sum = 17 * A[i] + overflow;
    overflow = parseInt(sum / 10);
    result += parseInt(sum % 10);
  }

  result += parseInt(overflow % 10) + parseInt(overflow / 10);
  
  return result;
}

test([3, 5, 1]);
// 9



function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
