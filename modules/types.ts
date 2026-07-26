export interface Project {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
  videoUrl?: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
}