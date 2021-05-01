console.log('// MISSING INTEGER //\n\n');

/*

    https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

    Find the smallest positive integer that does not occur in a given sequence.

*/


function solution(A) {

    let missing = 0;
    let condition = true;

    A = uniq(A.filter(i => i > 0)).sort((a, b) => a - b);
    console.log('A:', A)

    if (A[0] !== 1) { return 1; }

    if (A[A.length - 1] === A.length) { return A.length + 1; }

    while (condition) {
        missing++;
        condition = A[missing - 1] === missing;
    }

    return missing;

}


function uniq(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}


test([1, 3, 6, 4, 1, 2]);

test([-1, -3]);

test([1, 2, 3]);

test([2]);








function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}