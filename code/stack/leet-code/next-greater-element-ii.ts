function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(n).fill(-1);
  const stack = [];
  for (let index = 0; index < n * 2 - 1; index++) {
    const trueIndex = index % n;
    while (stack.length && nums[trueIndex] > nums[stack[stack.length - 1]]) {
      ans[stack[stack.length - 1]] = nums[trueIndex];
      stack.pop();
    }

    stack.push(trueIndex);
  }
  return ans;
}

const nums = [1, 2, 3, 4, 3]; // [2,3,4,-1,4]
console.log(nextGreaterElements(nums));
