<script>
  import '../../lib';
</script>

<main>
  <h1>Porton Components Demo</h1>
  <hr />

  <div class="container">
    <small>&lt;my-clock&gt;</small>
    <my-clock></my-clock>
  </div>
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 3em;
    line-height: 1.1;
    font-weight: 100;
    margin-bottom: 0;
  }

  hr {
    margin-bottom: 4rem;
    opacity: 0.1;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }

    .container {
      margin: 0 auto;
      max-width: 320px;
    }
  }
</style>