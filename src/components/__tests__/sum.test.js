import { sum } from "../sum"

test("Sum functions should calculate the sum of the two number", () => {
    const result = sum(3,4);

    // assertion
    expect(result).toBe(7);
})