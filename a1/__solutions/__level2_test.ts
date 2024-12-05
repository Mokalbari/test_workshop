import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { userToolbox } from "../functions/level2.ts";

describe("User toolbox", () => {
  const { makeADiscordUsername, isAbove18ButNotAbove100 } = userToolbox();

  it("creates a discord username with a @ and lowercases", () => {
    expect(makeADiscordUsername("John")).toBe("@john");
  });

  it("returns null if the username is empty", () => {
    expect(makeADiscordUsername("")).toBeNull();
  });

  it("returns true if the age is above 18 but not above 100", () => {
    expect(isAbove18ButNotAbove100(20)).toBe(true);
  });

  it("returns false if the age is 18 or above", () => {
    expect(isAbove18ButNotAbove100(18)).toBe(false);
  });
});
