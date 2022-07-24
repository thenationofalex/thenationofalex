import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Entry20220724 as Entry } from '../src/entries/20220724'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Middle Aged Doom</title>
        <meta name="description" content="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Middle Aged Doom
        </h1>
        <div>by alex</div>
        <section className={styles.content}>
          <Entry />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="mailto:admin@thenationofalex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The writing, photography, and the design of this website is copyrighted. <br />
          Feel free to ask if you want to reuse any content beyond the bounds of fair use.
        </a>
      </footer>
    </div>
  )
}

export default Home
