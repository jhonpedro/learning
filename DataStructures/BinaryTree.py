class Node:
    value = None
    rightNode = None
    leftNode = None

    def __init__(self, **nodeValues):
        self.value = nodeValues.get('value')
        self.rightNode = nodeValues.get('rightNode')
        self.leftNode = nodeValues.get('leftNode')

class BinaryTree:
    rootNode = None

    def push(self, value):
        if self.rootNode == None:
            self.rootNode = Node(value=value)
            return 'inserted'

        currentNode = self.rootNode

        while(True):
            if currentNode.value < value:
                if not currentNode.rightNode:
                    currentNode.rightNode = Node(value=value)
                    return 'inserted'
                currentNode = currentNode.rightNode
                continue
            if currentNode.value > value:
                if not currentNode.leftNode:
                    currentNode.leftNode = Node(value=value)
                    return 'inserted'
                currentNode = currentNode.leftNode
                continue

            return 'this number was already inserted'

    def delete(self, currentNode, valueToDelete):
        if not currentNode:
            return 'number not found'
        
        if currentNode.rightNode and currentNode.rightNode.value == valueToDelete:
            currentNode.rightNode = None
            return 'removed'
        if currentNode.leftNode and currentNode.leftNode.value == valueToDelete:
            currentNode.leftNode = None
            return 'removed'

        if currentNode.value < valueToDelete:
            return self.delete(currentNode.rightNode, valueToDelete)
        if currentNode.value < valueToDelete:
            return self.delete(currentNode.leftNode, valueToDelete)


binaryTree = BinaryTree()

print(binaryTree.push(1))
print(binaryTree.push(2))
print(binaryTree.push(3))
print(binaryTree.delete(binaryTree.rootNode, 2))
print(binaryTree.delete(binaryTree.rootNode, 3))