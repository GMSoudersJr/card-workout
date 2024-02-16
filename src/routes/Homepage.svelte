<script>
</script>

<main>
  <div class="header">
    <h1 class="oswald-header">SUIT YOURSELF</h1>
  </div>
  <nav class="nav-container">
    <a
      class="nav-item oswald-header"
      href="/about"
    >
      ABOUT
    </a>
    <a
      class="nav-item oswald-header"
      href="/cards"
    >
      CARDS
    </a>
    <a
      class="nav-item oswald-header"
      href="/exercises"
    >
      EXERCISES
    </a>
  </nav>
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    background: radial-gradient(circle at bottom center, #39FF14, #000080);
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  .header {
    color: #FFFFFF;
  }
  .nav-container {
    width: 300px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 1rem;
  }
  .nav-item {
    width: 100%;
    padding: 12px 15px;
    border: 4px solid #000080;
    border-radius: 8px;
    display: grid;
    justify-content: center;
    text-decoration: none;
    color: #000080;
    font-size: x-large;
  }
</style>

