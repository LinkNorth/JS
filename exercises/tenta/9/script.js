function Node(value, next) {
  this.value = value;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head);
  if (this.head) newNode.next = this.head;
  this.head = newNode;
};

/* Do not touch anything above this line */

/* Implement your solution here
 * `node` is a node in the list
 * `f` is the function that should be applied on every value
 */
function traverse(node, f) {
}


/* Do not touch anything below this line */
let list = new LinkedList();
list.addToHead(5);
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);

traverse(list.head, function(value) {
  console.log('Value is: ', value);
});
