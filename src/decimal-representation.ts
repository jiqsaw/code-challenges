/*

    A[0] = 3
    A[1] = 5
    A[2] = 1

    represents the number V = 153;

    Write a function that should return 9, because:

    - array A represents the number 153,
    - 17 * 153 = 2601 (17 is given)
    - the sum of the digits in the decimal representation of 2601 is 2 + 6 + 0 + 1 =9

*/

class DecimalRepresentation {

    static solution(A: number[]): number {

        let newNumber = 17 * Number(A.reverse().toString().replace(/,/g, ''));

        let total = 0;
        newNumber.toString().split('').map(e => total += Number(e));
        return total;
    }

}

class DecimalRepresentationTest {

    constructor() {

        console.log('// DECIMAL REPRESENTATION //');

        // TEST 1
        this.exec([3, 5, 1]);
    }

    exec(A: number[]) {
        const result = DecimalRepresentation.solution(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new DecimalRepresentationTest();