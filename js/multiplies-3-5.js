console.log('// MULTIPLIES of 3 and 5//');

/*
    https://projecteuler.net/problem=1

    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
*/


function solution() {

    let total = 3 + 5;
    for (let i = 6; i < 1000; i++) {
        
        if ((i % 3 === 0) || (i % 5 === 0)) {
            total = total + i;
        }
    }

    console.log(total);

}

solution();