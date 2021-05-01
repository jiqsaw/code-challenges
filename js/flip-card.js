// /*

//     Flip Cards

// */

// function solution(A, B) {

//     let i = 0;
//     let len = A.length;
//     let minIndex = -1;
//     let max = A[0];
//     while (i < len) {

//             if (A[i] !== B[i]) {
//                 if ((A[minIndex] > A[i]) || (minIndex === -1)) {
//                     minIndex = i;
//                 }
//             }

//             console.log('minIndex:', minIndex)
//             if (max < A[i]) {
//                 max = A[i];
//             }

//             console.log('mx', max);
            

//         i++;

//     }

//     return minIndex !== -1 ? A[minIndex] : (max + 1);
// }



// test([1, 2, 4, 3], [1, 3, 2, 3]);
// // 2

// test([3, 2, 1, 6, 5], [4, 2, 1, 3, 3]);
// // 3

// test([1, 2], [1, 2]);
// // 3


// function test(...params) {
//     console.log('\n(', ...params, ')\n');
//     console.log('\n=>', solution(...params), '\n\n');
// }