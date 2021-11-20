<script>
import { page } from "$app/stores";
import {dataKarya} from "$lib/store.js";

let cek = parseInt($page.params.slug)
   let karya =  $dataKarya.filter(k=>k.id === cek);
</script>
<article>
    <h1>{karya[0].judul}</h1>
    <p>{karya[0].file}</p>

    <canvas id="pdf"></canvas>

</article>