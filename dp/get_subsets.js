var set = [1, 2, 3];
var result = [];
var f = function (prefix, set) {
    for (var i = 0; i < set.length; i++) {
        prefix.push(set[i]);
        result.push(prefix);
        f(prefix.push(set[i]), set.slice(i + 1));
    }
}
f([], set);

console.log(result);