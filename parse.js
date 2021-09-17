onst tokenize = (str) => str
	.replace(/\(/g, '( ')
	.replace(/\)/g, ' )')
	.split(' ')

const astFromArray = (tokens, ast = [[]]) => {

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

	return astFromArray(tokens, ast)
}

const parse = (str) => {
	return astFromArray(tokenize(str))
}

module.exports = {
	parse
}
