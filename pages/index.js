import { useRouter } from "next/router";
import { useSession } from 'next-auth/client'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.colors.primary};
`

function Home() {
    const router = useRouter();
    const [session, loading] = useSession()
    const handleClick = () => {
        router.push('/product');
        // router.replace('/product');
    }

    return (
    <>
      <Title>Home Page</Title>
      <h4>{session ? `${session.user.name}, `: ''} Welcome to NextJs Home Page</h4>
      <button onClick={handleClick} style={{color: "black", backgroundColor: "aqua"}}>Place Order</button>
    </>)
}

export default Home;
