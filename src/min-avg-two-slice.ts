/*

    https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
    
    Find the minimal average of any slice containing at least two elements.

*/

console.log('// MIN AVG TWO SLICE //');

function minAvgTwoSlice(A: number[]): number {

    let len = A.length;
    let resultIndex = 0;

    let minAvg = (A[0] + A[1]) / 2;

    for (let i = 0; i < len - 1; i++) {

        let currAvg = A[i];

        var str = '(' + currAvg;

        for (let j = i + 1; j < len; j++) {

            if ((j === i + 1) || (A[j] < minAvg)) {

                str += ' + ' + A[j];

                currAvg += A[j];
                let divide = (j - i + 1);

                if ((currAvg / divide) < minAvg) {
                    minAvg = (currAvg / divide);
                    resultIndex = i;
                }

                console.log(str + ') = ' + currAvg + '  /  ' + divide + ' >> ' + (currAvg / divide).toString().substr(0, 4))

            } else {
                j = len;
            }
        }

        console.log('---\nmin: ' + minAvg.toString().substr(0, 4) + ' i: ' + resultIndex + '\n\n')
    }

    return resultIndex;

}

function minAvgTwoSliceTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('\n=>', minAvgTwoSlice(A));
    console.log('\n--------------------------------------\n');
}


minAvgTwoSliceTest([4, 2, 2, 5, 1, 5, 8]);
// 1

minAvgTwoSliceTest([10, 10, -1, 2, 4, -1, 2, -1]);
// 5

minAvgTwoSliceTest([-3, -5, -8, -4, -10]);
// 2

minAvgTwoSliceTest([5, 6, 3, 4, 9]);
// 2


