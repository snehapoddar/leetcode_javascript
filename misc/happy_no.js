var n = 19;
const set = new Set();
while (!set.has(n)) {
    if (n === 1) {
      console.log(true);
    }
    set.add(n);
    n = n.toString().split('').reduce((total, current) => total =+ current, 0);
    console.log(n);
  }
