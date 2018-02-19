/*

    https://app.codility.com/programmers/lessons/6-sorting/triangle/
    
    Determine whether a triangle can be built from a given set of edges.

*/

console.log('// TRIANGLE //');

// function triangle(A: number[]): number {

//     let i = 0;
//     let len = A.length;

//     while (i < len) {

//         let p = A[i];

//         console.log('\n p: ', p)

//         let j = 0;
//         while (j < len - 1) {

//             if (i !== j) {

//                 let q = A[j];
//                 console.log('  q: ', q)

//                 if (A.filter((r, k) => k !== j && k !== i &&
//                     (p + q > r) && (p + r > q) && (q + r > p)
//                 ).length > 0) {

//                     return 1;
//                 }
//                 // let k = j + 1;

//                 // while (k < len) {

//                 //     let r = A[k];
//                 //     console.log('    r: ', r)

//                 //     if ((k !== j) && (k !== i)) {

//                 //         if ((p + q > r) && (p + r > q) && (q + r > p)) {
//                 //             console.log(`p: ${p}  -  q: ${q}  -  r: ${r} \n`)
//                 //             return 1
//                 //         }

//                 //     }
//                 //     k++;

//                 // }

//             }

//             j++;
//         }

//         i++;
//     }

//     return 0;

// }


function triangle(A: number[]): number {

    let i = 0;
    let len = A.length;

    while (i < len) {

        let p = A[i];

        console.log('\n p: ', p)

        let j = 0;
        while (j < len - 1) {

            if (i !== j) {
                let q = A[j];

                // let r = 
                if (q < ((p + q) + q)) {
                    return 1;
                }

            }

            j++;
        }

        i++;
    }

    return 0;

}

function triangleTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('\n=>', triangle(A));
    console.log('\n--------------------------------------\n');
}


triangleTest([10, 2, 5, 1, 8, 20]);
// 1

triangleTest([10, 50, 5, 1]);
// 0

triangleTest([5, 3, 3]);
// 1

/*



x + y > z,
y + z > x,
z + x > y.

z < x + y



?? 10 + 2 > X
?? 10 + x > 2

formula;

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].

10, 5, 8
10 +  5 = 15 >  8
 5 +  8 = 13 > 10
 8 + 10 = 18 >  5

3, 5, 3
3 + 5 > 3
5 + 3 > 3
3 + 3 > 5

p = p
q = r + int(p / r) + 1
r = p / 2



 */