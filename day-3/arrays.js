function getSecondLargest(nums) {
    nums.sort((a, b) => b - a);
    const highest = nums[0];
    for (let index = 1; index < nums.length ; index++) {
        if (nums[index] !== highest) {
            return nums[index];
        }
    }
}

console.log(getSecondLargest([1, 2, 10, 12, 45, -100]))
