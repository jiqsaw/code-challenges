// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

function solution(nums, x) {

    let count = 0;
    const len = nums.length;

    while ((x > 0) && (count <= len)) {

        const left = nums[0];
        const right = nums[nums.length - 1];

        if (left > x && right > x) {
            return -1;
        }

        if ((left >= right) && (left <= x)) {
            count++;
            x -= nums[0];
            nums.shift();
            console.log('numsSS:', nums)
        } else {
            count++;
            x -= nums[nums.length - 1];
            nums.pop();
            console.log('numsPP:', nums)
        }

        console.log('x: ', x, ' count: ', count)
    }

    if (x === 0) {
        return count;
    }

    return -1;

}

test([1, 1, 4, 2, 3], 5);

test([5, 6, 7, 8, 9], 4);

test([3, 2, 20, 1, 1, 3], 10);

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
