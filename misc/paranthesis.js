var s = "({})";
if (s.length == 0) return true;
if (s.length == 1) return false;
var map = {
    ')': '(',
    '}': '{',
    ']': '['
};
var i = 1;
var stack = [];
stack.push(s.charAt(0));
while (i < s.length) {
    if(stack.length == 0 || map[s.charAt(i)] != stack[stack.length-1]) {
        stack.push(s.charAt(i));
    } else {
        stack.pop();
    }
    i++;
}
console.log(stack);