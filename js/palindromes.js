/*

    Palindromes
    A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam, racecar, or the number 10801.

    What is the sum of all numeric palindromes that are less than 10,000?

*/

console.log('');

function solution() {


    var max = 10000;
    max = Math.ceil(max.toString().length / 2)
    var sum = 0;
    var i = 1;
    var len = 999;
    while (i <= 99) {


        if (i < 10) {
            sum += i;
            console.log(i);

        } else {

            const f = i.toString().charAt(0);
            const s = i.toString().charAt(1);

            if (f === s) {
                sum += i;
                console.log(i);

            }

            console.log(Number(i.toString() + f.toString()))
            console.log(Number(i.toString() + s.toString() + f.toString()))

            sum += Number(i.toString() + f.toString());
            sum += Number(i.toString() + s.toString() + f.toString());

        }

        console.log('---');

        i++;
    }

    return sum;

}

test();
//



function test(params) {
    console.log('\n(', params, ')\n');
    console.log('\n=>', solution(params), '\n\n');
}