<script>
  import { goto, beforeNavigate, afterNavigate } from "$app/navigation";
  const handleClick = () => {
    console.log("🚀 ~ file: +page.svelte:5 ~ handleClick Placing order....");
    goto("/products");
  };

  beforeNavigate((navigation) => {
    console.log(
      "🚀 ~ file: +page.svelte:9 ~ beforeNavigate ~ navigation:",
      navigation
    );
  });
  afterNavigate((navigation) => {
    console.log(
      "🚀 ~ file: +page.svelte:15 ~ afterNavigate ~ navigation:",
      navigation
    );
  });
</script>

<h1>Welcome Home!</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->


<a href="/profile">Profile</a>
<a href="/about">About</a>
<a href="/products">Product</a>

<button on:click={handleClick}>Place Order</button>
