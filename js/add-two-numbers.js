/*

    3. stage

       65
       55
    +----
      120

    5 + 5 = 10 take 0 carry 1 -- 0
    6 + 5 = 11 take 1 plus carried one = 2 and carry 1 -- 20
    finalise > 120

*/

// SOLUTION 1 (by string and carry one)

function numberOfCarryOperations(A, B) {

    var a = A.toString()
    var b = B.toString()

    a = a.padStart(b.length, '0');
    b = b.padStart(a.length, '0');

    var result = '';

    var i = a.length - 1;

    while (i >= 0) {

        let total =
            Number(a.charAt(i)) +
            Number(b.charAt(i)) +
            Number(result.charAt(0));

        result = String(total).padStart(2, '0') + result.slice(1);

        i--;
    }

    return Number(result);
}


// SOLUTION 2 (by numbers)

// function numberOfCarryOperations(A, B) {

//     var a = A.toString()
//     var b = B.toString()

//     a = a.padStart(b.length, '0');
//     b = b.padStart(a.length, '0');

//     var i = a.length - 1;
//     var m = 1;
//     var total = 0;
//     while (i >= 0) {

//         total +=
//             (Number(a.charAt(i)) + Number(b.charAt(i))) * m;

//         i--;
//         m *= 10;
//     }

//     return total;
// }


test(65, 55);
// 120

test(145, 55);
// 200

test(14, 5);
// 19

test(1, 1);
// 2

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', numberOfCarryOperations(...params), '\n\n');
}

// https://leetcode.com/problems/add-two-numbers-ii/