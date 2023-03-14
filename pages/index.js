import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>15 Minutes Is Enough!</title>
      </Head>
      <main className={styles.pageWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.header}>
            <h1>
              15 Minutes <br />
              Is Enough!
            </h1>
          </div>
          <div className={styles.searchBar}>
            <input
              className={styles.input}
              type="text"
              placeholder="유저 검색하기"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoBtn}>설명서</div>
          </div>
        </div>
      </main>
    </>
  );
}
