var m = [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1]
];
var map = new Map();

for (var i = 0; i < m.length; i++) {
    var arr = [];
    for (var j = 0; j < m[i].length; j++) {
        if (map.get(i)) {
            arr = map.get(i);
        }
        if (m[i][j] == 1) {
            arr.push(j);
        }
    }
    map.set(i, arr);
}
var count = 0;
var visited = new Set();
map.forEach((value, key) => {
    if (visited.length < 1) {
        count++;
        visited = addToVisited(visited, value, map);
    } else {
        if (!visited.includes(key) && !isValueInVisited) {
            count++;
            value.forEach(v => {
                visited = visited.concat(map.get(v))
            });
        } else {
            visited = visited.concat(value);
        }
    }
    console.log(visited);
});
console.log(count);

function addToVisited(visited, value, map){
    value.forEach(v => {
        visited.added(v);
    });
    return visited;
}

function isValueInVisited(visited, value) {
    value.forEach(v => {
        if(visited.has(v)){
            return (true, visited);
        } else {
            visited.add(v);
        }
    }); 
    return (false, visited);
}