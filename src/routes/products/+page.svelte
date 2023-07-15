<script>
    let productId = 245
</script>

<h1>Product home page</h1>
<a href="/">Home</a>
<ul>
    <li><a href="/products/1">Product 1</a></li>
    <li><a href="/products/2">Product 2</a></li>
    <li><a href="/products/3">Product 3</a></li>
    <li><a href={`/products/${productId}`}>Product {productId}</a></li>

</ul>