/*

    https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

    Rotate an array to the right by a given number of steps

*/

class Arrays2 {

    static cyclicRotation(A: number[], K: number): number[] {

        K = (A.length > K) ? K : K % A.length;

        var d = A.slice(0, A.length - K);
        var e = A.splice(A.length - K);
        return e.concat(d);

    }

}


class Arrays2Test {

    constructor() {

        console.log('// CYCLIC ROTATION //');

        // TEST 1
        this.exec([5, -1000], 1);

    }

    exec(A: number[],  K: number) {
        const result = Arrays2.cyclicRotation(A, K);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }
}

new Arrays2Test();