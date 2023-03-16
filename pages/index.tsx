import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "/styles/Home.module.scss";

export default function Home({ res }) {
  return (
    <>
      <Head>
        <title>15 Minutes Is Enough!</title>
      </Head>
      <main className={styles.pageWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.header}>
            <div>{res?.text}</div>
            <h1>
              15 Minutes <br />
              Is Enough!
            </h1>
          </div>
          <div className={styles.searchBar}>
            <BsSearch className={styles.searchIcon} />
            <input type="text" />
          </div>
          <div className={styles.info}>
            <div className={styles.infoBtn}>설명서</div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const { res } = await (await fetch(`http://13.209.130.135/test`)).json();
  return {
    props: { res },
  };
};
