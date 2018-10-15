/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

    Cover "Manhattan skyline" using the minimum number of rectangles.

*/

console.log('STONE WALL');

function solution(H) {

    // if (H.length < 1) return 0;
    // if (H.length === 1) return 1;

    let i = 0;
    let n = 0;
    let len = H.length;
    let count = 0;
    
    while (i < len - 1) {

        n = i + 1;
        while (n < len) {

            if (H[n] < H[i]) {
                break;
            }
            if (H[n] === H[i]) {
                count++;
                break;
            }
            n++;

        }
        i++;
    }

    return H.length - count;
}

// test([1, 1, 1]);
// 1

// test([1]);
// 1

test([8, 8, 5, 7, 9, 8, 7, 4, 8]);
// 7

// test([3, 2, 1]);
// 3

// test([2, 3, 2, 1]);
// 3


function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}