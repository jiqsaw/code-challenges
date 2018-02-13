/*

    https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

    Rotate an array to the right by a given number of steps

*/

console.log('// CYCLIC ROTATION //');

function cyclicRotation(A: number[], K: number): number[] {

    K = (A.length > K) ? K : K % A.length;

    var d = A.slice(0, A.length - K);
    var e = A.splice(A.length - K);
    return e.concat(d);

}

function cyclicRotationTest(A: number[], K: number) {
    const result = cyclicRotation(A, K);

    console.log('\n(', A, K, ')\n');
    console.log('=>', result);
    console.log('\n--------------------------------------\n');
}

cyclicRotationTest([5, -1000], 1);