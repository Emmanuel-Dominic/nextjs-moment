import { useRouter } from 'next/router'

function NewsArticleByCategory({articles,  category}) {
    const router = useRouter()

    return (
        <>
            <h1>Showing news for category <i>{category}</i></h1>
            { articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>{article.id} - {article.title} - ({article.category})</h2>
                        <p>{article.description}</p>
                    </div>
            )})}
        </>
    )
}

export default NewsArticleByCategory;

export async function getServerSideProps(context) {
    const { params } = context;
    const { category } = params;
    const response = await fetch(`http://localhost:4000/articles?category=${category}`);
    const data = await response.json();

    return {
        props: {
            articles: data,
            category
        }
    }
}
