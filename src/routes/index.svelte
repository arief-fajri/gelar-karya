<script>
  import Card from "$lib/Card.svelte";
  import { filtered } from "$lib/store.js";
</script>

<div class="cardList">
  {#each $filtered as karya}
    <Card {karya} />
  {/each}
</div>

<style>
  .cardList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    gap: 2rem;
  }
</style>
