import Title from "../components/Title";
import {useEffect} from "react";
import {useRouter} from "next/router";
import styles from "../styles/404.module.scss"
import Head from "next/head";

const Error = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Error</title>
            </Head>
            <div>
                <Title text='404'/>
                <Title tag='h2' text='Something is going wrong...'/>
            </div>
        </div>
    );

};

export default Error;