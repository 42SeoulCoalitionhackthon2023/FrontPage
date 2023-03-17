import styles from "/styles/header.module.scss";
import { BsSearch } from "react-icons/bs";
import Title from "./Title";

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <Title
        width={150}
        height={80}
      />
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <BsSearch />
        </div>
        <input type="text" />
      </div>
    </div>
  );
}
