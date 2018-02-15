console.log('// MAX COUNTERS //\n\n');
/*

    https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

    Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

*/


function maxCounters(N: number, A: number[]) {

    var counter = new Array(N);
    let i = 0;

    while (i < N) {
        counter[i] = 0;
        i++;
    }

    // A = A.filter(e => (e <= A.length) || (e === N + 1));

    let currMax = 0;
    let lastMax = 0;
    let threshold = N + 1;

    i = 0;
    while (A[i]) {
        const element = A[i];

        if (element < threshold) {

            if (counter[element - 1] < lastMax) {
                counter[element - 1] = lastMax + 1;
            }
            else {
                counter[element - 1]++;
            }

            if (counter[element - 1] > currMax) {
                currMax = counter[element - 1];
            }

        } else {
            lastMax = currMax;
        }

        i++;
    }

    let j = 0;
    while (j < N) {
        if (counter[j] < lastMax) counter[j] = lastMax;
        j++
    }

    return counter;

}

function maxCountersTest(N: number, A: number[]) {
    console.log('\n(', N, A, ')\n');
    console.log('\n=>', maxCounters(N, A));
    console.log('\n--------------------------------------\n');
}

maxCountersTest(5, [3, 4, 4, 6, 1, 4, 4]);

maxCountersTest(1, [2, 1, 1, 2, 1]);

maxCountersTest(1, [1]);