class Node:
    value = None
    nextNode = None

    def __init__(self, **nodeValues):
        self.value = nodeValues.get('value')
        self.nextNode = nodeValues.get('nextNode')


class Stack:
    top = None

    def printTop(self):
        print(self.top.value)

    def push(self, value):
        newNode = Node(value=value, nextNode=self.top)
        self.top = newNode

        def pop(self):
            if(self.top == None):
                return 'Empty'

        removedNode = self.top

        removedNodeValue = removedNode.value

        if(removedNode.nextNode):
            self.top = removedNode.nextNode
        else:
            self.top = None

        del removedNode

        return removedNodeValue


newStack = Stack()
newStack.push(1)
newStack.push(2)
newStack.push(3)

print(newStack.pop())
print(newStack.pop())
print(newStack.pop())
print(newStack.pop())
