import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function load() {
  const projectsDir = path.join(process.cwd(), 'src/content/projects');
  let projects = [];
  
  if (fs.existsSync(projectsDir)) {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));
    projects = files.map(file => {
      const content = fs.readFileSync(path.join(projectsDir, file), 'utf-8');
      const { data } = matter(content);
      return {
        slug: data.slug || file.replace(/\.md$/, ''),
        title: data.title,
        description: data.description,
        tags: data.tags || [],
        image: data.image || '/images/placeholder.jpg'
      };
    });
  }
  
  return { projects };
}
