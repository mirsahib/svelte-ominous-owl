
<script lang="ts">
    import {page } from "$app/stores"
    const greetings:{[key:string]:string} = {
        en :"Hello",
        es:"Hola",
        fn:'Bonjour'
    }

    const {lang="en"} = $page.params
    const greeting = greetings[lang]
</script>

<h1>{greeting}</h1>