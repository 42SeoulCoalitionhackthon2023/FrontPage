import SearchBar from "components/SearchBar";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
        <div className={styles.background}>
          <div className={styles.contentWrap}>
            <div className={styles.header}>
              <div
                className={styles.title}
                onClick={goHome}
              >
                15 Minutes <br /> is Enough!
              </div>
            </div>
            <SearchBar />
            <div className={styles.info}>
              <div className={styles.infoBtn}>설명서</div>
            </div>
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
