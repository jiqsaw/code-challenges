/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

    Cover "Manhattan skyline" using the minimum number of rectangles.

*/

console.log('STONE WALL');


function solution(H) {

    let i = 0;
    let len = H.length;

    let stones = [];
    let inUse = 0;

    while (i < len) {

        let value = H[i];

        if (stones[value] === 1) {
            inUse++;
        }

        // if (value < stones.length - 1) {
            stones.splice(value)
        // }

        stones[value] = 1;

        console.log('inUse', inUse)
        console.log('stones:', stones)
        console.log('--------------------')

        i++;

    }

    return len - inUse;
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



















// function solution(H) {

//     // if (H.length < 1) return 0;
//     // if (H.length === 1) return 1;

//     let i = 0;
//     let n = 0;
//     let len = H.length;
//     let count = 0;

//     while (i < len - 1) {

//         console.log(H[i])

//         n = i + 1;
//         while (n < len) {

//             console.log('n: ', n, H[n])

//             if (H[n] < H[i]) {
//                 break;
//             }
//             if (H[n] === H[i]) {
//                 count++;
//                 console.log('count:', count)
//                 break;
//             }
//             n++;

//         }
//         i++;

//         console.log('------')
//     }



//     return H.length - count;
// }


// function solution(H) {

//     let i = 1;
//     let len = H.length;

//     let walls = [H[0]];
//     let inUse = 0;

//     while (i < len) {

//         let value = H[i];
//         let j = 0;
//         let lw = walls.length;
//         let w2 = [];

//         while (j < lw) {
//             if (walls[j] === value) {
//                 inUse++;
//             } else if (walls[j] < value) {
//                 w2.push(walls[j])
//             }
//             j++;
//         }
//         w2.push(value);
//         walls = w2;

//         console.log(value)
//         console.log('inUse', inUse)
//         console.log('walls:', walls)
//         console.log('--------------------')

//         i++;

//     }

//     return len - inUse;
// }











// function solution(H) {

//     let i = 1;
//     let len = H.length;

//     let stones = [H[0]];
//     let inUse = 0;

//     while (i < len) {

//         let value = H[i];

//         if (stones.indexOf(value) !== -1) {
//             inUse++;
//         }

//         // let lw = stones.length;
//         // let j = 0;
//         // while (j < lw) {
//         //     if (stones[j] === value) {
//         //         inUse++;
//         //     }
//         //     j++;
//         // }

//         stones = [
//             ...stones.filter(e => e < value),
//             value
//         ]

//         console.log(value)
//         console.log('inUse', inUse)
//         console.log('stones:', stones)
//         console.log('--------------------')

//         i++;

//     }

//     return len - inUse;
// }