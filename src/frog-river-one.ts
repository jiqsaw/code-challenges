/*

    https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

    Find the earliest time when a frog can jump to the other side of a river.

*/

class CountintElements2 {

    static frogRiverOne(X: number, A: number[]): number {

        var leaves = [];
        var i = 0;
        var result = -1;
    
        for (i = 0; i < A.length; i++) {
            if (typeof leaves[A[i]] == 'undefined') {
                leaves[A[i]] = i;
            }
        }
    
        if (leaves.length <= X) {
            return -1;
        }
    
        for (i = 1; i <= X; i++) {
            if (typeof leaves[i] == 'undefined') {
                return -1;
            } else {
                result = Math.max(result, leaves[i]);
            }
        }
    
        return result;

    }


}

class CountintElements2Test {

    constructor() {

        console.log('// FROG RIVER ONE //');

        this.exec(5, [1, 3, 1, 4, 2, 3, 5, 4]);

    }

    exec(X: number, A: number[]) {
        const result = CountintElements2.frogRiverOne(X, A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new CountintElements2Test();