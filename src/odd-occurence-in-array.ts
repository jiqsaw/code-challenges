/*

    https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

    Find value that occurs in odd number of elements.

*/

class Arrays {

    static oddOccurrencesInArray(A: number[]): number {

        return A.reduce((x, y) => {
            return x ^ y;
        })

    }

}


class ArraysTest {

    constructor() {

        console.log('// ODD OCCURRENCES IN ARRAY //');

        // TEST 1
        this.exec([9, 3, 9, 3, 9, 7, 9]);

    }

    exec(A: number[]) {
        const result = Arrays.oddOccurrencesInArray(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }
}

new ArraysTest();