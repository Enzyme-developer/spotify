import Head from 'next/head'
import Dashboard from '../components/Dashboard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>

  )
}
