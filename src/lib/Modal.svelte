<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let isOpenModal;

  function closeModal() {
    isOpenModal = false;
    dispatch("closeModal", { isOpenModal });
  }
</script>

<div
  class="backdrop"
  style="display: {isOpenModal ? 'block' : 'none'};"
  on:click|self={closeModal}
>
  <div class="modal">
    <slot />
  </div>
</div>

<style>
  .modal {
    width: 640px;
    padding: 20px;
    margin: 35px auto;
    background-color: var(--color-primary-100);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 5px solid var(--color-main);
    max-height: calc(100% - 60px);
    overflow-y: auto;
  }
  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
</style>
