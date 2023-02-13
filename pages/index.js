import Head from 'next/head'
import Favorite from '../compnents/Homepage/Favorite'
import QRScanMUI from '../compnents/Homepage/QRScanMUI'
import QRScanner from '../compnents/Homepage/QRScanner'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jitter</title>
        <meta name="description" content="QR code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>        
        <div className = {styles.content}>                    
          <QRScanner />         
          {/* <QRScanMUI /> */}
          <Favorite />
        </div>
      </main>
    </>
  )
}
