console.log('// PASSING CARS //');

/*

    https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
    
    Count the number of passing cars on the road.


*/


function solution(A) {

    let counter = 0;
    let zeroCount = 0;
    let len = A.length;

    let i = A.indexOf(0);
    while (i < len) {

        if (A[i] === 0) {
            zeroCount++;
        } else {
            counter += zeroCount
            if (counter > 1000000000) { return -1; }
        }

        i++;
    }

    return counter;

}



test([0, 1, 0, 1, 1]);
// 5

test([0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1]);
// 22

test([1]);
// 0

test([1, 1]);
// 0








function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}