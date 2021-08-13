
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

function solution(nums) {

    const output = [];

    for (let i = 1; i <= nums.length; i++) {
        
        if (nums.indexOf(i) === -1) {
            output.push(i);
        }
        
    }


    return output;
}

test([4, 3, 2, 7, 8, 2, 3, 1]);

test([1, 1]);

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
