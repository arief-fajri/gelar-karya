<script>
  import FormConfirm from "./FormConfirm.svelte";
  import Modal from "./Modal.svelte";

  export let karya;
  let isOpenModal = false;
  let itemId = karya.id
  const toggleModal = () => {
    isOpenModal = !isOpenModal;
  };
</script>

<div class="card">
  <div class="cardItem">
    <img src="cover.jpg" alt="cover book" class="coverBook" />
    <div class="description">
      <h2>{karya.judul}</h2>
      <p class="author">Penulis: {karya.penulis}</p>
      <p class="synopsis">
        "{karya.sinopsis}"
      </p>
      <div class="action">
        <!--a href={`/${karya.id}`}> Lihat Karya </a-->
        <button on:click={toggleModal}>Donasi<br>(Min. Rp 10.000)</button>
        <button on:click={toggleModal}>Beli<br>(Rp 100.000)</button>
      </div>
    </div>
  </div>
</div>

<Modal {isOpenModal} on:closeModal={toggleModal}>
  <FormConfirm {isOpenModal} {itemId} on:closeModal={toggleModal} />
</Modal>

<style>
  .card {
    background-color: var(--color-white);
    padding: 20px;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 5px solid var(--color-main);
  }
  .cardItem {
    display: inline-flex;
    align-items: center;
  }
  .coverBook {
    width: 150px;
    height: 200px;
    background-color: var(--color-text);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    object-fit: cover;
  }
  .description {
    margin-left: 25px;
    align-self: flex-start;
  }
  .description h2 {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .author {
    text-transform: capitalize;
  }
  .synopsis {
    font-style: italic;
    margin: 5px 0;
    color: var(--color-subtext);
  }
  .action {
    text-align: right;
    margin-top: 10px;
  }
  button {
    background-color: var(--color-primary-100);
    color: var(--color-black);
    padding: 5px 10px;
    margin: 0 5px;
    font-size: 16px;
    border: 2px solid var(--color-text);
    margin-top: 10px;
  }
</style>
