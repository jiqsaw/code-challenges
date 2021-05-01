/*

    Q2

            |            
    |       |
    | |     |
    | | |   | 
    | | | | |
    | | | | |

*/

function solution(A) {

    let i = 1;
    let len = A.length;
    count = 0;

    while (i < len - 1) {

        let prev = A[i - 1];
        let curr = A[i];
        let next = A[i + 1];

        console.log('curr:', curr)

        if ((curr < prev) && (curr > next)) {
            if (A[i + 2]) {
                if (next > A[i + 2]) {
                    A[i] = next - 1;
                } else {
                    A[i] = prev + 1;
                }
            }
            count++;
        } else if ((curr > prev) && (curr < next)) {
            if (A[i + 2]) {
                if (next > A[i + 2]) {
                    A[i] = prev - 1;
                } else {
                    A[i] = next + 1;
                }
            }
            count++;
        }

        console.log('A', A)

        i++;
    }

    return count;
}


test([1, 4, 1]);
// 0

test([3, 7, 4, 5]);
// 0

test([5, 4, 3, 2, 6]); // 2
// 1

test([5, 4, 3, 6, 5]); // 6
// 1

test([3, 5, 7, 8]); // 8
// 1

test([3, 5, 7, 6]); // 2
// 1

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}

