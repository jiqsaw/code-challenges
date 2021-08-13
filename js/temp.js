
function fn(d) {
    
    let total = 0;

    for (let g = 10; g <= 20; g++) {

        let count = 0;
        const n = g;
        const arrN = n.toString().split('');
        for (let i = 0; i < arrN.length; i++) {
            for (let j = i + 1; j <= arrN.length; j++) {
                const value = Number(arrN.slice(i, j).join(''));
                console.log('value:', value)
                if (value % 3 === 0) {
                    console.log('>>>>>>>>>', value)
                    count++;
                }
            }
            // console.log('---');
        }
        console.log('---');

        if (count % 3 === 0) {
            total++;
        }

    }
    return total;
}

console.log('COUNT: ', fn(2));



/*
2
25
257
2573


5
57
573

7
73

3
*/
