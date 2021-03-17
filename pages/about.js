import Footer from '../components/Footer';
import styles from '../styles/About.module.scss'

function About() {
    return <h1 className={styles.highlightsass}>About Page</h1>
}

export default About;

About.getLayout = function PageLayout(page) {
    return (
        <>
        {page}
        <Footer />
        </>
    )
}
