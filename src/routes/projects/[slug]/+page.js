import { error } from '@sveltejs/kit';

const caseStudies = {
  'your-first-project': {
    title: 'Your Project Name',
    client: 'Client Name or "Personal Project"',
    challenge: 'What problem did you solve? Describe the initial situation and pain points.',
    strategy: 'Why did you choose this approach or tech stack? Explain your thinking.',
    solution: 'What did you actually build? Highlight key features and implementation.',
    result: 'What was the outcome? Include metrics, feedback, or lessons learned.'
  },
  'second-project': {
    title: 'Another Great Project',
    client: 'Another Client or "Open Source"',
    challenge: 'The client needed a way to...',
    strategy: 'We decided to use... because...',
    solution: 'Built a full-stack application with...',
    result: 'Improved performance by X% and user satisfaction increased.'
  }
};

export function load({ params }) {
  const project = caseStudies[params.slug];
  if (project) {
    return { project };
  }
  throw error(404, 'Case study not found');
}
