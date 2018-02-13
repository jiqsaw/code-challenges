/*

    Write a function that returns the maximum number of groups that can be reordered independently
    
    A = [1, 5, 4, 9, 8, 7, 12, 13, 14] 
    
    should return 6.
    
    Because, can be split into six groups: 
    [1], [5, 4], [9, 8, 7], [12], [13], [14]

    Given A = [4, 3, 2, 6, 1] should return 1. Can NOT be split into smaller groups!

*/

console.log('// REORDERING GROUPS //');

function reOrderingGroup(A: number[]): number {

    return 0;
}

function reOrderingGroupTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('=>', reOrderingGroup(A));
    console.log('\n--------------------------------------\n');
}

reOrderingGroupTest([1, 5, 4, 9, 8, 7, 12, 13, 14]);