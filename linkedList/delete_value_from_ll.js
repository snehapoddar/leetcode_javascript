function ListNode(val) {
    this.val = val;
    this.next = null;
}
var arr = [5];
var head = new ListNode(arr[0]);
var cur = head;
for(i=1;i<arr.length;i++){
    var newNode = new ListNode(arr[i]);
    cur.next = newNode;
    cur = cur.next;
}
console.log(head);
var val = 5;
var removeElements = function(head, val) {
    if(head == null || (head.val == val && head.next == null)) return [];
    let cur = head;
    while(cur!=null){
        if(cur.val == val) {
            if(cur.next) {
              cur.val = cur.next.val;
              cur.next = cur.next.next;  
            } else {
               cur = null;
            }
        } else {
            cur = cur.next;
        } 
    }
    return head;
};