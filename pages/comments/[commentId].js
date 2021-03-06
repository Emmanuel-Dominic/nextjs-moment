import { comments } from '../../data/comments';

export default function Comment({comment}) {
    return (
        <div>
            {comment.id}. {comment.text}
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {commentId: '1'}},
            {params: {commentId: '2'}},
            {params: {commentId: '3'}},
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const {commentId} = params

    const comment = comments.find(comment => comment.id === parseInt(commentId))

    /** Don't call an api for pre-rendering
     *    const response = await fetch(`/api/comments/${commentId}`)
     *    const data = await response.json() 
     */

    return {
        props: {
            comment
        }
    }
}
