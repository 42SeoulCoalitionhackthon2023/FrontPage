import Head from "next/head";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "styles/Home.module.scss";
import Title from "../components/Title";

export default function Home() {
  const getHandler = async () => {
    try {
      const res = await (await fetch(`https://13.209.130.135/test3`)).json();
      console.log(res);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHandler();
  }, []);

  return (
    <>
      <Head>
        <title>15 Minutes Is Enough!</title>
      </Head>
      <main className={styles.pageWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.header}>
            <div className={styles.title}>
              <Title
                width={200}
                height={100}
              />
            </div>
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

// export const getServerSideProps = async () => {
//   const res = await (await fetch(`http://13.209.130.135/test`)).json();
//   return {
//     props: { res },
//   };
// };
