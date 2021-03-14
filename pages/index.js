import { useRouter } from "next/router";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.colors.primary};
`

function Home() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/product');
        // router.replace('/product');
    }

    return (
    <>
      <Title>Home Page</Title>
      <button onClick={handleClick} style={{color: "black", backgroundColor: "aqua"}}>Place Order</button>
    </>)
}

export default Home;
