import { threeSum } from "../3sum";



describe("two-sum test", () => {

  it("two sum test", () => {
    const arr = [-1,0,1,2,-1,-4];
    const result = threeSum(arr);

    expect(result.length).toEqual(2)
    expect(result[0]).toContain(-1)

  })
})
