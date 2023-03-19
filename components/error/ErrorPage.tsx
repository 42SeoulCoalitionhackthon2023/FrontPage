import SearchBar from "components/SearchBar";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { errorState } from "utils/recoil";
import styles from "/styles/error.module.scss";
import infoImage from "/public/image/info.png";

export default function ErrorPage() {
  const [error, setError] = useRecoilState(errorState);
  const [info, setInfo] = useState<boolean>(false);
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
        </div>
      ) : (
        <div>error!</div>
      )}
    </>
  );
}
