var nums = [3, 2, 3, 1, 1, 1];
var value = null,
var times = 0;

for (let i = 0; i < nums.length; ++i) {

    times ? (value === nums[i] ? times++ : times--) : (value = nums[i], times++);
}
return value;