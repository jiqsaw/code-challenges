/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

    Cover "Manhattan skyline" using the minimum number of rectangles.

*/

console.log('STONE WALL');

function solution(A) {

    if (A.length < 1) return 0;
    if (A.length === 1) return 1;

    let i = 0;
    let len = A.length;
    let min = A[0];
    let gap = 0;
    let blocks = 1;
    while (i < len) {
        if (A[i] < min) {
            min = A[i];
            blocks++;
        } else if (A[i] > min) {
            if (gap === 0) {
                gap = i;
            }
        }
        i++;
        
        if ((i === len) && (gap > 0) && (gap <= len)) {
            i = gap;
            gap = 0;
            min = A[i];
        }

        console.log('blocks', blocks, 'gap', gap, '=', A[gap]);
    }    
    console.log('blocks', blocks)
    return blocks;
}

// test([1]);
// 1

// test([8, 8, 5, 7, 9, 8, 7, 4, 8]);
// 7

// test([3, 2, 1]);
// 3

test([2, 3, 2, 1]);
// 3



function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}