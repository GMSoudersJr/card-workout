<script>
</script>

<main>
  <div class="header">
    <h1>Suits You Best</h1>
  </div>
  <nav class="nav-container">
    <div class="nav-item">
      <a href="/cards">Cards</a>
    </div>
    <div class="nav-item">
      <a href="/exercises">Exercises</a>
    </div>
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
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 1rem;
  }
  .nav-item {
    padding: 12px 15px;
    border: 4px solid #FFFFFF;
    border-radius: 8px;
    display: grid;
    justify-content: center;
  }
  .nav-item a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: x-large;
  }
</style>

