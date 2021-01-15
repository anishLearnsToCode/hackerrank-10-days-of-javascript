function modifyArray(nums) {
    return nums.map(x => x % 2 === 0 ? x * 2 : x * 3);
}
