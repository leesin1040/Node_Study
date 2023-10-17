//생성자
// no usages
class Node {
  constructor(data) {
    //data : 흑연, 자갈, 밀가루 ...
    this.data = data;
    this.next = null;
  }
}

 
//no usage
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }
}

const linkedList : LinkedList = new LinkedList(value: "흑연");
console.log(linkedList);