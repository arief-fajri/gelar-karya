<script>
  import Card from "$lib/Card.svelte";
</script>

<div class="cardList">
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
</div>

<style>
  .cardList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    gap: 2rem;
  }
</style>

