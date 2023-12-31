import Head from 'next/head'
import { useRouter } from 'next/router'

function Product({product}) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Head>
                <title>{product.title}</title>
                <meta name='description' content={product.description} />
            </Head>
            <div>
                <h2>{product.id} - {product.title} - ({product.price})</h2>
                <p>{product.description}</p>
            </div>
        </>
    )
}

export default Product;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {productId: '1'}
            }
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${params.productId}`);
    const data = await response.json();

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}
