import styles from "/styles/header.module.scss";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <h1 className={styles.title}>
        15 Minutes <br />
        Is Enough!
      </h1>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <BsSearch />
        </div>
        <input type="text" />
      </div>
    </div>
  );
}
