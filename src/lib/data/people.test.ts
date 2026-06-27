import { describe, it, expect } from "vitest";
import { groups } from "./people";

describe("people", () => {
  it("has the three strands in order", () => {
    expect(groups.map((g) => g.strand)).toEqual([
      "Computer Science",
      "Conservation",
      "Education"
    ]);
  });

  it("every group has people, every person has name + affiliation", () => {
    for (const g of groups) {
      expect(g.people.length).toBeGreaterThan(0);
      for (const p of g.people) {
        expect(p.name.length).toBeGreaterThan(0);
        expect(p.affiliation.length).toBeGreaterThan(0);
      }
    }
  });

  it("includes the ten named collaborators", () => {
    const names = groups.flatMap((g) => g.people.map((p) => p.name));
    expect(names).toHaveLength(10);
    expect(names).toContain("Anil Madhavapeddy");
    expect(names).toContain("Robin Message");
    expect(names).toContain("Lynn Dicks");
    expect(names).toContain("Melanie Greaux");
  });
});
