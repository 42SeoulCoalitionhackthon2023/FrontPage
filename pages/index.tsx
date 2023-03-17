import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "styles/Home.module.scss";

export default function Home() {
  const [intraId, setIntraId] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntraId(e.target.value);
  };

  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>15 Minutes Is Enough!</title>
      </Head>
      <main className={styles.pageWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.header}>
            <div
              className={styles.title}
              onClick={goHome}
            >
              15 Minutes <br /> is Enough!
            </div>
          </div>
          <div className={styles.searchBar}>
            <BsSearch className={styles.searchIcon} />
            <input
              type="text"
              value={intraId}
              onChange={inputHandler}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.searchBtn}>
              <Link href={`/detail?intraId=${intraId}`}>검색하기</Link>
            </div>
            <div className={styles.infoBtn}>설명서</div>
          </div>
        </div>
      </main>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const res = await (await fetch(`http://13.209.130.135/test`)).json();
//   return {
//     props: { res },
//   };
// };
