/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

    Cover "Manhattan skyline" using the minimum number of rectangles.

*/

console.log('STONE WALL');


// remove next same items
function solution(H) {

    if (H.length < 1) return 0;
    if (H.length === 1) return 1;

    let i = 0;
    let B = [];

    while (i < H.length) {

        nextIndex = H.indexOf(H[i], i + 1);

        if (nextIndex !== -1) {
            
            B = H.slice(i, nextIndex);

            if (Math.min(...B) === H[i]) {
                H.splice(nextIndex, 1);
                i--;
            }

        }        

        i++;
    }

    return H.length;
}


// count unrequired previous items
function solution2(H) {

    if (H.length < 1) return 0;
    if (H.length === 1) return 1;

    let i = 1;
    let len = H.length;
    let sameCount = 0;

    let B = [];

    while (i < len) {

        if (H.slice(0, i).lastIndexOf(H[i]) !== -1) {
            
            B = H.slice(H.slice(0, i).lastIndexOf(H[i]), i);

            if (Math.min(...B) === H[i]) {
                sameCount++;
            }

        }

        i++;
    }

    return H.length - sameCount;
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