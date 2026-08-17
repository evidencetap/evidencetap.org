import { describe, it, expect } from "vitest";
import { groups } from "./people";

describe("people", () => {
  it("has the five strands in order", () => {
    expect(groups.map((g) => g.strand)).toEqual([
      "Computer Science",
      "Conservation",
      "Education",
      "Policy & society",
      "Students & interns (alumni)"
    ]);
  });

  it("every alumnus has their years of involvement", () => {
    const alumni = groups.find((g) => g.strand.startsWith("Students"))!;
    for (const p of alumni.people) {
      expect(p.dates).toMatch(/20\d\d/);
    }
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

  it("includes the core team and the newer members", () => {
    const names = groups.flatMap((g) => g.people.map((p) => p.name));
    expect(names).toContain("Anil Madhavapeddy");
    expect(names).toContain("Eleanor Toye Scott");
    expect(names).not.toContain("Robin Message");
    expect(names).toContain("Lynn Dicks");
    expect(names).toContain("Mélanie Gréaux");
    expect(names).toContain("Radhika Agrawal");
    expect(names).toContain("Radhika Iyer");
  });
});
