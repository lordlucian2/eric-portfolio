<script>
  export let data;
  $: project = data.project;
</script>

<article class="case-study">
  <a href="/" class="back-link">&larr; Back to Portfolio</a>
  
  <header class="study-header">
    <h1>{project.title}</h1>
    <p class="meta">Client: <strong>{project.client}</strong></p>
  </header>

  <hr />

  <section class="narrative">
    <div class="block">
      <h2>The Challenge</h2>
      <p>{project.challenge}</p>
    </div>

    <div class="block">
      <h2>The Strategy</h2>
      <p>{project.strategy}</p>
    </div>

    <div class="block">
      <h2>The Solution</h2>
      <p>{project.solution}</p>
    </div>

    <div class="block status-box">
      <h2>The Outcome</h2>
      <p>{project.result}</p>
    </div>
  </section>
</article>

<style>
  .case-study { max-width: 800px; margin: 2rem auto; padding-bottom: 6rem; }
  .back-link { color: #64748b; text-decoration: none; font-size: 0.9rem; display: inline-block; margin-bottom: 2rem; }
  .back-link:hover { color: #38bdf8; }
  .study-header h1 { font-size: 2.75rem; margin-bottom: 0.5rem; }
  .meta { color: #94a3b8; font-size: 1.1rem; }
  hr { border: 0; border-top: 1px solid #1e293b; margin: 2rem 0; }
  .block { margin-bottom: 3rem; }
  .block h2 { font-size: 1.5rem; color: #38bdf8; margin-bottom: 0.75rem; }
  .block p { font-size: 1.1rem; line-height: 1.6; color: #cbd5e1; }
  .status-box {
    background: #1e293b;
    border-left: 4px solid #38bdf8;
    padding: 1.5rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }
  .status-box h2 { color: white; margin-top: 0; }
</style>
