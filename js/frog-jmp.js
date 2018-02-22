/*

    https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

    Count minimal number of jumps from position X to Y.

*/


function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}


test(10, 85, 30);
// 3










function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}