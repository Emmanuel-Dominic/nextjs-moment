import { useState, useEffect } from "react";
import { getSession, signIn } from 'next-auth/client'

export default function Dashboard() {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ dashboardData, setDashboardData ] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`)
            const data = await response.json()
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setDashboardData(data)
                setIsLoading(false)  
            }
        }
        fetchDashboardData()
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h4>Posts - {dashboardData.posts}</h4>
            <h4>Likes - {dashboardData.likes}</h4>
            <h4>Followers - {dashboardData.followers}</h4>
            <h4>Following - {dashboardData.following}</h4>
        </div>
    )
}
