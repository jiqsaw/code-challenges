/*

    CountTriangles
    Count the number of triangles that can be built from a given set of edges.

    https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/

*/

function solution(A) {

    let i = 0;
    let len = A.length;
    let arr = [];

    let results = [];
    let count = 0;

    while (i < (len - 2)) {

        console.log(i)

        arr[0] = i;

        let j = i + 1;
        while (j < len) {

            console.log(j, ' j........ ')
            arr[1] = j;


            console.log('arr: ', arr)

            let y = j + 1;

            while (y < len) {

                arr[2] = y;

                if (
                    ((arr[0] + arr[1]) > arr[2]) &&
                    ((arr[1] + arr[2]) > arr[0]) &&
                    ((arr[2] + arr[0]) > arr[1])
                ) {
                    results.push([i, j, y]);
                    count++;
                }

                console.log('y: ', y, arr)
                y++;
            }

            j++;

        }


        i++;
    }

    console.log('result', results);

    return count;
}



test([10, 2, 5, 1, 8, 12]);
// 4



function test(params) {
    console.log('\n(', params, ')\n');
    console.log('\n=>', solution(params), '\n\n');
}