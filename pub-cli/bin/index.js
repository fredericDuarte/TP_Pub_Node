#!/usr/bin/env node
var program = require('commander');

program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-o, --open', 'Get the pubs Open list')
    .parse(process.argv);
if (program.list) {
    console.log(require('../src/main').getListPub());
}

if (program.open) {
    console.log(require('../src/main').getListOpen());
}