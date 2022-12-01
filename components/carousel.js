import Image from 'next/image';
import styles from './carousel.module.css';
import about from '../public/images/carousel/about.png';
import main from '../public/images/carousel/main.png';
import tienda from '../public/images/carousel/tienda.png';
import turnos from '../public/images/carousel/turnos.png';

export default function Carousel() {
    return <>
        <div className={styles.carousel}>
            <div className={styles.carousel_scroll_container} role="region" aria-label="Image carousel" tabindex="0">
                <ol className={styles.carousel_media} role="list">
                    <li className={styles.carousel_item}>
                        <Image
                            placeholder="blur"
                            src={about}
                            height={284}
                            width={500}
                            alt=""
                        />
                    </li>
                    <li>
                        <Image
                            placeholder="blur"
                            src={main}
                            height={284}
                            width={500}
                            alt=""
                        />
                    </li>
                    <li>
                        <Image
                            placeholder="blur"
                            src={tienda}
                            height={284}
                            width={500}
                            alt=""
                        />
                    </li>
                    <li>
                        <Image
                            placeholder="blur"
                            src={turnos}
                            height={284}
                            width={500}
                            alt=""
                        />
                    </li>
                </ol>
            </div>
        </div>
    </>
}