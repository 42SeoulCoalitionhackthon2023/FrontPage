import { useState } from "react";
import styles from "/styles/detail.module.css";

type UserInfo = {
  intraId: string;
  profileImage: string;
  blackHole: number;
  circle: number;
  levelImage: string;
  ePoint: string;
};

type Feedback = {
  corrector: string;
  corrected: string;
  final_mark: number;
  comment: string;
  feedback: string;
  flag: boolean;
  project_name: string;
  created_at: string;
};

export default function Detail() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    intraId: "",
    profileImage: "",
    blackHole: 0,
    circle: 0,
    levelImage: "",
    ePoint: "",
  });

  return (
    <>
      <div>
        <div>
          15 Minutes <br />
          Is Enough!
        </div>
        {/* <SearchBar /> */}
      </div>
      <div>
        <div>
          <div>intra Id</div>
          <div>Profile Image</div>
          <div>128 days left</div>
        </div>
        <div>
          <div>Circle: 2</div>
          <div>Level Image</div>
          <div>E.Points: 0.0점</div>
        </div>
      </div>
      <div>
        <div>써클</div>
        <div>Feedback</div>
        <div>toggle</div>
        <div>map feedback</div>
      </div>
    </>
  );
}
