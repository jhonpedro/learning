class Node {
	constructor({ value, nextNode }) {
		if (!value) {
			throw new Error('missing params in node creation')
		}
		this.value = value
		this.nextNode = nextNode
	}
}

class Queue {
	next = undefined

	push(value, nextNode) {
		const toEnter = new Node({ value, nextNode })
		if (this.next === undefined) {
			this.next = toEnter
			return
		}

		this.toEndOfQueue(toEnter, this.next)
	}

	toEndOfQueue(nodeToPush, queue) {
		if (queue.nextNode === undefined) {
			queue.nextNode = nodeToPush
			return
		}
		this.toEndOfQueue(nodeToPush, queue.nextNode)
	}

	pop() {
		const toReturn = this.next

		if (!this.next) return 'empty'

		this.next = this.next.nextNode

		return toReturn.value
	}
}

const queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
