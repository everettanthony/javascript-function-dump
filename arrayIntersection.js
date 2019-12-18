const arrayIntersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

const arrA = [9,12,14,17,28,45];
const arrB = [9,28,34,38,40,45];

console.log(arrayIntersection(arrA,arrB));