/*

    https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
    
    Count the number of passing cars on the road.


*/

console.log('// PASSING CARS //');

function passingCar(A: number[]): number {

    let list = [];
    let i = 0;
    while (i < A.length) {
        
        let j = i;
        while (j < A.length) {
        
            if (A[j]) {
                list.push([A, j])
            }
            
            j++;
        }
        
        i++;
    }
    
    return A.length;

}


function passingCarTest(A: number[]) {
    console.log('\n(', A, ')\n');
    console.log('\n=>', passingCar(A));
    console.log('\n--------------------------------------\n');
}


passingCarTest([0, 1, 0, 1, 1]);
