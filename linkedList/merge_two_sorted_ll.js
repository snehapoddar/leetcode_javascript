function ListNode(val) {
    this.val = val;
    this.next = null;
}

function insertLL(arr) {
    var head = new ListNode(arr[0]);
    cur = head;
    for (i = 1; i < arr.length; i++) {
        var newNode = new ListNode(arr[i]);
        cur.next = newNode;
        cur = cur.next;
    }
    return head;
}
var arr1 = [1, 2, 3, 4, 9];
var l1 = insertLL(arr1);
var arr2 = [1,3,7];
var l2 = insertLL(arr2);

var cur = new ListNode();
const head = cur;
while (l1 && l2) {
    if (l1.val <= l2.val) {
        cur.next = new ListNode(l1.val);
        l1 = l1.next;
        cur = cur.next;
    } else {
        cur.next = new ListNode(l2.val);
        l2 = l2.next;
        cur = cur.next;
    }
}
cur.next = l1 || l2;
console.log(head.next);