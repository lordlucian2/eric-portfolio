<script>
  import { enhance } from '$app/forms';

  const projects = [
    {
      slug: 'your-first-project',
      title: 'Your Project Name',
      description: 'A short, punchy description of what this project does or achieved.',
      tags: ['SvelteKit', 'Tailwind', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop'
    },
    {
      slug: 'second-project',
      title: 'Another Great Project',
      description: 'Designed and engineered a solution that delivered real results.',
      tags: ['Svelte', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop'
    }
  ];
</script>

<section class="hero">
  <h1>Building high-converting web apps for forward-thinking clients.</h1>
  <p>I am a Full-Stack Developer specializing in ultra-fast frontend architectures and clean user experiences.</p>
  <a href="#work" class="cta-btn">View My Work</a>
</section>

<section id="work" class="projects-section">
  <h2>Featured Work</h2>
  <div class="grid">
    {#each projects as project}
      <div class="card">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div class="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div class="tags">
            {#each project.tags as tag}
              <span>{tag}</span>
            {/each}
          </div>
          <a href="/projects/{project.slug}" class="project-link">Read Case Study &rarr;</a>
        </div>
      </div>
    {/each}
  </div>
</section>

<section id="contact" class="contact-section">
  <h2>Let's work together</h2>
  <p>Got a project in mind? Reach out and let's build something great.</p>
  
  <form action="https://api.web3forms.com/submit" method="POST" class="contact-form" use:enhance>
    <input type="hidden" name="access_key" value="f349ec5b-06c3-4a69-b7d0-708e6c0a83c4E" />
    <input type="hidden" name="subject" value="New message from your portfolio" />
    <input type="hidden" name="from_name" value="Portfolio Contact" />
    
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    
    <button type="submit">Send Message →</button>
    <p class="form-status"></p>
  </form>
</section>

<style>
  .hero {
    padding: 6rem 0;
    max-width: 800px;
  }
  .hero h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
  .hero p {
    font-size: 1.25rem;
    color: #94a3b8;
    margin-bottom: 2rem;
  }
  .cta-btn {
    background: #38bdf8;
    color: #0f172a;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
  }
  .projects-section { padding: 4rem 0; }
  .projects-section h2 { font-size: 2rem; margin-bottom: 2rem; }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .card {
    background: #1e293b;
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid #334155;
    display: flex;
    flex-direction: column;
  }
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .card-content h3 { margin-top: 0; margin-bottom: 0.5rem; font-size: 1.35rem; }
  .card-content p { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; }
  .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; margin-top: auto;}
  .tags span {
    background: #0f172a;
    color: #38bdf8;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .project-link {
    color: #38bdf8;
    text-decoration: none;
    font-weight: 500;
  }
  .contact-section {
    padding: 4rem 0;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  .contact-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
    text-align: left;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form-group label {
    font-weight: 500;
    color: #cbd5e1;
  }
  .form-group input,
  .form-group textarea {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 0.5rem;
    padding: 0.75rem;
    color: #f8fafc;
    font-family: inherit;
    font-size: 1rem;
  }
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #38bdf8;
  }
  .contact-form button {
    background: #38bdf8;
    color: #0f172a;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .contact-form button:hover {
    background: #0ea5e9;
  }
  .form-status {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
  }
</style>
