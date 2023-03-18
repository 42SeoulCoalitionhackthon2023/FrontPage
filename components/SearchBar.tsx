import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "/styles/components/searchbar.module.scss";

export default function SearchBar() {
  const [intraId, setIntraId] = useState<string>("");
  const [dropdown, setDropDown] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const goDetail = () => {
    router.push(`/detail?intraId=${intraId}`);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setIntraId(keyword);
    if (keyword.length > 0) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    )
      setDropDown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.searchBarWrap}
      ref={searchBarRef}
    >
      <div className={styles.searchBar}>
        <BsSearch className={styles.searchIcon} />
        <input
          type="text"
          value={intraId}
          onChange={inputHandler}
          onFocus={() => setDropDown(true)}
        />
        {dropdown && (
          <div
            onClick={goDetail}
            className={styles.dropdown}
          >
            <div className={styles.dropdownText}>검색 - "{intraId}"</div>
          </div>
        )}
      </div>
    </div>
  );
}
