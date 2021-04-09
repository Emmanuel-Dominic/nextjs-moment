import { useState } from "react"
import { useRouter } from "next/router";

export default function EvenList({eventList}) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchTechnologyEvents = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events?category=technology`);
        const data = await response.json();
        setEvents(data)
        router.push('/events?category=technology', undefined, {shallow: true})
    }
    return (
        <>
            <button onClick={fetchTechnologyEvents}>Tech Events</button>
            <h1>List of Events</h1>
            {
                events.map(event => {
                    return (
                        <div key={event.id}>
                            <h3>{event.id} . {event.title} - {event.date} | {event.category}</h3>
                            <p>{event.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}


export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=technology' : ""
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}