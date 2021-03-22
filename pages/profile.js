import Image from 'next/image'

function Profile() {
    return (<>
        <h1>Profile Page</h1>
        {
            ['1', '2'].map(path => {
                return (
                    <div key={path}>
                        <Image src={`/user${path}.jpg`} alt={path} width='280' height='420' />
                    </div>
                )
            })
        }
    </>)
}

export default Profile;
