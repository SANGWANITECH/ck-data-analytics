export interface InsightProject {
    id: string;
    category: string;
    title: string;
    description: string;
    status: "planned" | "in-progress" | "published";
    href?: string;
  }
  
  // Empty for now. Add a project here once it's actually done,
  // and a real card will replace the empty state automatically.
  export const insights: InsightProject[] = [];