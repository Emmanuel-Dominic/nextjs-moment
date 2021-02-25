import { useState } from "react"

export default function CommentsPage() {
    const [comments, setComents] = useState([])
    const [comment, setComent] = useState('')

    const fetchComments = async() => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComents(data)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <>
            <input type="text" value={comment} onChange={e => setComent(e.target.value)} />
            <button onClick={submitComment}>Submit comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map(comment => {
                    return(
                        <div key={comment.id}>
                            {comment.id}. {comment.text}
                        </div>
                    )
                })
            }
        </>
    )
}