let code = "(first (list 1 (+ 1 2) 9))"

const tokenize = (str) => str
	.replace(/\(/g, '( ')
	.replace(/\)/g, ' )')
	.split(' ')

const parse = (tokens, ast = [[]]) => {

	if (tokens.length == 0) {
		//POP! POP! 🙌
		return ast.pop().pop()
	}

	let token = tokens.shift()

	if (token == '(') {
		ast.push([])
	} else if (token == ')') {
		let list = ast.pop()
		ast[ast.length - 1].push(list)
	} else {		
		ast[ast.length - 1].push(token)
	}

	return parse(tokens, ast)
}

console.log(parse(tokenize(code)))
