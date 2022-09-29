import Title from "../components/Title";
import styles from '../styles/Home.module.scss'
import Head from "next/head";
import Link from "next/link";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Home</title>
            </Head>
            <Title text='Hello, welcome to our BookHouse!'/>
            <p><Link href={'./books'}>{"Let's see our BookShelf! -->"}</Link></p>
        </div>
    );
};

export default Home;