let regexp = /a*?/g;
let str = 'aaabb';
let array = [...str.match(regexp)];
console.log(array);