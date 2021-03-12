class Node {
	constructor({ value, nextNode }) {
		if (!value) {
			throw new Error('missing params in node creation')
		}
		this.value = value
		this.nextNode = nextNode
	}
}

class Stack {
	constructor() {
		this.top = undefined
	}

	printTop() {
		console.log(this.top)
	}

	push(value) {
		const newNode = new Node({ value, nextNode: this.top })
		this.top = newNode
	}

	pop() {
		if (this.top === undefined) {
			return 'empty'
		}

		let removeNode = this.top
		const removeNodeValue = removeNode.value

		this.top = removeNode.nextNode

		removeNode = null
		return removeNodeValue
	}
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
