<script>
  let { children } = $props();
</script>

<div class="app-container">
  <header>
    <nav>
      <a href="/" class="logo">YourName<span>.dev</span></a>
      <div class="nav-links">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact" class="btn-nav">Let's Talk</a>
      </div>
    </nav>
  </header>

  <main>
    {@render children?.()}
  </main>

  <footer>
    <p>&copy; {new Date().getFullYear()} Your Name. Built with SvelteKit.</p>
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: #0f172a;
    color: #f8fafc;
  }
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  header {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    color: white;
  }
  .logo span { color: #38bdf8; }
  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .nav-links a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: white; }
  .btn-nav {
    background: #38bdf8;
    color: #0f172a !important;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 600;
  }
  main {
    flex: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
  }
  footer {
    text-align: center;
    padding: 2rem;
    color: #64748b;
    border-top: 1px solid #1e293b;
  }
</style>
