import { Definition } from '../definitions'

export class TreeNode {
	public value: string
	public token: symbol | null
	public right: TreeNode | null
	public left: TreeNode | null

	constructor(
		value: string,
		token: symbol,
		rNode?: TreeNode,
		lNode?: TreeNode
	) {
		this.value = value
		this.right = rNode || null
		this.left = lNode || null

		this.token = token
	}
}

export const createTree = (defs: Definition[]): TreeNode => {
	const startNode = defs[0]

	if (!startNode) {
		throw new Error('No start node')
	}

	const tree = new TreeNode(startNode.value, startNode.currentSymbol)

  populateNodes(tree, defs)

	return tree
}

const populateNodes = (node: TreeNode, defs: Definition[]): void => {
	const defCurrentNode = defs.find((d) => d.currentSymbol === node.token)

	if (!defCurrentNode) {
		throw new Error('Current node symbol not found')
	}

	const rCurrentNode = defs.find(
		(d) => d.currentSymbol === defCurrentNode.rightSymbol
	)

	const lCurrentNode = defs.find(
		(d) => d.currentSymbol === defCurrentNode.leftSymbol
	)

  if(rCurrentNode) {
    node.right = new TreeNode(rCurrentNode.value, rCurrentNode.currentSymbol)
  }
  
  if(lCurrentNode) {
    node.left = new TreeNode(lCurrentNode.value, lCurrentNode.currentSymbol)
  }

	if (node.right) {
		populateNodes(node.right, defs)
	}

	if (node.left) {
		populateNodes(node.left, defs)
	}
}
