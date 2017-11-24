/*
    https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
*/
var A = [-10, -5, -3, -4, -5]; //3
// var A = [-1000, 1000];
function solution(A) {
    var retval;
    var sumRight = A.reduce(function (pv, cv, idx) { return (idx > 0) ? pv + cv : 0; }, 0);
    var sumLeft = 0;
    var substractions = [];
    var maxI = A.length - 1;
    var min = null;
    for (var i = 0; i < maxI; i++) {
        sumLeft += A[i];
        var d = Math.abs(sumLeft - sumRight);
        min = min === null ? d : Math.min(min, d);
        if (i + 1 <= maxI)
            sumRight -= A[i + 1];
    }
    return min;
}
console.log('TIME COMPLEXITY');
console.log("=> ", solution(A));
console.log('');
//# sourceMappingURL=time-complexity.js.map