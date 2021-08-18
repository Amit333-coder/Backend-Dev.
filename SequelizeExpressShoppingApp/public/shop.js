function fetchProducts(done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function addProduct(name,manuf,price,done){
    $.post('/api/products',{
        name:name,
        manufacturer:manuf,
        price:price
    },function(data){
        done(data)
    })
}

function createProducts(product){
    return $(` <div class="col-4 card mx-2 p-2">
    <div class="product-name">${product.name}</div>
    <div class="manufacturer">${product.manufacturer}</div>
    <div class="row">
        <div class="col m-3 -p3">
            Rs.${product.price}
        </div>
        <button class="btn btn-primary">Buy</button>
    </div>
</div>`)
}