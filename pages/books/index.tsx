import Title from "../../components/Title";
import Head from "next/head";
import Link from "next/link";

export type BooksType = {
    count: number
    next: string | null
    previous: string | null,
    results: BookType
}

export type BookType = {
    id: number
    title: string
    subjects: string[]
    authors: PersonType[]
    translators: PersonType[]
    bookshelves: string[]
    languages: string[]
    copyright: boolean | null
    media_type: string
    formats: Format
    download_count: number
}

export type PersonType = {
    birth_year: number | null
    death_year: number | null
    name: string
}

export type Format = {
    ['image/jpeg']: string,
}

export const getStaticProps = async () => {
    try {
        const response = await fetch('https://gutendex.com/books');
        const data = await response.json();

        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {books: data},
        }
    } catch {
        return {
            props: {books: null},
        }
    }
};

const Books = ({books}: any) => {
    return (
        <div>
            <Head>
                <title>Books</title>
            </Head>
            <Title text='Bookshelf'/>
            <div>
                {books && books.results.map(({id, title, download_count, authors, formats}: BookType) => {
                    let urlAddress = formats['image/jpeg']
                    let name = authors[0]?.name ? authors[0].name : ''

                    return (
                        <div key={id}>

                            <div><Link href={`/books/${id}`}><img src={urlAddress} alt={'wrapper'}/></Link></div>
                            <div>
                                <div><Link href={`/books/${id}`}><strong>Title: {title}</strong></Link></div>
                                <div><i>Author(s): {name}</i></div>
                                <div>Total downloads count: {download_count}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Books;

