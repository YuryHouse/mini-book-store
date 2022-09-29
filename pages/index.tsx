import Title from "../components/Title";
import styles from '../styles/Home.module.scss'
import Head from "next/head";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Home</title>
            </Head>
            <Title text='Hello, world!'/>
        </div>
    );
};

export default Home;