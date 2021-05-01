/*

    Q1

    A B C   D E F G   H I J
    _ _ _   _ _ _ _   _ _ _

*/

function solution(N, S) {

    let count = N * 2;

    let i = 1;
    while (i <= N) {

        const strPattern = `${i}A|${i}B|${i}C|${i}D|${i}E|${i}F|${i}G|${i}H|${i}I|${i}J`;
        let seats = S.match(new RegExp(strPattern, 'g'));

        if (seats !== null) {

            console.log('seats:', seats)

            count -= 2;

            if (seats.indexOf(i + 'B') === -1 &&
                seats.indexOf(i + 'C') === -1 &&
                seats.indexOf(i + 'D') === -1 &&
                seats.indexOf(i + 'E') === -1 &&
                seats.indexOf(i + 'F') === -1 &&
                seats.indexOf(i + 'G') === -1 &&
                seats.indexOf(i + 'H') === -1 &&
                seats.indexOf(i + 'I') === -1
            ) {
                count += 2;
            } else {

                if (
                    (
                        seats.indexOf(i + 'B') === -1 &&
                        seats.indexOf(i + 'C') === -1 &&
                        seats.indexOf(i + 'D') === -1 &&
                        seats.indexOf(i + 'E') === -1
                    ) ||
                    (
                        seats.indexOf(i + 'D') === -1 &&
                        seats.indexOf(i + 'E') === -1 &&
                        seats.indexOf(i + 'F') === -1 &&
                        seats.indexOf(i + 'G') === -1
                    ) ||
                    (
                        seats.indexOf(i + 'F') === -1 &&
                        seats.indexOf(i + 'G') === -1 &&
                        seats.indexOf(i + 'H') === -1 &&
                        seats.indexOf(i + 'I') === -1
                    )
                ) {
                    count += 1;
                }

            }
        }

        i++;
    }

    return count;
}




test(6, '1A 1G 2F 1C 2D 3B 3C 4B 1B 6D 6I');
// 10

// test(23, '1G 2F 3C 2C 17F 2D 2E 20B 2B 2G 2H 2J 5D 5H');
// 39

test(1, '');
// 2


// test(4, '4C 4F'); 
// 7

// test(2, '');
// 0

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}

