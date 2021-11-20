<script>
  import Modal from "./Modal.svelte";
  import { goto } from "$app/navigation";
  import FormAdd from "./FormAdd.svelte";
  import { searchItems } from "./store.js";
  import { page } from "$app/stores"

  $: isActive = $page.path === "/";

  let isOpenModal = false;
  const toggleModal = () => {
    isOpenModal = !isOpenModal;
  };
  let val = "";
  $: searchItems.set(val);

</script>

<header>
  <!--h1 on:click={() => goto("/")}>GelarKarya</h1-->
  <img src="logo.png" alt="logo" />
  {#if isActive}
  <input bind:value={val} type="text" placeholder="Cari Judul Karya . . ." />
  {/if}
  <div>
    <button on:click={() => goto("/")}>Etalase</button>
    <button on:click={() => goto("/faq")}>F.A.Q</button>
    <button on:click={toggleModal} class="default">Unggah Karyamu</button>
  </div>
</header>

<Modal {isOpenModal} on:closeModal={toggleModal}>
  <FormAdd {isOpenModal} on:closeModal={toggleModal} />
</Modal>

<style>
  header {
    width: 100%;
    height: 72px;
    background-color: var(--color-main);
    padding: 0 20px;
    box-shadow: var(--shadow-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: auto;
    height: 75px;
    margin-top: -15px;
    cursor: pointer;
  }
  button {
    padding: 10px 15px;
    background-color: var(--color-main);
    color: var(--color-white);
    border-color: var(--color-white);
    margin-left: 10px;
  }
  .default {
    background-color: var(--color-white);
    color: var(--color-main);
  }
  input {
    width: 300px;
    padding: 5px;
    border-radius: var(--rounded-md);
    font-size: 16px;
    font-family: var(--font-mono);
    border: 3px solid var(--color-text);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  }
</style>
