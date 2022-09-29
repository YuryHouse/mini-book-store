import Head from "next/head";
import Title from "../../components/Title";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {NextPageContext} from "next";


const Book = ({book: serverBook}: any) => {
    const[book, setBook] = useState(serverBook)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`https://gutendex.com/books/${router.query.id}`);
            const data = await response.json();
            setBook(data);
        }

        if (!serverBook) {
            load()
        }
    }, [])

    if (!book) {
       return <Title text={'Loading...'}/>
    }

    return (
        <div>
            <Head>
                <title>Book</title>
            </Head>
            <Title text = {book.title} />
            <div>
                <strong>Item ID: </strong>
                {book.id}
            </div>
            <hr/>
            <div><img src={book.formats['image/jpeg']} alt={'wrapper'}/></div>
            <div>
                <strong>Author(s): </strong>
                {book.authors[0]?.name}
            </div>
            <div><strong>Total downloads count: </strong>
                {book.download_count}</div>
            <hr/>
            <div><Link href={`/books`}>{'<-- Go back'}</Link></div>
        </div>
    );
};

Book.getInitialProps = async ({query, req}: NextPageContext ) => {
    if(!req) {
        return {book: null}
    }
    const response = await fetch(`https://gutendex.com/books/${query.id}`);
    const book = await response.json();

    return {
       book
    }
}

export default Book;