import { useRouter } from "next/router";
import styles from '../styles/Navbar.module.scss';
import Link from "next/link";
import Image from "next/image";

type NavigationType = {
    id: number,
    title: string,
    path: string
}

const navigation: NavigationType[] = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Books', path: '/books'},
]

const Navbar = () => {
    const { pathname } = useRouter();
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={'/book.png'} width={100} height={100} alt={'bookshop'} />
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : undefined}>{title}</a>
                    </Link>
                ))}
            </div>

        </nav>
    );
};

export default Navbar;