import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "/styles/components/searchbar.module.scss";

export default function SearchBar() {
  const [intraId, setIntraId] = useState<string>("");
  const [dropdown, setDropDown] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

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
          <div className={styles.dropdown}>
            <div className={styles.dropdownText}>
              <Link href={`/users/detail?intraId=${intraId}`}>
                <div>{`검색 - ${intraId}`}</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
