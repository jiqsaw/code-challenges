/*

    https://app.codility.com/programmers/lessons/1-iterations/

    Find longest sequence of zeros in binary representation of an integer.

*/

class Iterations {

    static binaryGap(N: number) {
        
        let b = N.toString(2);

        for (var i = b.length - 1; i > 0; i--) {
    
            let zeros = this.padZero(i);
            if (b.indexOf(zeros) !== -1) {
                return i;
            }
    
        }
    
        return 0;

    }

    static padZero(len: number) {
        let s = '';
        for (var i = 0; i < len; i++) {
            s = s + '0';
        }
        return '1' + s + '1';
    }

}

class IterationsTest {

    constructor() {

        console.log('// BINARY GAP //');

        // TEST 1
        this.exec(1041);
    }

    exec(N: number) {
        const result = Iterations.binaryGap(N);

        console.log('');
        console.log('(', N, ')');
        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new IterationsTest();