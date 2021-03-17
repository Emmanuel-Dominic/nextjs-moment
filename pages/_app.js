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
    <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>)
}

export default MyApp
