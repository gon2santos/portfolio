import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Fragment_Mono } from '@next/font/google';
import Carousel from '../components/carousel';

const fragment = Fragment_Mono({
    subsets: ['latin'],
    weight: '400',
});

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}


export default function Home({ allPostsData }) {

    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p className={fragment.className}>Developer. Designer.</p>
                </section>
                <section className={utilStyles.carousel} id="work">
                    <Carousel />
                </section>
                <section>
                    <h2 className={utilStyles.headingL}>
                        Gonzalo is a Full Stack Web Developer, <br></br>living in Buenos Aires, AR.
                    </h2>
                </section>
                <section id="about">
                    <span className={utilStyles.medText}>
                        With a background in tech, art and freelance, Gonzalo is experienced in just about every form of design. This, combined with his childhood obsession for taking apart and rebuilding electronics, helps to form the perfect balance of functional products with clean code to back it up. When he is not stuck to his computer, you can find him running through the streets of Buenos Aires, creating mad concoctions in the kitchen or working on his next art piece.
                    </span>
                </section>
                {/* blog disabled */}
                {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section> */}
                <section className={utilStyles.bottomLinks} id="contact">
                    <a className={utilStyles.lightLinks} href="https://linkedin.com/in/gonzalodossantos" rel="noreferrer" target="_blank">LinkedIn</a>
                    <a className={utilStyles.lightLinks} href="https://github.com/gon2santos" rel="noreferrer" target="_blank">GitHub</a>
                    <a className={utilStyles.lightLinks} href="mailto:necchigonzalo@gmail.com" rel="noreferrer" target="_blank">Email</a>
                </section>
            </Layout>
        </>
    );
}
