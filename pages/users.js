function UserList({users}) {
    return (
        <>
        <h1>List of users</h1>
            {
                users && users.length>0 ? users.map(user => {
                    return (
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </div>
                    )
                }) : "No users found"
            }
        </>
    )
}

export default UserList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data,
        },
    }
}