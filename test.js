// let regexp = /a*?/g;
// let str = 'aaabb';
// let array = [...str.match(regexp)];



var template = 'the little cat cat cat cat cat cat2 is in the hat hat hat2, we like it.';
var regex =/(\w+)(\s(?<!\w)\1(?!\w))+/g;
console.log(template.replace(regex,'$1'));