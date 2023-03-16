import styles from "/styles/header.module.scss";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.title}>
        15 Minutes <br />
        Is Enough!
      </div>
      <div className={styles.searchBar}>
        <BsSearch className={styles.searchIcon} />
        <input type="text" />
      </div>
    </div>
  );
}
