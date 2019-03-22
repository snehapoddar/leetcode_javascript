export function ListNode(val) {
    this.val = val;
    this.next = null;
}

export function insertLL(arr){
    if(head == null) {
        head = new ListNode(arr[0]);
    }
    cur = head;
    for(i=1; i<arr.length; i++){
        var newNode = new ListNode(arr[i]);
        cur.next = newNode;
        cur = cur.next;
    }
    return head;
}