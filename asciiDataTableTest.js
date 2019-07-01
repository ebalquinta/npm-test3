let AsciiTable = require('ascii-data-table').default;

// or if installed by cloning git repo, use the correct path
//var AsciiTable = require('lib/ascii-data-table').default

let items = [
    ['x', 'y'],
    ['a', 'b'],
    ['c', 'd']
];

let res = AsciiTable.table(items);
console.log(res);