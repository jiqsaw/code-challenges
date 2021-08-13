// https://leetcode.com/problems/rabbits-in-forest/

function solution(answers) {

    const checked = [];

    let count = 0;

    for (let index = 0; index < answers.length; index++) {
        const element = answers[index];

        if (checked.indexOf(element) === -1) {
            count += element + 1;
            checked.push(element);
        }
        
    }

    return count;
}

test([1, 1, 2]);

test([10, 10, 10]);

test([]);

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}
