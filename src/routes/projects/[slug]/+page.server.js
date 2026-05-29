import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const slug = params.slug;
  const projectsDir = path.join(process.cwd(), 'src/content/projects');
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));
  let projectData = null;
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(projectsDir, file), 'utf-8');
    const { data } = matter(content);
    if (data.slug === slug || file.replace(/\.md$/, '') === slug) {
      projectData = data;
      break;
    }
  }
  
  if (!projectData) {
    throw error(404, 'Project not found');
  }
  
  return {
    project: {
      title: projectData.title,
      client: projectData.client,
      challenge: projectData.challenge,
      strategy: projectData.strategy,
      solution: projectData.solution,
      result: projectData.result
    }
  };
}
