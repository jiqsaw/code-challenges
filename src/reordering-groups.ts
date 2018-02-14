/*

    Write a function that returns the maximum number of groups that can be reordered independently
    
    A = [1, 5, 4, 9, 8, 7, 12, 13, 14] 
    
    should return 6.
    
    Because, can be split into six groups: 
    [1], [5, 4], [9, 8, 7], [12], [13], [14]

*/

console.log('// REORDERING GROUPS //');

function reOrderingGroup(A: number[]): number {

    let B: number[][] = [];

    let filtered: number[] = [];

    for (let index = 0; index < A.length; index++) {

        if ((index > 0) && (A[index - 1] - 1 !== A[index])) {
            B.push(filtered);
            filtered = [];
        }
        filtered.push(A[index]);
    }
    
    B.push(filtered);
    return B.length;
}


function reOrderingGroupTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('\n=>', reOrderingGroup(A));
    console.log('\n--------------------------------------\n');
}


reOrderingGroupTest([1, 5, 4, 9, 8, 7, 12, 13, 14]);

reOrderingGroupTest([4, 3, 2, 6, 1]);