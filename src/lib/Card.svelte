<script>
  import { goto } from "$app/navigation";
</script>

<div class="card">
  <div class="cardItem">
    <img src="cover.jpg" alt="cover book" class="coverBook" />
    <div class="description">
      <h2>BOOK TITLe</h2>
      <p>Author: Jhony Joly</p>
      <p class="synopsis">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        dolorem a soluta facere distinctio ducimus totam blanditiis."
      </p>
      <div class="action">
        <!--button> Share </button-->
        <a href="/karya"> Lihat Karya </a>
      </div>
    </div>
  </div>
</div>

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
  .synopsis {
    font-style: italic;
    margin: 5px 0;
    color: var(--color-subtext);
  }
  .action {
    text-align: right;
    margin-top: 20px;
  }
  a {
    background-color: var(--color-primary-100);
    color: var(--color-black);
    padding: 5px 10px;
    margin: 0 5px;
    font-size: 16px;
    border: 2px solid var(--color-text);
  }
</style>
