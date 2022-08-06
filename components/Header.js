/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link"
import styles from "../styles/Header.module.css"
import Image from "next/image"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div>
                    <Link 
                        href="/"
                    >
                        <Image
                            width={400}
                            height={100}
                            src="/img/logo.svg" 
                            alt="imagen logo"
                        />
                    </Link>
                </div>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header