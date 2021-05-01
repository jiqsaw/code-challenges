console.log('// TAPE EQUILIBRIUM //');

/*
    https://app.codility.com/programmers/lessons/3-time_complexity/

    Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
*/


function solution(A) {

    var sumRight = A.reduce(function (pv, cv, idx) { return (idx > 0) ? pv + cv : 0; }, 0);
    var sumLeft = 0;
    var maxI = A.length - 1;

    let min = null;
    
    for (var i = 0; i < maxI; i++) {
        sumLeft += A[i];
        let d = Math.abs(sumLeft - sumRight);
        min = min === null ? d : Math.min(min, d);
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }

    return min;

}

test([3, 1, 2, 4, 3]);
// 1

test([-10, -5, -3, -4, -5]);
// 3

test([-1000, 1000]);
// 2000






function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
