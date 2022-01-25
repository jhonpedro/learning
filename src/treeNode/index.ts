export class TreeNode {
	public value: string
	public token: symbol | null
	public right: TreeNode | null
	public left: TreeNode | null

	constructor(
		value: string,
		token: string,
		rNode?: TreeNode,
		lNode?: TreeNode
	) {
		this.value = value
		this.right = rNode || null
		this.left = lNode || null

		this.token = Symbol.for(token)
	}
}
