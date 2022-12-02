import Image from 'next/image';
import styles from './carousel.module.css';
import about from '../public/images/carousel/about.png';
import main from '../public/images/carousel/main.png';
import tienda from '../public/images/carousel/tienda.png';
import turnos from '../public/images/carousel/turnos.png';
import Template from './template';

export default function Carousel() {
    return <>
        <Template>
      {'<ol role="list" class="carousel-controls" aria-label="Navigation controls"><li><button class="carousel-control" aria-label="Previous" data-direction="start" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" > <polyline points="15 18 9 12 15 6"></polyline> </svg></button> <button class="carousel-control" aria-label="Next" data-direction="end"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" > <polyline points="9 18 15 12 9 6"></polyline> </svg> </button> </li> </ol>'}
        </Template>
        <div className={styles.carousel}>
            <div className={styles.carousel_scroll_container} role="region" aria-label="Image carousel" tabIndex="0">
                <ol className={styles.carousel_media} role="list">
                    <li className={styles.carousel_item}>
                        <Image
                            placeholder="blur"
                            src={main}
                            height={284}
                            width={500}
                            alt=""
                        />
                    </li>
                    <li className={styles.carousel_item}>
                        <Image
                            placeholder="blur"
                            src={about}
                            height={284}
                            width={500}
                            alt=""
                        />
                    </li>
                    <li className={styles.carousel_item}>
                        <Image
                            placeholder="blur"
                            src={tienda}
                            height={284}
                            width={500}
                            alt=""
                        />
                    </li>
                    <li className={styles.carousel_item}>
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