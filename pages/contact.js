import Head from 'next/head'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Page</title>
            </Head>
            <h2>Contact Page</h2>
            <p className={styles.highlight}>ematembu2@gmail.com</p>
            <button className="btn btn-lg btn-primary">Submit</button>
        </>
    )
}
