const fs = require('fs');

let value = 1;

fs.readFile('README.md',  (err, data) => {
    console.log(err)
})
for (var i = 0; i < 10000000; i++) {
    value += i;
}

console.log('value', value)
