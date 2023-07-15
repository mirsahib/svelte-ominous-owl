<script>
    import {page} from "$app/stores"
    console.log("🚀 ~ file: +page.svelte:3 ~ page:", $page.params)

    const slugArr = $page.params.slug.split('/')
    console.log("🚀 ~ file: +page.svelte:6 ~ slugArr:", slugArr)
</script>

<h1>Docs home page</h1>

{#if slugArr.length == 1 }
<h1>Viewing docs for feature {slugArr[0]}</h1>
{:else if slugArr.length==2}
<h1>Viewing docs for feature {slugArr[0]} and concept {slugArr[1]}</h1>
{/if}