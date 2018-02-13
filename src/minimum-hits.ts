/*

    T: Given an array of points A, representing the lcations of the obstacles, 
    returns the minimal number of hit

    A[0].x = -1     A[0].y = -2
    A[1].x =  1     A[1].y =  2
    A[2].x =  2     A[2].y =  4
    A[3].x = -3     A[3].y =  2
    A[4].x =  2     A[4].y = -2

    should return 4.

*/

class MinimumHits {

    static solution(A: Array<string[]>): number {


        let LT: Array<string[]> = [];
        let RT: Array<string[]> = [];
        let LB: Array<string[]> = [];
        let RB: Array<string[]> = [];

        for (const i of A) {

            let x = Math.sign(Number(i[0]));
            let y = Math.sign(Number(i[1]));

            if (x === -1 && y === -1) {
                if (!this.checkPath(LB, i)) {
                    LB.push(i);
                }
            }
            if (x === -1 && y === 1) { 
                if (!this.checkPath(LT, i)) {
                    LT.push(i);
                }                
             }
            if (x === 1 && y === -1) { 
                if (!this.checkPath(RB, i)) {
                    RB.push(i);
                }                
             }
            if (x === 1 && y === 1) { 
                if (!this.checkPath(RT, i)) {
                    RT.push(i);
                }                
             }

        }

        return LT.length + RT.length + LB.length + RB.length;
    }

    static checkPath(arr: Array<string[]>, value: string[]): boolean {

        for (const key in arr) {
            let arrX = Math.abs(Number(arr[key][0]));
            let arrY = Math.abs(Number(arr[key][1]));

            let bigX = Math.max(arrX, Number(value[0]));
            let smallX = Math.min(arrX, Number(value[0]));

            let bigY = Math.max(arrY, Number(value[1]));
            let smallY = Math.min(arrY, Number(value[1]));            

            if ((bigX % smallX === 0) && (bigY % smallY === 0)) {
                return true;
            }
        }

        return false;

    }

}



class MinimumHitsTest {

    constructor() {

        console.log('// MINIMUM HIT //');

        // TEST 1
        this.exec([
            ['-1', '-2'],
            ['1', '-2'],
            ['2', '4'],
            ['-3', '2'],
            ['2', '-2']
        ]);
    }

    exec(A: Array<string[]>) {
        const result = MinimumHits.solution(A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new MinimumHitsTest();