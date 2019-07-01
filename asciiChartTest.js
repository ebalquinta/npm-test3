let argumentos = process.argv.slice(2);

console.log(argumentos);

let asciichart = require('asciichart');
let s2 = new Array(120);
// for (let i = 0; i < s2.length; i++)
//     s2[i] = 15 * Math.sin(i * ((Math.PI * 4) / s2.length));

s2[0] = Math.round(Math.random() * 15)
for (i = 1; i < s2.length; i++)
    s2[i] = s2[i - 1] + Math.round(Math.random() * (Math.random() > 0.5 ? 2 : -2))
console.log(asciichart.plot(s2));