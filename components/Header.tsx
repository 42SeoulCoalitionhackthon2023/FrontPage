import styles from "/styles/header.module.scss";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

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
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <BsSearch />
        </div>
        <input type="text" />
      </div>
    </div>
  );
}
