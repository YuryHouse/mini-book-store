import Title from "../../components/Title";
import Head from "next/head";

const Book = () => {
    return (
        <div>
            <Head>
                <title>Book</title>
            </Head>
            <Title text='Book'/>
            <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
        </div>
    );
};

export default Book;