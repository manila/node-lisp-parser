const readline = require('readline')
const { parse } = require('./parse')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.setPrompt('node-lisp-parser> ')

rl.on('close', () => {
	console.log("")
})

rl.on('line', (input) => {
	console.log(parse(input))
	rl.prompt()
})

rl.prompt()
