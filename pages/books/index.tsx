import Title from "../../components/Title";
import Head from "next/head";
import Image from "next/image";

// type BooksType = {
//     count: number
//     next: string | null
//     previous: string | null,
//     results: any
// }
//
// type BookType = {
//     id: number
//     title: string
//     subjects: string[]
//     authors: PersonType[]
//     translators: PersonType[]
//     bookshelves: string[]
//     languages: string[]
//     copyright: boolean | null
//     media_type: string
//     formats: Format
//     download_count: number
// }
//
// type PersonType = {
//     birth_year: number | null
//     death_year: number | null
//     name: string
// }

// type Format = {
//     ['image/jpeg']: string,
// }

export const getStaticProps = async () => {
  const response = await fetch('https://gutendex.com/books');
  const data = await response.json();

  return {
      props: {books: data},
  }
}

const Books = ({books}: any) => {
        return (
            <div>
                <Head>
                    <title>Books</title>
                </Head>
                <Title text='Bookshelf'/>
                <div>
                    {books && books.results.map(({id, title, download_count, authors, formats}: any) => {
                        let urlAddress = formats['image/jpeg']
                        let name = authors[0]?.name ?  authors[0].name : ''

                        return (
                            <div key={id}>
                                <div><img src={urlAddress} alt={'wrapper'}/></div>
                                <div>
                                    <div><strong>Title: {title}</strong></div>
                                    <div><i>Author(s): {name}</i></div>
                                    <div>Total download count: {download_count}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
;

export default Books;

