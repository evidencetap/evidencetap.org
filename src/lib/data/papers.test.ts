import { describe, it, expect } from "vitest";
import { papers, doiUrl } from "./papers";

describe("papers", () => {
  it("has the key 5", () => {
    expect(papers).toHaveLength(5);
  });

  it("every paper has the required fields", () => {
    for (const p of papers) {
      expect(p.title.length).toBeGreaterThan(0);
      expect(p.authors.length).toBeGreaterThan(0);
      expect(p.venue.length).toBeGreaterThan(0);
      expect(p.year).toBeGreaterThan(2000);
      expect(p.month).toBeGreaterThanOrEqual(1);
      expect(p.month).toBeLessThanOrEqual(12);
      expect(p.doi).toMatch(/^10\./);
      expect(p.summary.length).toBeGreaterThan(0);
    }
  });

  it("is sorted newest-first by year then month", () => {
    for (let i = 1; i < papers.length; i++) {
      const a = papers[i - 1];
      const b = papers[i];
      expect(a.year * 12 + a.month).toBeGreaterThanOrEqual(b.year * 12 + b.month);
    }
  });

  it("starts with the flagship Living Evidence Databases paper", () => {
    expect(papers[0].title).toMatch(/Living Evidence Databases/);
  });

  it("builds a resolvable DOI url", () => {
    expect(doiUrl("10.1038/d41586-025-02069-w")).toBe(
      "https://doi.org/10.1038/d41586-025-02069-w"
    );
  });
});
