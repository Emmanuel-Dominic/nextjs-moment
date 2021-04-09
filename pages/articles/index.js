import Link from 'next/link'
import { getSession } from 'next-auth/client'

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

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/articles`);
    const data = await response.json();
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.PUBLIC_BASE_URL}/articles`,
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
            articles: data
        }
    }
}
