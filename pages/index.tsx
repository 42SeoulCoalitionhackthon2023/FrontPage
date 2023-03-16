import Head from "next/head";
import { BsSearch } from "react-icons/bs";
import styles from "/styles/Home.module.css";

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
			<BsSearch className={styles.searchIcon} />
            <input
              className={styles.input}
              type="text"
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
