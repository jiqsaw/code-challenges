/*

    https://app.codility.com/programmers/lessons/8-leader/equi_leader/

    EquiLeader
    Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.

*/

console.log('EQUILEADER');

function solution(A) {

    let count = 0;
    let i = 0;
    let currThreshold = -1;
    const B = [];
    const C = [];

    while (i < A.length) {
        C[A[i]] = C[A[i]] ? C[A[i]] + 1 : 1;
        i++;
    }

    i = 0;

    while (i < A.length) {

        B[A[i]] = B[A[i]] ? B[A[i]] + 1 : 1;
        C[A[i]] = C[A[i]] ? C[A[i]] - 1 : 0;

        let threshold1 = Math.floor((i + 1) / 2) + 1;
        let threshold2 = Math.floor(((A.length - (i + 1)) / 2)) + 1;

        if (B[A[i]] === threshold1) {
            currThreshold = i;
        }
        if (currThreshold !== -1 &&
            B[A[currThreshold]] >= threshold1 && 
            C[A[currThreshold]] >= threshold2
        ) {
            count++
        }

        i++;
        
    }

    return count;
}








test([4, 3, 4, 4, 4, 2]);
// 2

test([4, 4, 2, 5, 3, 4, 4, 4]);
// 3




function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}

