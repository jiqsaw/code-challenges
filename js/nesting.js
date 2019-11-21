/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

    Nesting
    Determine whether a given string of parentheses (single type) is properly nested.

*/

console.log('NESTING');

function solution(S) {
    let temp = '';
    while (S !== '') {
        temp = S.replace(/\(\)|(\(\(\)\))|(\(\(\(\)\)\))/g, '');
        if (temp === S) {
            return 0;
        }
        S = temp;
    }
    return 1;
}


test('(()(())())');
// 1

test('())');
// 0


function test(...params) {
    console.log('\n(  ', ...params, '  )');
    console.log('\n=>', solution(...params), '\n\n');
}

