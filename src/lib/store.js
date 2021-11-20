import { writable, derived } from "svelte/store";

export let currentPage = writable('Home');
export let dataKarya = writable([
    {
        id: 1,
        penulis: "sofia",
        email: "abc@def.com",
        judul: "my teacher my husband",
        sinopsis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolorem a soluta facere distinctio ducimus totam blanditiis.",
        cover: "",
        file: "$repo/My-Teacher-My-Husband.pdf"
    },
    {
        id: 2,
        penulis: "flazia",
        email: "abc@def.com",
        judul: "gravitasia",
        sinopsis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolorem a soluta facere distinctio ducimus totam blanditiis.",
        cover: "",
        file: "$repo/gravitasia.pdf"
    },
    {
        id: 3,
        penulis: "septy brown",
        email: "abc@def.com",
        judul: "puzzle",
        sinopsis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolorem a soluta facere distinctio ducimus totam blanditiis.",
        cover: "",
        file: "$repo/Puzzle.pdf"
    }
]);
