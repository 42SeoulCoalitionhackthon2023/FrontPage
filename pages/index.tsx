import SearchBar from "components/SearchBar";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import infoImage from "/public/image/info.png";

export default function Home() {
  const [info, setInfo] = useState<boolean>(false);
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
              <div
                onClick={() => setInfo(!info)}
                className={styles.infoBtn}
              >
                설명서
              </div>
            </div>
            {info && (
              <div className={styles.infoImage}>
                <Image
                  src={infoImage}
                  alt="Information Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
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
