import type { Paper } from "$lib/types";

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}

export const papers: Paper[] = [
  {
    title: "AI-assisted Living Evidence Databases for Conservation Science",
    authors: [
      "Sadiq Jaffer",
      "William Morgan",
      "Sam Reynolds",
      "Alec Christie",
      "Anil Madhavapeddy",
      "William Sutherland"
    ],
    venue: "Cambridge Open Engage",
    year: 2025,
    month: 10,
    doi: "10.33774/coe-2025-rmsqf",
    summary:
      "The flagship pipeline: a self-hosted, end-to-end system that ingests, screens, and extracts structured data from the literature — achieving 97% recall against a large manual review."
  },
  {
    title: "Will AI speed up literature reviews or derail them entirely?",
    authors: [
      "Sam Reynolds",
      "Alec Christie",
      "Lynn Dicks",
      "Sadiq Jaffer",
      "Anil Madhavapeddy",
      "William J. Sutherland"
    ],
    venue: "Nature",
    year: 2025,
    month: 7,
    doi: "10.1038/d41586-025-02069-w",
    summary:
      "AI-generated “poison” papers threaten evidence synthesis — but traceable AI pipelines can be part of the defence."
  },
  {
    title:
      "Careful design of Large Language Model pipelines enables expert-level retrieval",
    authors: [
      "Radhika Iyer",
      "Alec Philip Christie",
      "Anil Madhavapeddy",
      "Sam Reynolds",
      "William Sutherland",
      "Sadiq Jaffer"
    ],
    venue: "PLOS ONE",
    year: 2025,
    month: 5,
    doi: "10.1371/journal.pone.0323563",
    summary:
      "Well-designed hybrid retrieval pipelines reach expert-level performance on conservation evidence questions — while off-the-shelf LLMs fall short."
  },
  {
    title: "Conservation changed but not divided",
    authors: ["Sam A. Reynolds", "et al."],
    venue: "Trends in Ecology & Evolution",
    year: 2025,
    month: 4,
    doi: "10.1016/j.tree.2025.04.002",
    summary:
      "AI can unite rather than divide conservation — if built around human expertise, openness, and capacity-building."
  },
  {
    title: "The potential for AI to revolutionize conservation: a horizon scan",
    authors: ["Sam Reynolds", "et al."],
    venue: "Trends in Ecology & Evolution",
    year: 2024,
    month: 12,
    doi: "10.1016/j.tree.2024.11.013",
    summary:
      "A horizon scan of where AI could most transform conservation practice — opportunities and risks."
  }
];
