<script>
  import { createEventDispatcher } from "svelte";
  export let isOpenModal;

  const dispatch = createEventDispatcher();

  function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
    isOpenModal = false;
    dispatch("closeModal", { isOpenModal });
  }
</script>

<h1>Unggah Karya</h1>
<form on:submit|preventDefault={onSubmit}>
  <div class="inputContainer">
    <input type="text" id="nama" />
    <label for="nama">Nama Anda</label>
  </div>
  <div class="inputContainer">
    <input type="email" id="email" />
    <label for="email">Email Anda</label>
  </div>
  <div class="inputContainer">
    <input type="text" id="judul" />
    <label for="judul">Judul Karya</label>
  </div>
  <div class="inputContainer">
    <textarea id="sinopsis" />
    <label for="sinopsis">Sinopsis</label>
  </div>
  <div class="inputFile">
    <input type="file" id="file" />
  </div>
  <div class="action">
    <button type="submit">Publish Karyamu</button>
  </div>
</form>

<style>
  h1 {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 0;
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
