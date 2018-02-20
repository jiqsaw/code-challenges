/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
    
    Determine whether a given string of parentheses (multiple types) is properly nested.

*/

console.log('// BRACKETS //');

function brackets(S: string): number {



    // console.log(S.split(''));

    // let reg = /\(([^)]+)\)|\{([^}]+)\}|\[([^]]+)\]/g;
    // return reg.test(S) ? Number(S.match(reg).toString() === S) : 0;

    return Number(cleanS(S, S.length));
}

function cleanS(S: string, len: number): boolean {

    let regex1 = new RegExp('(', 'g');
    // let regex2 = new RegExp('{}', 'g');
    // let regex3 = new RegExp('[]', 'g');

    S = S.replace(regex1, '');
    // S = S.replace(regex2, '');
    // S = S.replace(regex3, '');

    console.log('f', S)
    return false;

// let filtered = S;
//     // let filtered = S.split('()').join('').split('{}').join('').split('[]').join('');

//     // console.log(filtered);

//     if (filtered.length === 0) return true;
//     if (filtered.length === 1) return false;
//     if (filtered.length % 2 !== 0) return false;

//     if (filtered.substr(0, 1) === ')' || filtered.substr(0, 1) === '}' || filtered.substr(0, 1) === ']')
//         return false;
//     if (filtered.substr(filtered.length - 1, 1) === '(' || filtered.substr(filtered.length - 1, 1) === '{' || filtered.substr(filtered.length - 1, 1) === '[')
//         return false;
//     if (filtered.length === len) {
//         return false;
//     } else if (filtered.length > 1) {
//         console.log('occurrrr')
//         return cleanS(filtered, filtered.length);
//     } else {
//         return true;
//     }
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