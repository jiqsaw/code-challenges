/*

    https://app.codility.com/programmers/lessons/1-iterations/

    Find longest sequence of zeros in binary representation of an integer.

*/

console.log('// BINARY GAP //');

function solution(N) {
        
    let b = N.toString(2);

    for (let i = b.length - 2; i > 0; i--) {

        let zeros = padZero(i);
        if (b.indexOf(zeros) !== -1) {
            return i;
        }

    }

    return 0;

}

function padZero(len) {
    let s = '';
    for (let i = 0; i < len; i++) {
        s = s + '0';
    }
    return '1' + s + '1';
}


test(1041)
// 5






function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
