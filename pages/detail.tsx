import { useEffect, useState } from "react";
import instance from "../axios";
import Feedback from "../components/Feedback";
import Header from "../components/Header";
import styles from "styles/detail.module.scss";
import UserInfoComponent from "../components/UserInfo";
import { StaticImageData } from "next/image";
import levelImage0 from "public/image/0.png";
import levelImage1 from "public/image/1.png";
import levelImage2 from "public/image/2.png";
import levelImage3 from "public/image/3.png";
import levelImage4 from "public/image/4.png";
import { useRouter } from "next/router";
import { UserInfo } from "../types";

const LEVELZERO = 0;
const LEVELONE = 50;
const LEVELTWO = 70;
const LEVELTHREE = 90;

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
      if (userInfo.level <= LEVELZERO) {
        setLevelImage(levelImage0);
      } else if (userInfo.level <= LEVELONE) {
        setLevelImage(levelImage1);
      } else if (userInfo.level <= LEVELTWO) {
        setLevelImage(levelImage2);
      } else if (userInfo.level <= LEVELTHREE) {
        setLevelImage(levelImage3);
      } else {
        setLevelImage(levelImage4);
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
      <Header />
      <UserInfoComponent
        userInfo={userInfo}
        levelImage={levelImage}
      />
      <Feedback userId={userInfo.userId} />
    </div>
  );
}
