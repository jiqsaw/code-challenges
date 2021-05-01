/*

    https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
    
    Compute number of integers divisible by k in range [a..b].

*/

console.log('// COUNT DIV //');

function solution(A, B, K) {

    let first = (A % K) === 0 ? A :  A + (K - (A % K));
    let last = (B % K) === 0 ? B : B - (B % K);
    
    return ((last - first) / K) + 1;

}


test(6, 11, 2);
// 3

test(4, 22, 3);
// 6









function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}