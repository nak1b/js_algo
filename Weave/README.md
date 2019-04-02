### Weave 

Implement a 'peek' method in this Queue class. Peek should return the last element (the next one to be returned) from the queue *without* removing it.

Example
```
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
const q = weave(queueOne, queueTwo);
q.remove() // 1
q.remove() // 'Hi'
q.remove() // 2
q.remove() // 'There'
```