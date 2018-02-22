console.log('// REORDERING GROUPS //');

/*

    Write a function that returns the maximum number of groups that can be reordered independently
    
    A = [1, 5, 4, 9, 8, 7, 12, 13, 14] 
    
    should return 6.
    
    Because, can be split into six groups: 
    [1], [5, 4], [9, 8, 7], [12], [13], [14]

*/

function solution(A) {

    let B = [];

    let filtered = [];
    let len = A.length;

    for (let i = 0; i < len; i++) {

        if ((i > 0) && (A[i - 1] - 1 !== A[i])) {

            let minC = Math.min(...A.slice(i));
            let maxB = Math.max(...A.slice(0, i));

            if (minC > maxB) {
                B.push(filtered);
                filtered = [];
            }

        }
        filtered.push(A[i]);

    }

    B.push(filtered);
    return B.length;
}



test([1, 5, 4, 9, 8, 7, 12, 13, 14]);
// 6


test([4, 3, 2, 6, 1]);
// 1








function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}