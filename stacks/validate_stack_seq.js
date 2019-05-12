const pushed = [1, 2, 3, 4, 5];
const popped = [4, 5, 3, 1, 2];

var validateStackSequences = function (pushed, popped) {
    let stack = [];
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        // if the last element in stack is first element in popped remove from both
        while (stack.length && stack[stack.length - 1] === popped[0]) {
            stack.pop(); 
            popped.shift();
        }
    }
    return stack.length === 0;
};

console.log(validateStackSequences(pushed, popped));