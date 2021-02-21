import { useState } from "react"

export default function CommentsPage() {
    const [comments, setComents] = useState([])

    const fetchComments = async() => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComents(data)
    }

    return (
        <>
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