import { createTree, TreeNode } from './treeNode/index'
import { definitions } from './definitions/index'
import './index.css'

const tree = createTree(definitions)

const root = document.createElement('div')
root.id = 'root'

document.getElementsByTagName('body')[0]?.appendChild(root)

const showNode = (node: TreeNode) => {
	const createResponseListener = (node: TreeNode) => () => showNode(node)

	root.innerHTML = ''

	const container = document.createElement('div')

	container.innerText = node.value

	root.appendChild(container)

	const buttonContainer = document.createElement('div')
	buttonContainer.className = 'button-container'

	container.appendChild(buttonContainer)

	if (node.right) {
		const yesButton = document.createElement('button')
		yesButton.innerText = 'Sim'

		buttonContainer.appendChild(yesButton)
    yesButton.addEventListener('click', createResponseListener(node.right))
	}

	if (node.left) {
		const noButton = document.createElement('button')
		noButton.innerText = 'Não'

		buttonContainer.appendChild(noButton)
		noButton.addEventListener('click', createResponseListener(node.left))
	}
}

showNode(tree)
