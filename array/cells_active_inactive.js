const states = [0, 1, 0, 1, 0, 1, 0, 1];
const days = 3;

for (let i = 1; i <= days; i++) {
    let newStates = [];
    states[1] == 0 ? newStates.push(0) : newStates.push(1);
    for (let j = 1; j < states.length - 1; j++) {
        states[j - 1] != states[j + 1] ? newStates.push(1) : newStates.push(0);
    }
    states[states.length - 2] == 0 ? newStates.push(0) : newStates.push(1);
    states = newStates;
}

console.log(states);