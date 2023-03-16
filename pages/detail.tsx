import axios from "axios";
import { useEffect, useState } from "react";
import Feedback from "../components/Feedback";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import styles from "styles/detail.module.scss";
import levelImage0 from "public/image/0.png";
import levelImage1 from "public/image/1.png";
import levelImage2 from "public/image/2.png";
import levelImage3 from "public/image/3.png";
import levelImage4 from "public/image/4.png";
import { StaticImageData } from "next/image";

type UserInfo = {
  intraId: string;
  profileImage: string;
  blackHole: number;
  circle: number;
  levelImage: StaticImageData;
  ePoint: number;
};

export default function Detail() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    intraId: "sungwook",
    profileImage: "",
    blackHole: 128,
    circle: 2,
    levelImage: levelImage0,
    ePoint: 0,
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
    if (userInfo.ePoint === 0) {
      setUserInfo({ ...userInfo, levelImage: levelImage0 });
    }
  }, []);

  return (
    <div className={styles.pageWrap}>
      <Header />
      <UserInfo userInfo={userInfo} />
      <Feedback />
    </div>
  );
}
