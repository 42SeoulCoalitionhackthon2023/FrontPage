import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/components/loginchecker.module.scss";

interface LoginCheckerProps {
  children: React.ReactNode;
}

export default function LoginChecker({ children }: LoginCheckerProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [logginKey, setLogginKey] = useState<string>("");

  const router = useRouter();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setLogginKey(keyword);
  };

  const finishHandler = () => {
    if (logginKey === "평가풍년") {
      localStorage.setItem("15ME-token", logginKey);
      router.replace(`/`);
      setLoggedIn(true);
    }
    return;
  };

  useEffect(() => {
    if (localStorage.getItem("15ME-token")) {
      setLoggedIn(true);
    }
  }, []);

  return loggedIn ? (
    <>{children}</>
  ) : (
    <div className={styles.pageWrap}>
      <div className={styles.background}>
        <div className={styles.inputWrap}>
          <div className={styles.text}>코드를 입력해주세요!</div>
          <input
            value={logginKey}
            onChange={inputHandler}
          />
        </div>
        <button onClick={finishHandler}>확인</button>
      </div>
    </div>
  );
}
