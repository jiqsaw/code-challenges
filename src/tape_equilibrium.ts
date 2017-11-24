/*
    https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

    Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
*/

var A = [-10, -5, -3, -4, -5]; //3
// var A = [-1000, 1000];

function solution(A: any) {
    var retval;

    var sumRight = A.reduce(function (pv: any, cv: any, idx: any) { return (idx > 0) ? pv + cv : 0; }, 0);
    var sumLeft = 0;
    var substractions = [];
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

console.log('TIME COMPLEXITY');
console.log("=> ", solution(A));
console.log('');
