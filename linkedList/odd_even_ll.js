function ListNode(val) {
    this.val = val;
    this.next = null;
}

function insertLL(arr) {
    if (head == null) {
        head = new ListNode(arr[0]);
    }
    cur = head;
    for (i = 1; i < arr.length; i++) {
        var newNode = new ListNode(arr[i]);
        cur.next = newNode;
        cur = cur.next;
    }
    return head;
}
var head = insertLL([1, 2, 3, 4, 5, 6]);
if (head && head.next) {
    var odd = head;
    var evenhead = odd.next;
    var even = evenhead;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenhead;
}
console.log(reverseLL(evenhead));

