/*

    https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/

    Find a maximum sum of a compact subsequence of array elements.

*/

class MaximumSlice{

    static maxSliceSum(A: number[]) {
        let B = [];
        let maxTotal = 0;
    
        for (var i = 0; i < A.length; i++) {
            for (var j = i; j < A.length; j++) {
                B = A.slice(i, j + 1);
                let t = this.slicedTotal(B)
                if (t > maxTotal)
                    maxTotal = t;
            }
        }
    
        return maxTotal;
    }

    static slicedTotal(A: number[]) {
        return A.reduce((x, y) => x + y);
    }
    

}

class MaximumSliceTest {

    constructor() {

        console.log('// MAX SLICE SUM //');

        // TEST 1
        this.exec([3, 2, -6, 4, 0]);
    }

    exec(A: number[]) {
        const result = MaximumSlice.maxSliceSum(A);

        console.log('');
        console.log('(', A, ')');
        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new MaximumSliceTest();