import Image from "next/image";
import styles from "/styles/userInfo.module.scss";
import { StaticImageData } from "next/image";

type UserInfo = {
  intraId: string;
  image: string;
  blackhole: string;
  level: number;
};

type Props = {
  userInfo: UserInfo;
  levelImage: StaticImageData;
};

export default function UserInfoComponent({ userInfo, levelImage }: Props) {
  const { intraId, image, blackhole, level } = userInfo;

  const today = new Date();
  const blackholeDate = new Date(blackhole);
  const blackholeDay = today.getDate() - blackholeDate.getDate();

  return (
    <div className={styles.userInfoWrap}>
      <div className={styles.intraInfo}>
        <div className={styles.intraId}>{intraId}</div>
        <div className={styles.profileImg}>
          <Image
            src={image}
            alt="Profile Image"
            width="100"
            height="100"
          />
        </div>
        <div
          className={
            blackholeDay < 0
              ? styles.blackTime
              : blackholeDay === 0
              ? styles.redTime
              : blackholeDay < 28
              ? styles.yellowTime
              : blackholeDay < 365
              ? styles.greenTime
              : styles.blueTime
          }
        >
          {blackholeDay < 0
            ? `Absorbed By BlackHole`
            : blackholeDay === 0
            ? `A Few Hours Left`
            : `${blackholeDay} days left`}
        </div>
      </div>
      <div className={styles.statInfo}>
        <div className={styles.circle}>Circle: {/* {circle} */}</div>
        <div className={styles.levelImg}>
          <Image
            src={levelImage}
            alt="levelImage"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.ePoint}>E.Points: {level}점</div>
      </div>
    </div>
  );
}
