import { useEffect, useState } from "react";
import instance from "../axios";
import FeedbackComponent from "../components/FeedbackComponent";
import Header from "../components/Header";
import styles from "styles/detail.module.scss";
import UserInfoComponent from "../components/UserInfo";
import { StaticImageData } from "next/image";
import levelImage0 from "public/image/0.png";
import levelImage1 from "public/image/1.png";
import levelImage2 from "public/image/2.png";
import levelImage3 from "public/image/3.png";
import levelImage4 from "public/image/4.png";
import levelImage5 from "public/image/5.png";
import { useRouter } from "next/router";
import { UserInfo } from "../types";

const LEVELZERO = 49;
const LEVELONE = 72;
const LEVELTWO = 80;
const LEVELTHREE = 88;
const LEVELFOUR = 91;
const LEVELFIVE = 100;

export default function Detail() {
  const router = useRouter();
  const { intraId } = router.query;

  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: 0,
    intraId: "",
    image: "",
    blackhole: "",
    level: 0,
  });

  const [levelImage, setLevelImage] = useState<StaticImageData>(levelImage0);

  const getBasicInfoHandler = async () => {
    try {
      const res = await instance.get(`/user/${intraId}`);
      setUserInfo(res?.data);
      if (userInfo.level >= LEVELZERO) {
        setLevelImage(levelImage1);
      } else if (userInfo.level >= LEVELONE) {
        setLevelImage(levelImage2);
      } else if (userInfo.level >= LEVELTWO) {
        setLevelImage(levelImage3);
      } else if (userInfo.level >= LEVELTHREE) {
        setLevelImage(levelImage4);
      } else if (userInfo.level >= LEVELFOUR && userInfo.level < LEVELFIVE) {
        setLevelImage(levelImage5);
      } else {
        setLevelImage(levelImage0);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBasicInfoHandler();
  }, []);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.background}>
        <Header />
        <UserInfoComponent
          userInfo={userInfo}
          levelImage={levelImage}
        />
        {userInfo.userId && <FeedbackComponent userId={userInfo.userId} />}
      </div>
    </div>
  );
}
