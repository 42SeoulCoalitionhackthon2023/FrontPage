import { useEffect, useState } from "react";
import FeedbackComponent from "../components/FeedbackComponent";
import Header from "../components/Header";
import styles from "styles/detail.module.scss";
import UserInfoComponent from "../components/UserInfo";
import { useRouter } from "next/router";
import { UserInfo } from "../utils/types";
import axios from "axios";

export default function Detail({ data }) {
  const router = useRouter();
  const { intraId } = router.query;
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: 0,
    intraId: "",
    image: "",
    blackhole: "",
    level: 0,
  });

  useEffect(() => {
    setUserInfo(data);
  }, []);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.background}>
        <Header />
        {/* userInfo.level &&  */ <UserInfoComponent userInfo={userInfo} />}
        {
          /* userInfo.userId &&  */ <FeedbackComponent
            userId={userInfo.userId}
          />
        }
      </div>
    </div>
  );
}

export async function getServerSideProps({ intraId }) {
  const res = await axios.get(`/user/${intraId}`);
  const data = res.data;

  return { props: { data } };
}
