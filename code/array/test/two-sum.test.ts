import { twoSum2 } from "../two-sum";


describe("two-sum test", () => {

  it("two sum test", () => {
    const arr = [2,7,11,15];
    const target = 9;
    const result = twoSum2(arr, target);

    expect(result).toContain(0);
    expect(result).toContain(1)

  })
})
