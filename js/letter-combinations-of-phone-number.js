/*


    https://leetcode.com/problems/letter-combinations-of-a-phone-number/

*/


function solution(digits) {

    if (digits.length === 0) return []
    else if (digits.length === 1) return map(digits[0])

    prev = map(digits[0])
    console.log('prev:', prev)
    // loop on all tree levels
    for (let i = 1; i < digits.length; i++) {
        next = []
        currDigits = map(digits[i])
        console.log('currDigits:', currDigits)
        // loop on previous level
        for (let j = 0; j < prev.length; j++) {
            // loop on current level
            for (let k = 0; k < currDigits.length; k++) {
                next.push(prev[j] + currDigits[k])
            }
        }

        console.log('next:', next)
        prev = next
        console.log('prev:', prev)
        console.log('--------');
        
    }
    return prev
};

function map(d) {
    return {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }[d]
}



test('234');
// 



function test(params) {
    console.log('\n(', params, ')\n');
    console.log('\n=>', solution(params), '\n\n');
}