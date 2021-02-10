import Link from 'next/link'

function NewsArticleList({articles}) {
    return (
        <>
          <h1>List of News Articles</h1>
          {articles.map(article => {
            return (
                <div key={article.id}>
                    <h2>{article.id} - {article.title} - ({article.category})</h2>
                    <hr />
                </div>
            )
          })
          }
        </>
    )
}

export default NewsArticleList;

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/articles');
    const data = await response.json();

    return {
        props: {
            articles: data
        }
    }
}