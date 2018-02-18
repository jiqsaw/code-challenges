/*

    https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
    
    Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).

*/

console.log('// MAX PRODUCT OF THREE //');

function maxProductOfThree(A: number[]): number {

    let B = A.sort((a, b) => b - a);
    let max = B[0] * B[1] * B[2];

    if ((B[B.length - 1] < 0) && (B[B.length - 2] < 0)) {
        let minusTotal = B[B.length - 1] * B[B.length - 2] * B[0];
        max = Math.max(max, minusTotal);
    }

    return max;

}

function maxProductOfThreeTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('\n=>', maxProductOfThree(A));
    console.log('\n--------------------------------------\n');
}


maxProductOfThreeTest([-3, 1, 2, -2, 5, 6]);
// 60

maxProductOfThreeTest([-5, 5, -5, 4]);
// 125