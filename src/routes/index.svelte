<script>
  import Card from "$lib/Card.svelte";
  import { dataKarya } from "$lib/store.js";
  // console.log($dataKarya);
</script>

<div class="cardList">
  {#each $dataKarya as karya}
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
