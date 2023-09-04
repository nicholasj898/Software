console.log(process.platform);
console.log(process.env.USERNAME);

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

//Sync === Blocking (will complete this before anything else)
const { readFile, readFileSync } = require('fs');
const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt)

console.log('do this first')

//Make it non-blocking (can do the bottom actions first) by a callback

readFile('./hello.txt', 'utf8', (err,txt) => {
    console.log(txt)
});

console.log('do this first')

//Modules. Modules are nothing more than a javascript file that exports its code
/*
const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
}
*/

const myModule = require('./my-module');

console.log(myModule)