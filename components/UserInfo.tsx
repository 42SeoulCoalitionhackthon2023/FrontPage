import Image from "next/image";
import styles from "../styles/components/userInfo.module.scss";
import levelImage0 from "../public/image/0.png";
import levelImage1 from "../public/image/1.png";
import levelImage2 from "../public/image/2.png";
import levelImage3 from "../public/image/3.png";
import levelImage4 from "../public/image/4.png";
import levelImage5 from "../public/image/5.png";
import fallBackSrc from "../public/image/fallBackSrc.jpeg";
import { StaticImageData } from "next/image";

type UserInfo = {
  intraId: string;
  image: string;
  blackhole: string;
  level: number;
};

const LEVELZERO = 49;
const LEVELONE = 72;
const LEVELTWO = 80;
const LEVELTHREE = 88;
const LEVELFOUR = 91;
const LEVELFIVE = 100;

export default function UserInfoComponent({
  userInfo,
}: {
  userInfo: UserInfo;
}) {
  const { intraId, image, blackhole, level } = userInfo;

  const today = new Date();
  const blackholeDate = new Date(blackhole);
  const differenceMs = blackholeDate.getTime() - today.getTime();
  const blackholeDay = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  const levelImage: StaticImageData =
    level >= LEVELFIVE || level < LEVELZERO
      ? levelImage0
      : level >= LEVELFOUR
      ? levelImage5
      : level >= LEVELTHREE
      ? levelImage4
      : level >= LEVELTWO
      ? levelImage3
      : level >= LEVELONE
      ? levelImage2
      : levelImage1;

  return (
    <div className={styles.userInfoWrap}>
      <div className={styles.intraInfo}>
        <div className={styles.intraId}>{intraId}</div>
        <div className={styles.profileImg}>
          {image ? (
            <img
              className={styles.image}
              src={image}
              alt="Profile Image"
              width="110"
              height="110"
            />
          ) : (
            <Image
              className={styles.image}
              src={fallBackSrc}
              alt="Profile Image"
              width="110"
              height="110"
            />
          )}
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
          {!blackhole
            ? "Member"
            : blackholeDay < 0
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
        <div className={styles.ePoint}>{`${
          level >= LEVELFIVE || level < LEVELZERO
            ? "Not Human"
            : level >= LEVELFOUR
            ? "Sweet"
            : level >= LEVELTHREE
            ? "Umami"
            : level >= LEVELTWO
            ? "Sour"
            : level >= LEVELONE
            ? "Salty"
            : "Bitter"
        } (${level}%)`}</div>
      </div>
    </div>
  );
}
