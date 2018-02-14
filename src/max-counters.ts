console.log('// MAX COUNTERS //\n\n');
/*

    https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

    Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

*/


function maxCounters(N: number, A: number[]) {

    let temp: number[] = [];
    for (let index = 0; index < N; index++) {
        temp[index] = 0
    }

    A = A.filter(e => e <= A.length);

    let i = 0;
    while (A[i]) {
        const element = A[i];

        if (element === N + 1) {
            let max = Math.max(...temp);
            temp = temp.map(() => max);
        }
        else {
            temp[element - 1]++;
        }

        i++;
    }

    return temp;

}

function maxCountersTest(N: number, A: number[]) {
    console.log('\n(', N, A, ')\n');
    console.log('\n=>', maxCounters(N, A));
    console.log('\n--------------------------------------\n');
}

maxCountersTest(5, [3, 4, 4, 6, 1, 4, 4]);

maxCountersTest(1, [1]);