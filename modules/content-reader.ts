import fs from "fs";
import path from "path";
import matter from "gray-matter"
export function getContentItems<T>(contentType: "projects" | "articles"): T[] {
  const directoryPath = path.join(process.cwd(), `content/${contentType}`);
  
  if (!fs.existsSync(directoryPath)) return [];

  const fileNames = fs.readdirSync(directoryPath);

  const items = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(directoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as T;
    });

  // Order the items by date in descending order (newest first)
  return items.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get a single content item by slug
export function getContentBySlug(contentType: "projects" | "articles", slug: string) {
  const filePath = path.join(process.cwd(), `content/${contentType}`, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content,
  };
}