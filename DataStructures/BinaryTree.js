class Node {
	constructor({ value, leftNode, rightNode }) {
		if (!value) {
			throw new Error('missing params in node creation')
		}
		this.value = value
		this.leftNode = leftNode
		this.rightNode = rightNode
	}
}

class BinaryTree {
	rootNode = null
	push(value) {
		if (this.rootNode === null) {
			this.rootNode = new Node({ value })
			return
		}

		var currentNodeToAnalyze = this.rootNode

		while (true) {
			if (currentNodeToAnalyze.value < value) {
				if (currentNodeToAnalyze.rightNode === undefined) {
					currentNodeToAnalyze.rightNode = new Node({ value })
					return
				}
				currentNodeToAnalyze = currentNodeToAnalyze.rightNode
				continue
			}
			if (currentNodeToAnalyze.value > value) {
				if (currentNodeToAnalyze.leftNode === undefined) {
					currentNodeToAnalyze.leftNode = new Node({ value })
					return
				}
				currentNodeToAnalyze = currentNodeToAnalyze.leftNode
				continue
			}

			return 'whoops this number already have been inserted'
		}
	}

	delete({ nodeValue, nodeToEvaluate }) {
		if (!nodeToEvaluate) {
			return 'number not found'
		}

		if (nodeToEvaluate.value === nodeValue) {
			nodeToEvaluate = null
			return 'removed'
		}

		if (
			nodeToEvaluate.rightNode &&
			nodeToEvaluate.rightNode.value === nodeValue
		) {
			nodeToEvaluate.rightNode = undefined
			return 'removed'
		}

		if (
			nodeToEvaluate.leftNode &&
			nodeToEvaluate.leftNode.value === nodeValue
		) {
			nodeToEvaluate.leftNode = undefined
			return 'removed'
		}

		if (nodeValue > nodeToEvaluate.value) {
			return this.delete({
				nodeValue,
				nodeToEvaluate: nodeToEvaluate.rightNode,
			})
		}
		if (nodeValue < nodeToEvaluate.value) {
			return this.delete({
				nodeValue,
				nodeToEvaluate: nodeToEvaluate.left,
			})
		}
		return 'got to end'
	}
}

const binaryTree = new BinaryTree()

binaryTree.push(1)
binaryTree.push(2)
binaryTree.push(3)
binaryTree.push(-1)

binaryTree.delete({ nodeValue: 3, nodeToEvaluate: binaryTree.rootNode })
binaryTree.delete({ nodeValue: 2, nodeToEvaluate: binaryTree.rootNode })
console.log(binaryTree.rootNode)
binaryTree.delete({ nodeValue: -1, nodeToEvaluate: binaryTree.rootNode })
console.log(binaryTree.rootNode)
