const readline = require('readline')
const { parse } = require('./parse')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const evaluate = (str) => {
	return parse(str)
}

const repl = () => {
	rl.question('node-lisp-parser> ', (input) => {
		console.log(input)
		console.log(evaluate(input))
		repl()
	})
}

repl()
