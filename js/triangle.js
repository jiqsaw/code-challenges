console.log('// TRIANGLE //');

/*

    https://app.codility.com/programmers/lessons/6-sorting/triangle/
    
    Determine whether a triangle can be built from a given set of edges.

*/


function solution(A) {

    let i = 0;
    let len = A.length;

    A = A.sort((a, b) => b - a);

    while (i < len) {

        let p = A[i];

        let q = A[i + 1];
        let r = A[i + 2];

        if ((p + q > r) && (p + r > q) && (q + r > p)) {
            return 1;
        }

        i++;
    }

    return 0;

}



test([10, 2, 5, 1, 8, 20]);
// 1

test([10, 50, 5, 1]);
// 0

test([5, 3, 3]);
// 1

test([-2, -2, -2]);
// 0







function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}


