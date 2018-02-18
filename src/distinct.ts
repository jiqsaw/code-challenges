/*

    https://app.codility.com/programmers/lessons/6-sorting/distinct/

    Compute number of distinct values in an array.

*/

class Sorting {

    static distinct(A: number[]) {

        // return A.filter((e, i) => i === A.indexOf(e)).length;

        var seen: any = {};
        var count = 0;
        var len = A.length;
        var j = 0;
        for (var i = 0; i < len; i++) {
            var item = A[i];
            if (seen[item] !== 1) {
                seen[item] = 1;
                count++
            }
        }
        return count;

        // let B = [];
        // for (var key in A) {
        //     let element = A[key];
        //     if (B.indexOf(element) === -1)
        //         B.push(element);
        // }
        // return B.length;

    }

}

class SortingTest {

    constructor() {

        console.log('// DISTINCT //');

        // TEST 1
        this.exec([2, 1, 1, 2, 3, 1]);

    }

    exec(A: number[]) {
        const result = Sorting.distinct(A);

        console.log('');
        console.log('(', A, ')');
        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new SortingTest();