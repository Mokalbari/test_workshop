import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { add, divide, multiply, subtract } from "../functions/level1.ts";

describe("Math operations", () => {
  it("adds two numbers together", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds two negative numbers together", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds a positive and a negative number together", () => {
    expect(add(2, -3)).toBe(-1);
  });

  it("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("subtracts two negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  it("subtracts a positive and a negative number", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  it("multiplies two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("multiplies two negative numbers", () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it("multiplies a positive and a negative number", () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it("divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("divides two negative numbers", () => {
    expect(divide(-6, -3)).toBe(2);
  });

  it("divides a positive and a negative number", () => {
    expect(divide(6, -3)).toBe(-2);
  });

  it("divides by zero", () => {
    expect(() => divide(6, 0)).toThrow();
  });
});
