export interface Person {
  name: string;
  affiliation: string;
  url?: string;
  /** Years active on the project, e.g. "2024" or "2024–25" */
  dates?: string;
}

export interface PersonGroup {
  strand: string;
  people: Person[];
}

export type NewsKind = "paper" | "talk" | "workshop" | "media" | "milestone";

export interface NewsPicture {
  src: string;
  srcset?: string;
  alt: string;
  /** object-position for the cropped thumbnail, e.g. "top" (default centre) */
  pos?: string;
}

export interface NewsEvent {
  /** ISO date, YYYY-MM-DD */
  date: string;
  title: string;
  detail: string;
  kind: NewsKind;
  /** Links through to the fuller story on a team member's site */
  url: string;
  /** Picture from the linked post, shown inline in the stream */
  picture?: NewsPicture;
}

export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  /** 1-12 */
  month: number;
  doi: string;
  summary: string;
  /** Thumbnail slug on anil.recoil.org, e.g. "2025-evidence-tap" */
  thumb?: string;
}
