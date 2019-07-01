let AsciiTable = require('ascii-data-table').default;

// or if installed by cloning git repo, use the correct path
//var AsciiTable = require('lib/ascii-data-table').default
let argumentos = process.argv.slice(2);

let items = [
    [argumentos[0], argumentos[1]],
    [argumentos[2], argumentos[3]],
    [argumentos[4], argumentos[5]]
];

let res = AsciiTable.table(items);
console.log(res);