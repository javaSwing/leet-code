import { describe, expect, it } from "@jest/globals";
import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");
  });
});
