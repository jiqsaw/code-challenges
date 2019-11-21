/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

    StoneWall
    Cover "Manhattan skyline" using the minimum number of rectangles.

*/

console.log('STONE WALL');


// function solution(H) {

//     let i = 0;
//     let len = H.length;

//     let stones = [];
//     let inUse = 0;

//     while (i < len) {

//         let value = H[i];

//         if (stones[value] === 1) {
//             inUse++;
//         }

//         // if (value < stones.length - 1) {
//             stones.splice(value)
//         // }

//         stones[value] = 1;

//         console.log('inUse', inUse)
//         console.log('stones:', stones)
//         console.log('--------------------')

//         i++;

//     }

//     return len - inUse;
// }

function solution(H) {
    // write your code in JavaScript (Node.js 4.0.0)

    var counter = 0;
    var height = 0;
    var blocks = [];
    var i = 0;

    while (i < H.length) {
        console.log(i);
        console.log('value: ', H[i])
        if (H[i] > height) {
            var newBlock = H[i] - height;
            blocks.push(newBlock);
            height += newBlock;
            counter++;
            i++;
        } else if (H[i] < height) {
            var lastBlock = blocks.pop();
            height -= lastBlock;
        } else {
            i++;
        }


        console.log('blocks:', blocks)
        console.log('height:', height)
        console.log('counter:', counter)
        console.log('--------------------')
    }

    return counter;
}



test([1, 1, 1]);
// 1

test([1]);
// 1

test([1, 2, 3, 3, 2, 1]);
// 3

test([8, 8, 5, 7, 9, 8, 7, 4, 8]);
// 7

test([3, 2, 1]);
// 3

test([2, 3, 2, 1]);
// 3

test([2, 5, 1, 4, 6, 7, 9, 10, 1]);
// 8

test([4, 1, 2, 3, 1]);
// 4


function test(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}










