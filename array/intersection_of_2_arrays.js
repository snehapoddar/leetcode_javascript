var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4];

var intersection = new Set();
if (nums1.length == 0 || nums2.length == 0) {
    console.log(intersection);
}
for (var i = 0; i < nums1.length; i++) {
    for (var j = 0; j < nums2.length; j++) {
        if (nums1[i] == nums2[j]) {
            intersection.add(nums1[i]);
        }
    }
}
console.log([...intersection]);