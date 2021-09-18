const readline = require('readline')
const { parse } = require('./lisp')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.setPrompt('node-lisp-parser> ')

rl.on('line', (input) => {
	console.log(parse(input))
	rl.prompt()
})

rl.on('close', () => {
	console.log("")
})

rl.prompt()
