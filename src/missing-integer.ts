/*

    https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

    Find the smallest positive integer that does not occur in a given sequence.

*/

class CountintElements3 {

    static missingInteger(A: number[]): number {

        let missing = 0;
        let condition = false;

        A = A.filter(e => e > 0).sort((a, b) => a - b);
        
        while (!condition) {
            missing++;
            condition = (A.indexOf(missing) === -1)
        }

        return missing;

    }


}

class CountintElements3Test {

    constructor() {

        console.log('// MISSING INTEGER //');

        // TEST 1
        this.exec([1, 3, 6, 4, 1, 2]);

        // TEST 2
        this.exec([-1, -3]);

        // TEST 3
        this.exec([1, 2, 3]);

        // TEST 4
        this.exec([2]);
    }

    exec(A: number[]) {
        const result = CountintElements3.missingInteger(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new CountintElements3Test();