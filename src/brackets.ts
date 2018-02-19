/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
    
    Determine whether a given string of parentheses (multiple types) is properly nested.

*/

console.log('// BRACKETS //');

function brackets(S: string): number {

    if (S.length === 0) return 1;
    if (S.length % 2 !== 0) return 0;

    // let reg = /\(([^)]+)\)|\{([^}]+)\}|\[([^]]+)\]/g;
    // return reg.test(S) ? Number(S.match(reg).toString() === S) : 0;

    let i = 0;    
    let sArr = S.split('');
    let len = sArr.length;

    while (i < sArr.length) {
        if (sArr[i] === '(') { if ((sArr.lastIndexOf(')') < i) || ((sArr.lastIndexOf(')') - i) - 1 % 2 !== 0)) return 0; }
        // if (sArr[i] === ')') { if (sArr.lastIndexOf(')') < i) return 0; }
        if (sArr[i] === '{') { if ((sArr.lastIndexOf('}') < i) || ((sArr.lastIndexOf('}') - i) - 1 % 2 !== 0)) return 0; }
        // if (sArr[i] === '}') { ((f (sArr.lastIndexOf(')') < i) return 0; } - 1
        if (sArr[i] === '[') { if ((sArr.lastIndexOf(']') < i) || ((sArr.lastIndexOf(']') - i) - 1 % 2 !== 0)) return 0; }
        // if (sArr[i] === ']') { if (sArr.lastIndexOf(')') < i) return 0; }
        i++;
    }
    return 1;
}

function cleanS(S: string): string {
    // let filtered = S.replace(/()/g, '').replace(/{}/g, '').replace(/[]/g, '')

    let f = S.replace(/()/g, '');
    console.log(f)
    return '3';
    // let index1 = filtered.indexOf('()');
    // let index2 = filtered.indexOf('{}');
    // let index3 = filtered.indexOf('[]');

    // if ((index1 !== -1) || (index2 !== -1) || (index3 !== -1)) {
    //     return cleanS(filtered);
    // }
    // return filtered;
}

function bracketsTest(S: string) {
    console.log('\n(', S, ')\n');
    console.log('\n=>', brackets(S));
    console.log('\n--------------------------------------\n');
}



// TEST 2
bracketsTest('{[()()]}');
// // 1

bracketsTest('([)()]');
// // 0

bracketsTest('');
// // 1

bracketsTest(')(');
// 0

bracketsTest('({{({}[]{})}}[]{})');
// 1