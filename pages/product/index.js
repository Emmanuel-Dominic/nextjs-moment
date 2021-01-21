import Link from 'next/link'

function ProductList({ products = [{id: 1, name: 'Product 1'}, {id: 2, name: 'Product 2'}, {id: 3, name: 'Product 3'}, {id: 4, name: 'Product 4'}, {id: 5, name: 'Product 5'}]}) {
    return (
    <div>
        {products && products.length>0 ? (products.map((product, index) => 
        <h1 key={index}>
            <Link href={`/product/${product.id}`} replace={product.id==3 ? true : false}>
                <a>{product.name}</a>
            </Link>
        </h1>)) : (<h1>No Products found!</h1>)}   
    </div>)
}

export default ProductList;
