<script>
  import { createEventDispatcher } from "svelte";
  import { dataKarya } from "$lib/store.js";
  import { goto } from "$app/navigation";
  export let isOpenModal;
  let verified;
  const dispatch = createEventDispatcher();
 
  function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    
    data.id = $dataKarya.length + 2;
    console.log(data);
    $dataKarya = [...$dataKarya, data]
    verified = true;
  }
  function modalClose() {
    verified = false;
    dispatch("closeModal", { isOpenModal });
    goto("/")
  }
</script>
{#if !verified}
<h1>Unggah Karya</h1>
<form on:submit|preventDefault={onSubmit}>
  <div class="inputContainer">
    <input type="text" id="nama" name="penulis" required/>
    <label for="nama">Nama Anda</label>
  </div>
  <div class="inputContainer">
    <input type="email" id="email" name="email" required/>
    <label for="email">Email Anda</label>
  </div>
  <div class="inputContainer">
    <input type="text" id="judul" name="judul" required/>
    <label for="judul">Judul Karya</label>
  </div>
  <div class="inputContainer">
    <textarea id="sinopsis" name="sinopsis"/>
    <label for="sinopsis">Sinopsis</label>
  </div>
  <!--div class="inputFile">
    <input type="file" id="file" readonly/>
  </div-->
  <div class="action">
    <button type="button" on:click={modalClose}>Batalkan</button>
    <button type="submit">Publish Karyamu</button>
  </div>
</form>
{:else}
<h2>Terimakasih,<br> Karya anda sedang diperiksa oleh tim editor.</h2>
<h3>Kami akan segera memberitahu anda melalui email. </h3>
<button type="button" on:click={modalClose}>OK!</button>
{/if}

<style>
  h1 {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 0;
  }
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  form {
    width: 100%;
    padding: 20px;
  }
  input,
  textarea {
    width: 100%;
    padding: 15px 10px 7px;
    border-radius: var(--rounded-md);
    font-size: 16px;
    font-family: var(--font-mono);
    border: 3px solid var(--color-text);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  }
  textarea {
    height: 150px;
    resize: none;
  }
  .inputContainer {
    position: relative;
    margin-bottom: 20px;
    font-family: var(--font-mono);
  }
  label {
    position: absolute;
    font-weight: bold;
    font-size: 14px;
    top: -12px;
    left: 10px;
    padding: 5px 10px 3px;
    line-height: 1;
    background-color: var(--color-white);
    border: 2.5px solid var(--color-text);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  }
  .inputFile input {
    padding: 10px;
  }
  .action {
    margin-top: 20px;
    text-align: right;
  }
  button {
    padding: 5px 15px;
    margin-left: 10px;
  }
</style>
