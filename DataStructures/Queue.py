class Node:
  value = None
  nextNode = None

  def __init__(self, **nodeValues):
    self.value = nodeValues.get('value')
    self.nextNode = nodeValues.get('nextNode')

class Queue:
  next = None

  def push(self, value):
    newNode = Node(value=value)
    if self.next == None:
      self.next = newNode
      return
    
    self.pushToEnd(newNode, self.next)
      
  def pushToEnd(self, nodeToPush, queue):
    if(queue.nextNode == None):
      queue.nextNode = nodeToPush
      return
    
    self.pushToEnd(nodeToPush, queue.nextNode)
  

  def pop(self):
    if(self.next == None):
      return 'empty'

    toReturn = self.next

    self.next = self.next.nextNode

    return toReturn.value


queue = Queue()

queue.push(1)
queue.push(2)
queue.push(3)

print(queue.pop())
print(queue.pop())
print(queue.pop())
print(queue.pop())