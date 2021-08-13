function solution(A, X, Y) {

    let totalCost = 0;

    let sorted = A.sort((a, b) => a - b);

    let sIndex = 0;
    let lastIndex = A.length;
    while (sIndex < lastIndex) {

        tmpSum = 0;
        let i = sIndex;
        let max = sorted[lastIndex - 1];
        console.log('max:', max)

        while (tmpSum < max && i < lastIndex - 1) {
            tmpSum += A[i];
            i++;
        }


        console.log('tmpSum:', tmpSum)
        if (tmpSum >= max) {
            if (Y < ((i + 1) * X)) {
                totalCost += Y;
                sIndex = i;
                const extra = tmpSum - max;
                if (extra > 0) {
                    sorted = [extra, ...sorted];
                    sIndex -= 1;
                }
            } else {
                totalCost += X;
            }
        } else {
            totalCost += X < Y ? X : Y;
        }

        lastIndex--;


    }


    return totalCost;


}


test(
    [5, 3, 8, 3, 2],
    2,
    5
);

// 7

// test(
//     [4, 2, 7],
//     4,
//     100
// );

// // 12 

// test(
//     [2, 2, 1, 2, 2],
//     2,
//     3
// );

// // 8


// test(
//     [4, 1, 5, 3],
//     5,
//     2
// );

// 4



function test(...params) {
    console.log(solution(...params))
}
