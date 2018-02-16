/*

    https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
    
    Count the number of passing cars on the road.


*/

console.log('// PASSING CARS //');

function passingCars(A: number[]): number {

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

        // SOLUTION FASTER (100%)
        // if (A[i] === 0) {
        //     zeroCount++;
        //     i++;
        // } else {

        //     let next = A.indexOf(0, i) == -1 ? A.length : A.indexOf(0, i);

        //     counter += zeroCount * (next - i)

        //     if (next >= A.length - 1) break;
        //     else i = next;
        // }
    }

    return counter;

}


function passingCarsTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('\n=>', passingCars(A));
    console.log('\n--------------------------------------\n');
}


passingCarsTest([0, 1, 0, 1, 1]);
// 5

passingCarsTest([0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1]);
// 22

passingCarsTest([1]);
// 0

passingCarsTest([1, 1]);
// 0