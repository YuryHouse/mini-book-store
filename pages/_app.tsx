import '../styles/globals.scss'
import {AppProps} from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap"
                rel="stylesheet"/>
        </Head>
        <main>
            <NextNProgress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps} />
        </main>
    </Layout>
);

export default MyApp;
