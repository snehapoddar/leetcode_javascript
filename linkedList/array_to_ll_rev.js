function ListNode(val) {
    this.val = val;
    this.next = null;
}
var arr = [1, 2, 3, 4, 5];

function insertLL(arr) {
    head = new ListNode(arr[0]);
    cur = head;
    for (i = 1; i < arr.length; i++) {
        var newNode = new ListNode(arr[i]);
        cur.next = newNode;
        cur = cur.next;
    }
    return head;
}
var head = insertLL(arr);

// function printLL(head) {
//     var cur = head;
//     while (cur != null) {
//         console.log("Value: " + cur.val);
//         cur = cur.next;
//     }
// }
// printLL(head);

function reverse(head) {
    let cur = head;
    let newHead = null;
    while (cur!=null) {
        var node = cur;
        cur = cur.next;
        node.next = newHead;
        newHead = node;
    }
    return newHead;
}
console.log(reverse(head));
