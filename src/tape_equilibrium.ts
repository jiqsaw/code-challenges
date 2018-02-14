/*
    https://app.codility.com/programmers/lessons/3-time_complexity/

    Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
*/

class TimeComplexity {

    static tapeEquilibrium(A: any): number {

        var retval;

        var sumRight = A.reduce(function (pv: any, cv: any, idx: any) { return (idx > 0) ? pv + cv : 0; }, 0);
        var sumLeft = 0;
        var substractions = [];
        var maxI = A.length - 1;
    
        let min = null;
        
        for (var i = 0; i < maxI; i++) {
            sumLeft += A[i];
            let d = Math.abs(sumLeft - sumRight);
            min = min === null ? d : Math.min(min, d);
            if (i + 1 <= maxI) sumRight -= A[i + 1];
        }
    
        return min;

    }

}


class TimeComplexityTest {

    constructor() {

        console.log('// TAPE EQUILIBRIUM //');

        // TEST 1
        this.exec([-10, -5, -3, -4, -5]);

        // TEST 2
        this.exec([-1000, 1000]);
    }

    exec(A: number[]) {
        const result = TimeComplexity.tapeEquilibrium(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }
}

new TimeComplexityTest();


