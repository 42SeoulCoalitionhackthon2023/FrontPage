import styles from "/styles/components/header.module.scss";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";

export default function Header() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.headerWrap}>
      <div
        className={styles.title}
        onClick={goHome}
      >
        15 Minutes <br /> is Enough!
      </div>
      <div className={styles.searchbar}>
        <SearchBar />
      </div>
    </div>
  );
}
