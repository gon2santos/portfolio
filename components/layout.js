import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

const name = 'Gonzalo Dos Santos';
export const siteTitle = 'Gonzalo Dos Santos';

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <Link href="/">
            <Image
              priority
              src="/images/illuscrab.png"
              className={utilStyles.borderCircle}
              height={90}
              width={90}
              alt=""
            />
          </Link>
        </div>
        <div className={styles.navbar_links}>
          <span>About me</span>
          <span>My Work</span>
          <span>Contact</span>
        </div>
        <div className={styles.navbar_social}>
          <Image priority src="/images/github.svg" height={24} width={24} alt="" />
          <Image priority src="/images/linkedin.svg" height={24} width={24} alt="" />
        </div>
      </div>
      <Divider variant="middle" />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Gonzalo Dos Santos Blog"
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
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <section>
        <span className={utilStyles.smallText}>Illuscrab © 2022 by Gonzalo Dos Santos Necchi is licensed under CC BY-NC-ND 4.0</span>
      </section>
    </>
  );
}
