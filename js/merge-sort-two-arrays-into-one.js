/*

    Merge and sort pre-sorted array into one array

*/


const l1 = [4, 5, 6, 8, 9, 10];
const l2 = [1, 2, 3, 9];
const l3 = [];

let i1 = 0;
let i2 = 0;

while (l3.length < l1.length + l2.length) {
  const a = l1[i1];
  const b = l2[i2];

  if (a <= b) {
    l3.push(a);
    i1++;
  } else {
    l3.push(b);
    i2++;
  }

  if (l1.length === i1) {
    l3.push(...l2.slice(i2));
  } else if (l2.length === i2) {
    l3.push(...l1.slice(i1));
  }
}

console.log(l3);
