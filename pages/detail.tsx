import axios from "axios";
import { useEffect, useState } from "react";
import Feedback from "../components/Feedback";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import styles from "/styles/detail.module.scss";

type UserInfo = {
  intraId: string;
  profileImage: string;
  blackHole: number;
  circle: number;
  levelImage: string;
  ePoint: string;
};

export default function Detail() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    intraId: "sungwook",
    profileImage: "",
    blackHole: 128,
    circle: 2,
    levelImage: "",
    ePoint: "0",
  });

  const getBasicInfoHandler = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/userInfo");
      setUserInfo(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBasicInfoHandler();
  }, []);

  return (
    <div className={styles.pageWrap}>
      <Header />
      <UserInfo userInfo={userInfo} />
      <Feedback />
    </div>
  );
}
