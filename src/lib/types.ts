export interface Person {
  name: string;
  affiliation: string;
  url?: string;
}

export interface PersonGroup {
  strand: string;
  people: Person[];
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
}
