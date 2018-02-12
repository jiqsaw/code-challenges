/*

    https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

    Check whether array A is a permutation.

*/

class CountintElements {

    static permCheck(A: number[]) {
        
        A = A.sort((a, b) => a - b);
        for (var i = 0; i < A.length; i++) {
            if (A[i] != i + 1) {
                return 0;
            }
        }
    
        return 1 ;

    }


}

class CountintElementsTest {

    constructor() {

        console.log('// PERM CHECK //');

        // TEST 1
        this.exec([3, 2, 3, 2]);
    }

    exec(A: number[]) {
        const result = CountintElements.permCheck(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new CountintElementsTest();