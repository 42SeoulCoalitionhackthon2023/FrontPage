import SearchBar from "components/SearchBar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { errorState } from "utils/recoil";
import styles from "/styles/error.module.scss";

export default function ErrorPage() {
  const [error, setError] = useRecoilState(errorState);
  const router = useRouter();

  useEffect(() => {
    router.replace(`/`);
  }, []);

  const goHome = () => {
    setError("");
    router.push("/");
  };

  return (
    <>
      {error === "400" ? (
        <div className={styles.pageWrap}>
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
                <div className={styles.warning}>
                  존재하지 않는 아이디입니다!
                </div>
                <div className={styles.infoBtn}>설명서</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>error!</div>
      )}
    </>
  );
}
