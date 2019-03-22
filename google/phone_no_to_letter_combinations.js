var digits = '23';

if (digits === "") return [];
var result = [];
var array = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
var digits = Array.from(digits);
dfs("", 0);

function dfs(str, index) {
    if (str.length === digits.length) {
        result.push(str);
        return;
    }
    var letters = Array.from(array[digits[index]]);
    letters.forEach(letter => {
        dfs(str + letter, index + 1);
    });
}

console.log(result);