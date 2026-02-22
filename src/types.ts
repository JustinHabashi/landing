export type Project = {
  id: number;
  title: string;
  summary: string;
  href: string;
  tech: string[];
  status: "Live" | "In Progress" | "Planned";
};
