/*

    https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

    Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

*/

class CountingElements {

    static maxCounters(N: number, A: number[]) {

        let temp = [0, 0, 0, 0, 0]
        for (var key in A) {
            let element = A[key];
            if ((element >= 1) && (element <= N)) {
                temp[element - 1] = temp[element - 1] + 1;
    
            }
            else if (element === N + 1) {
                let max = Math.max.apply(Math, temp)
                temp = this.setAllValues(temp, max)
            }
        }
    
        return temp;

    }


    static setAllValues(arr: number[], value: number) {
        for (var key in arr)
            arr[key] = value;
    
        return arr;
    }
}

class CountingElementsTest {

    constructor() {

        console.log('// MAX COUNTERS //');

        // TEST 1
        this.exec(5, [3, 4, 4, 6, 1, 4, 4]);
    }

    exec(N: number, A: number[],) {
        const result = CountingElements.maxCounters(N, A);

        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new CountingElementsTest();