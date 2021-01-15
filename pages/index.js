import { useRouter } from "next/router";

function Home() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/product');
        // router.replace('/product');
    }

    return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </>)
}

export default Home;
