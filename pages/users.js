import User from "../components/user";

function UserList({users}) {
    return (
        <>
        <h1>List of users</h1>
            {
                users && users.length>0 ? users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
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