/*

    https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

    Count minimal number of jumps from position X to Y.

*/

class TimeComplexity2 {

    static frogJmp(X: number, Y: number, D: number) {
        return Math.ceil((Y - X) / D);
    }


}

class TimeComplexity2Test {

    constructor() {

        console.log('// FROG JMP //');

        // TEST 1
        this.exec(10, 85, 30);
    }

    exec(X: number, Y: number, D: number) {
        const result = TimeComplexity2.frogJmp(X, Y, D);

        console.log('');
        console.log('(', X, ',', Y, ',', D, ')');
        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new TimeComplexity2Test();