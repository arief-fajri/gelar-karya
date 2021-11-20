<script>
    import Modal from "./Modal.svelte";
    import {currentPage} from './store.js'
    import { goto } from "$app/navigation";
    import FormAdd from "./FormAdd.svelte";
  
    let isOpenModal = false;
    const toggleModal = ()=>{
      isOpenModal = !isOpenModal
    }
      function letsWrite() {
        goto("/write");
      }
  </script>
  
  <header>
    <h1 on:click={()=>goto("/")}>GelarKarya</h1>
    <p>{$currentPage}</p>
    <button on:click={toggleModal}>Unggah Karyamu</button>
  </header>
  
  <Modal isOpenModal={isOpenModal} on:closeModal={toggleModal}>
    <FormAdd isOpenModal={isOpenModal} on:closeModal={toggleModal} />
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
    h1 {
      margin: 0;
      color: var(--color-white);
      cursor: pointer;
    }
    button {
      padding: 10px 15px;
      background-color: var(--color-main);
      color: var(--color-white);
      border-color: var(--color-white);
    }
  </style>
  