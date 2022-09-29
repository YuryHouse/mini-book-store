import '../styles/globals.scss'
import {AppProps} from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap"
                rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
);

export default MyApp;
