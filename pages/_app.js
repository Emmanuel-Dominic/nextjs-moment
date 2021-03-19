import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../styles/layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary: '#355C7D'
    }
}

function MyApp({ Component, pageProps }) {
    if (Component.getLayout) {
        return Component.getLayout(<><Navbar /><Component {...pageProps} /></>)
    }

    return (
        <>
            <Head>
                <title>Learn NextJs</title>
                <meta name='description' content='Learn NextJs webdevelopment' />
            </Head>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>)
}

export default MyApp
