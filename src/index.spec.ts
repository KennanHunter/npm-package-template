import { add } from "./index";

describe("Index", () => {
  test("Improper addition", () => {
    const res = add(3, 10);

    expect(res).not.toBe(7);
  });

  test("Correct addition", () => {
    const res = add(5, 6);

    expect(res).toBe(11);
  });
});
