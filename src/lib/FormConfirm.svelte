<script>
  import { createEventDispatcher } from "svelte";
  import { goto } from "$app/navigation";
  export let isOpenModal;
  export let itemId;
  const dispatch = createEventDispatcher();

  function modalClose() {
    dispatch("closeModal", { isOpenModal, itemId });
  }
</script>

<h1>KORFIRMASI PEMBAYARAN</h1>
<p>ID : {itemId}</p>
<div>
<button type="button" on:click={modalClose}>OK!</button>
</div>

<style>
    div {
        text-align: center;
    }
    button {
        padding: 5px 15px;
    }
</style>