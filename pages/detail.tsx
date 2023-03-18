import { useEffect, useState } from "react";
import FeedbackComponent from "../components/FeedbackComponent";
import Header from "../components/Header";
import styles from "styles/detail.module.scss";
import UserInfoComponent from "../components/UserInfo";
import { useRouter } from "next/router";
import { UserInfo } from "../utils/types";
import instance from "../axios";

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

  const getBasicInfoHandler = async () => {
    try {
      const res = await instance.get(`/user/${intraId}`);
      setUserInfo(res?.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBasicInfoHandler();
  }, [intraId]);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.background}>
        <Header />
        {userInfo.userId !== 0 && (
          <>
            <UserInfoComponent userInfo={userInfo} />
            <FeedbackComponent userId={userInfo.userId} />
          </>
        )}
      </div>
    </div>
  );
}
