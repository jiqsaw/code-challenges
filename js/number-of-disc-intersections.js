/*


    https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/

*/

console.log('');

function solution(A) {

    let i = 0;
    let len = A.length;
    let count = 0;

    let arr = [];
    // let arr2 = [];

    while (i < len) {

        arr.push([i - A[i], i + A[i]]);

        i++;
    }

    // console.log('arr', arr)
    // console.log('-----')


    i = 0;
    len = arr.length;
    let j = 0;
    while (i < len) {

        // console.log('i', arr[i])

        j = i + 1;
        while (j < len) {

            if (
                ((arr[j][0] >= arr[i][0]) && (arr[j][0] <= arr[i][1])) ||
                ((arr[j][1] <= arr[i][1]) && (arr[j][1] >= arr[i][0])) ||
                ((arr[i][0] >= arr[j][0]) && (arr[i][0] <= arr[j][1])) ||
                ((arr[i][1] <= arr[j][1]) && (arr[i][1] >= arr[j][0]))                
            ) {
                // arr2.push(arr[j]);
                count++;
                isMet = true;

                // console.log('arr2push', arr[j]);
            }

            j++;
        }

        isMet = false;
        i++;

        // console.log('....')

        if (count > 10000000) {
            return -1;
        }

    }

    // console.log('arr2', arr2)

    return count;
}



test([1, 5, 2, 1, 4, 0]);
// 11



function test(params) {
    console.log('\n(', params, ')\n');
    console.log('\n=>', solution(params), '\n\n');
}