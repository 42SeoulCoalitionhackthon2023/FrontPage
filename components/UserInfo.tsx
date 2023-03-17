import Image from "next/image";
import styles from "/styles/userInfo.module.scss";

export default function UserInfo({ userInfo }) {
  const { intraId, profileImage, blackHole, circle, ePoint, levelImage } =
    userInfo;

  const today = new Date();
  const blackHoleDate = new Date(blackHole);
  const blackHoleDay = today.getDate() - blackHoleDate.getDate();

  return (
    <div className={styles.userInfoWrap}>
      <div className={styles.intraInfo}>
        <div className={styles.intraId}>{intraId}</div>
        <div className={styles.profileImg}>{profileImage}</div>
        <div
          className={
            blackHoleDay < 0
              ? styles.blackTime
              : blackHoleDay === 0
              ? styles.redTime
              : blackHoleDay < 28
              ? styles.yellowTime
              : blackHoleDay < 365
              ? styles.greenTime
              : styles.blueTime
          }
        >
          {blackHoleDay < 0
            ? `Absorbed By BlackHole`
            : blackHoleDay === 0
            ? `A Few Hours Left`
            : `${blackHoleDay} days left`}
        </div>
      </div>
      <div className={styles.statInfo}>
        <div className={styles.circle}>Circle: {circle}</div>
        <div className={styles.levelImg}>
          <Image
            src={levelImage}
            alt="levelImage"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.ePoint}>E.Points: {ePoint}점</div>
      </div>
    </div>
  );
}
