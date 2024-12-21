import { Sum } from "../Sum";

test("Sum function should calcutae the sum of 2 numbers.", () => {
  //Querying
  const result = Sum(5, 5);
  // assertion
  expect(result).toBe(10);
});
