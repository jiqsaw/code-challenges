/*

    https://app.codility.com/programmers/lessons/6-sorting/triangle/
    
    Determine whether a triangle can be built from a given set of edges.

*/

console.log('// TRIANGLE //');

function triangle(A: number[]): number {

    let i = 0;
    let len = A.length;

    A = A.sort((a, b) => b - a);

    while (i < len) {

        let p = A[i];

        let j = i + 1;

        let q = A[i + 1];
        let r = A[i + 2];

        if ((p + q > r) && (p + r > q) && (q + r > p)) {
            return 1;
        }

        i++;
    }

    return 0;

}

function triangleTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('\n=>', triangle(A));
    console.log('\n--------------------------------------\n');
}


triangleTest([10, 2, 5, 1, 8, 20]);
// 1

triangleTest([10, 50, 5, 1]);
// 0

triangleTest([5, 3, 3]);
// 1

triangleTest([-2, -2, -2]);
// 0
