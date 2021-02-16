import useSWR from "swr";

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}


// SWR - Stale While Revalidate
function DashboardSWR() {
    // useSWR automatically updates the UI (client side data)
    const { data, error } = useSWR('dashboard', fetcher)

    if (error) {return <h2>An error has occured!</h2>}
    if (!data) {return <h2>Loading...</h2>}

    return (
        <div>
            <h2>Dashboard</h2>
            <h4>Posts - {data.posts}</h4>
            <h4>Likes - {data.likes}</h4>
            <h4>Followers - {data.followers}</h4>
            <h4>Following - {data.following}</h4>
        </div>
    )
}

export default DashboardSWR
