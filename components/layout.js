import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Divider from '@mui/material/Divider';
import { Link, animateScroll as scroll } from "react-scroll";

const name = 'Gonzalo Dos Santos';
export const siteTitle = 'Gonzalo Dos Santos';

export default function Layout({ children, home }) {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar_logo}>
                    {/* <Link href="/"> */}
                    <Image
                        priority
                        src="/images/illuscrab.png"
                        height={90}
                        width={90}
                        alt=""
                    />
                    {/* </Link> */}
                </div>
                <div className={styles.navbar_links}>
                    <Link
                        className={styles.navbar_elements}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-500}
                        duration={500}
                    >About</Link>
                    <Link
                        className={styles.navbar_elements}
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={70}
                        duration={500}
                    >My Work</Link>
                    <Link
                        className={styles.navbar_elements}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                </div>
                <div className={styles.navbar_social}>
                    <a className={utilStyles.lightLinks} href="https://github.com/gon2santos" rel="noreferrer" target="_blank"><Image priority src="/images/github.svg" height={24} width={24} alt="" className={styles.icon_color_filter} /></a>
                    <a className={utilStyles.lightLinks} href="https://linkedin.com/in/gonzalodossantos" rel="noreferrer" target="_blank"><Image priority src="/images/linkedin.svg" height={24} width={24} alt="" className={styles.icon_color_filter} /></a>
                </div>
            </div>
            <Divider variant="middle" />
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Gonzalo Dos Santos"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.vercel.app/${encodeURI(
                            siteTitle,
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <header className={styles.header}>
                    <h2 className={utilStyles.headingLg}>
                        {name}
                    </h2>
                </header>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        {/* <Link href="/">← Back to home</Link> */}
                    </div>
                )}
            </div>
            <section>
                <span className={utilStyles.smallText}>Illuscrab © 2022 by Gonzalo Dos Santos Necchi is licensed under CC BY-NC-ND 4.0</span>
            </section>
        </>
    );
}
