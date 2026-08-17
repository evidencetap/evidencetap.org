import type { PersonGroup } from "$lib/types";

export const groups: PersonGroup[] = [
  {
    strand: "Computer Science",
    people: [
      {
        name: "Anil Madhavapeddy",
        affiliation:
          "Department of Computer Science & Technology, University of Cambridge"
      },
      {
        name: "Sadiq Jaffer",
        affiliation:
          "Department of Computer Science & Technology, University of Cambridge"
      },
      {
        name: "Eleanor Toye Scott",
        affiliation:
          "Department of Computer Science & Technology, University of Cambridge",
        url: "https://www.cst.cam.ac.uk/people/eft20"
      }
    ]
  },
  {
    strand: "Conservation",
    people: [
      {
        name: "Lynn Dicks",
        affiliation: "Department of Zoology, University of Cambridge"
      },
      {
        name: "William Sutherland",
        affiliation: "Department of Zoology, University of Cambridge"
      },
      {
        name: "Sam Reynolds",
        affiliation: "Department of Zoology, University of Cambridge"
      },
      {
        name: "William Morgan",
        affiliation: "Department of Zoology, University of Cambridge"
      },
      { name: "Alec Christie", affiliation: "Imperial College London" }
    ]
  },
  {
    strand: "Education",
    people: [
      {
        name: "Jenny Gibson",
        affiliation: "Faculty of Education, University of Cambridge"
      },
      {
        name: "Mélanie Gréaux",
        affiliation: "Faculty of Education, University of Cambridge"
      }
    ]
  },
  {
    strand: "Policy & society",
    people: [
      {
        name: "Rob Doubleday",
        affiliation:
          "Executive Director, Centre for Science and Policy (CSaP), University of Cambridge",
        url: "https://www.csap.cam.ac.uk/network/rob-doubleday/"
      },
      {
        name: "Nicky Buckley",
        affiliation:
          "Director for Fellowships and Networks, Centre for Science and Policy (CSaP), University of Cambridge",
        url: "https://www.csap.cam.ac.uk/network/nicola-buckley/"
      },
      {
        name: "Alexandru Marcoci",
        affiliation:
          "Assistant Professor in Global Risk and Resilience (AI), Centre for the Study of Existential Risk (CSER), University of Cambridge",
        url: "https://www.cser.ac.uk/team/alex-marcoci/"
      }
    ]
  },
  {
    strand: "Students & interns (alumni)",
    people: [
      {
        name: "Radhika Agrawal",
        affiliation:
          "Evaluating a human-in-the-loop AI framework for evidence synthesis inclusion criteria",
        dates: "2025"
      },
      {
        name: "Kittson Hamill",
        affiliation:
          "MPhil, then summarising threats in the conservation evidence literature",
        dates: "2024–25"
      },
      {
        name: "Mark Jacobsen",
        affiliation: "MPhil, chunk-free embeddings for LLMs",
        dates: "2024"
      },
      {
        name: "Radhika Iyer",
        affiliation:
          "RAG pipelines, then a Part II on multimodal conservation-action suitability",
        dates: "2024, 2026"
      },
      {
        name: "Shrey Biswas",
        affiliation: "Crawling grey literature for conservation evidence",
        dates: "2024"
      },
      {
        name: "Kacper Michalik",
        affiliation: "Crawling grey literature for conservation evidence",
        dates: "2024"
      }
    ]
  }
];
