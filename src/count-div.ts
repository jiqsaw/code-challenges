/*

    https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
    
    Compute number of integers divisible by k in range [a..b].

*/

console.log('// COUNT DIV //');

function countDiv(A: number, B: number, K: number): number {

    let first = (A % K) === 0 ? A :  A + (K - (A % K));
    let last = (B % K) === 0 ? B : B - (B % K);
    
    return ((last - first) / K) + 1;

}


function countDivTest(A: number, B: number, K: number) {
    console.log('\n(', A, B, K, ')\n');
    console.log('\n=>', countDiv(A, B, K));
    console.log('\n--------------------------------------\n');
}


countDivTest(6, 11, 2);
// 6, 8, 10

countDivTest(4, 22, 3);
// 6, 9, 12, 15, 18, 21