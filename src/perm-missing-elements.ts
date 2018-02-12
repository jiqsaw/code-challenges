/*
    https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

    Find the missing element in a given permutation.

*/



class TimeComplexity3 {

    static permMissingElem(A: number[]): number {

        let len = A.length;

        if (len <= 1) return 1;
    
        let max = len + 1;
        let total = A.reduce((x, y) => x + y);
        let missTotal = total - max;
        let actTotal = (len * (len + 1)) / 2;
        let o = actTotal - missTotal;
    
        return o;

    }

}


class TimeComplexity3Test {

    constructor() {

        console.log('// TAPE EQUILIBRIUM //');

        // TEST 1
        this.exec([1]);

    }

    exec(A: number[]) {
        const result = TimeComplexity3.permMissingElem(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }
}

new TimeComplexity3Test();
