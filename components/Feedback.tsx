import axios from "axios";
import { useEffect, useState } from "react";
import styles from "/styles/feedback.module.scss";

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

export default function Feedback() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const [circleBtn, setCircleBtn] = useState<string>("0");

  const sungwookFeedback = () => {
    setFeedback([
      {
        corrector: "sungwook",
        corrected: "wocheon",
        final_mark: 100,
        comment:
          "어려운 문제만 나와서 저도 같이 긴장이 되었는데 정말 빠르게 잘 푸셔서 놀랐습니다. 네트워크쪽은 지식이 아예 없었는데 문제를 설명해주시는 것을 듣고 더 놀랐습니다. 이진법으로 바꿔서 문제를 풀어야하는 것으로 보이는데 문제도 빨리 푸시고 설명도 잘 해주셔서 조금이나마 배워갑니다 고생하셨어요!",
        feedback: "good",
        flag: true,
        project_name: "ft_transcendence",
        created_at: "2021-08-10T10:00:00.000Z",
      },
    ]);
  };

  const circleTypes = [
    { id: "0", label: "써클" },
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "4", label: "4" },
    { id: "5", label: "5" },
    { id: "6", label: "6" },
  ];

  const getFeedbackInfoHandler = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/feedback");
      setFeedback(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // getFeedbackInfoHandler();
    sungwookFeedback();
  }, []);

  return (
    <div className={styles.feedbackWrap}>
      <div className={styles.radioWrap}>
        <div className={styles.radioBtns}>
          {circleTypes.map((circle, index) => {
            return (
              <label
                key={index}
                htmlFor={circle.id}
              >
                <input
                  type="radio"
                  name="circleType"
                  id={circle.id}
                  value={circle.id}
                  onChange={() => setCircleBtn(circle.id)}
                  checked={circleBtn === circle.id}
                />
                <div className={styles.radioBtn}>{circle.label}</div>
              </label>
            );
          })}
        </div>
      </div>
      <div className={styles.toggleWrap}>
        <div className={styles.feedbackTitle}>Feedback</div>
        <div>
          <input
            type="checkbox"
            id="toggle"
            className={styles.toggle}
            checked={toggle}
            onChange={() => setToggle(!toggle)}
            hidden
          />
          <label
            htmlFor="toggle"
            className={styles.toggleSwitch}
          >
            <span className={styles.toggleText}>
              {toggle ? "피평가" : "평가"}
            </span>
            <span className={styles.toggleButton}></span>
          </label>
        </div>
      </div>
      <div className={styles.feedbackLogWrap}>
        {feedback.map((log, index) => {
          return (
            <div className={styles.feedbackLog}>
              <p>
                evaluated {log.corrected} {log.final_mark}%
              </p>
              <p>scheduled on {log.created_at}</p>
              <p>{log.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
