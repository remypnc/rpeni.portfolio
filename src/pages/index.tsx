import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../../component/navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Navbar/>
      </main>
      <div>
        <table className={styles.space} id="about"><Link href="/about">About me</Link></table>
        <table className={styles.space} id="project">My Projects</table>
        <table className={styles.space} id="skills">My skills</table>
        <table className={styles.space} id="contact">Contact</table>
      </div>
    </>
  )
}
