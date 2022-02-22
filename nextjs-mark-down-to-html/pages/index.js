import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'


export default function Home() {


  return (
    <div className={styles.container}>
      <DynamicHTML />
    </div>
  )
}

const DynamicHTML = dynamic(()=> import('../components/html'), {ssr: false})


