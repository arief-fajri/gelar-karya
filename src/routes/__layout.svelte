<script>
  import "../global.css";
  import Header from "$lib/Header.svelte";
</script>

<svelte:head>
  <title>WebVel</title>
</svelte:head>
<Header />

<main>
  <slot />
</main>
