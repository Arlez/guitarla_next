import Layout from '../components/Layout'
import Image from 'next/dist/client/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros'/>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non pretium nulla. Duis in rhoncus ex, eu vulputate nisl. In id nunc sed sapien vestibulum aliquet. Donec dapibus vel metus ut varius. 
                        </p>
                        <p>
                            Vestibulum maximus non quam sit amet gravida. Aenean bibendum hendrerit velit non bibendum. Proin vehicula diam metus, vitae finibus neque pharetra quis. Sed et tristique lectus. Donec tempor faucibus lorem a consequat. Donec arcu purus, sodales in aliquam id, molestie non magna. In a risus sit amet magna viverra vulputate.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros