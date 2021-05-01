/*

    Travel Favourite

*/

// function solution(A, B, C) {

//     let i = 0;
//     let len = A.length;
//     let count = 0;

//     while (i < len) {

//         let j = 0;

//         while (j < len) {

//             let y = 0;
//             while (y < len) {

//                 if ((A[i] < B[j]) && (B[j] < C[y])) {
//                     console.log('count:', count)
//                     count++;
//                 }
//                 console.log('--- ', i, j , y, ' ---')
//                 y++;
//             }
    
//             j++;
//         }
    
//         i++;
//     }

//     return count;
// }


function solution(A, B, C) {

    let i = 0;
    let len = A.length;
    let count = 0;
    let a = 0;
    let b = 0;
    let c = 0;

    while (i < len) {

        let j = 0;
        while (j < len) {

            // let y = 0;
            // while (y < len) {

                a = i;
                b = j;
                c = i;

            if ((A[a] < B[b]) && (B[b] < C[c])) {
                console.log('count:', count)
                count++;
            }
            console.log('--- ', i, j, i, ' ---')

            if ((i !== j)) {

                a = i;
                b = i;
                c = j;

                if ((A[a] < B[b]) && (B[b] < C[c])) {
                    console.log('count:', count)
                    count++;
                }

                a = i;
                b = j;
                c = j;

                if ((A[a] < B[b]) && (B[b] < C[c])) {
                    console.log('count:', count)
                    count++;
                }                

                console.log('--- ', i, i, j, ' ---')
                console.log('--- ', i, j, j, ' ---')
            }
            // y++;
            // }

            j++;
        }


        i++;
    }

    return count;
}


test([29, 50], [61, 37], [37, 70]);
// [1, 3, 2, 3, 0, 0, 0, 0, 0]

test([29, 29], [61, 61], [70, 70]);
// 8

test([5], [5], [5]);
// 0

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}


// A[0], B[0], C[0]
// A[0], B[0], C[1]
// A[0], B[1], C[0]
// A[0], B[1], C[1]

// A[1], B[0], C[0]
// A[1], B[0], C[1]
// A[1], B[1], C[0]
// A[1], B[1], C[1]

