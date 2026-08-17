import { describe, it, expect } from "vitest";
import { events, formatDate, linkHost, splitEvents } from "./news";

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const TEAM_HOSTS = ["anil.recoil.org", "samreynolds.org"];

describe("news events", () => {
  it("every event has the required fields", () => {
    for (const e of events) {
      expect(e.date).toMatch(ISO);
      expect(e.title.length).toBeGreaterThan(0);
      expect(e.detail.length).toBeGreaterThan(0);
      expect(e.url).toMatch(/^https:\/\//);
    }
  });

  it("only links through to the team's own sites", () => {
    for (const e of events) expect(TEAM_HOSTS).toContain(linkHost(e.url));
  });

  it("pictures have a source and alt text", () => {
    const withPictures = events.filter((e) => e.picture);
    expect(withPictures.length).toBeGreaterThan(0);
    for (const e of withPictures) {
      expect(e.picture!.src).toMatch(/^https:\/\//);
      expect(e.picture!.alt.length).toBeGreaterThan(0);
    }
  });

  it("is sorted newest-first", () => {
    for (let i = 1; i < events.length; i++) {
      expect(events[i - 1].date >= events[i].date).toBe(true);
    }
  });

  it("splits upcoming (soonest first) from past (newest first)", () => {
    const { upcoming, past } = splitEvents(events, "2026-07-23");
    expect(upcoming.length + past.length).toBe(events.length);
    for (const e of upcoming) expect(e.date > "2026-07-23").toBe(true);
    for (let i = 1; i < upcoming.length; i++) {
      expect(upcoming[i - 1].date <= upcoming[i].date).toBe(true);
    }
    for (let i = 1; i < past.length; i++) {
      expect(past[i - 1].date >= past[i].date).toBe(true);
    }
  });
});

describe("helpers", () => {
  it("formats ISO dates without timezone surprises", () => {
    expect(formatDate("2026-01-08")).toBe("8 Jan 2026");
    expect(formatDate("2024-12-05")).toBe("5 Dec 2024");
  });

  it("strips www from link hosts", () => {
    expect(linkHost("https://www.samreynolds.org/#talks")).toBe("samreynolds.org");
    expect(linkHost("https://anil.recoil.org/notes/x")).toBe("anil.recoil.org");
  });
});
