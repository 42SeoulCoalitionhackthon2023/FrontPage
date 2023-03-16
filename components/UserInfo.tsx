import Image from "next/image";
import styles from "/styles/userInfo.module.scss";

type UserInfo = {
  intraId: string;
  profileImage: string;
  blackHole: number;
  circle: number;
  levelImage: string;
  ePoint: string;
};

export default function UserInfo({ userInfo: userInfo }) {
  return (
    <div className={styles.userInfoWrap}>
      <div className={styles.intraInfo}>
        <div className={styles.intraId}>{userInfo.intraId}</div>
        <div className={styles.profileImg}>{userInfo.profileImage}</div>
        <div className={styles.blackHole}>{userInfo.blackHole} days left</div>
      </div>
      <div className={styles.statInfo}>
        <div className={styles.circle}>Circle: {userInfo.circle}</div>
        <div className={styles.levelImg}>
          <Image
            src={userInfo.levelImage}
            alt="levelImage"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.ePoint}>E.Points: {userInfo.ePoint}점</div>
      </div>
    </div>
  );
}
