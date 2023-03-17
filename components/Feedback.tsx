import axios from "axios";
import React, { useEffect, useState } from "react";
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

type Subject = {
  id: string;
  label: string;
};

const circleTypes = [
  { id: "0", label: "써클" },
  { id: "1", label: "0" },
  { id: "2", label: "1" },
  { id: "3", label: "2" },
  { id: "4", label: "3" },
  { id: "5", label: "4" },
  { id: "6", label: "5" },
  { id: "7", label: "6" },
];

const circleZero = [{ id: "0-0", label: "Libft" }];

const circleOne = [
  { id: "1-0", label: "get_next_line" },
  { id: "1-1", label: "ft_printf" },
  { id: "1-2", label: "Born2beroot" },
];

const circleTwo = [
  { id: "2-0", label: "so_long" },
  { id: "2-1", label: "FDF" },
  { id: "2-2", label: "fract_ol" },
  { id: "2-3", label: "minitalk" },
  { id: "2-4", label: "pipex" },
  { id: "2-5", label: "push_swap" },
];

const circleThree = [
  { id: "3-0", label: "minishell" },
  { id: "3-1", label: "Philosophers" },
];

const circleFour = [
  { id: "4-0", label: "cub3D" },
  { id: "4-1", label: "miniRT" },
  { id: "4-2", label: "NetPractice" },
  { id: "4-3", label: "CPP_00" },
  { id: "4-4", label: "CPP_01" },
  { id: "4-5", label: "CPP_02" },
  { id: "4-6", label: "CPP_03" },
  { id: "4-7", label: "CPP_04" },
];

const circleFive = [
  { id: "5-0", label: "CPP_05" },
  { id: "5-1", label: "CPP_06" },
  { id: "5-2", label: "CPP_07" },
  { id: "5-3", label: "CPP_08" },
  { id: "5-4", label: "CPP_09" },
  { id: "5-5", label: "WebServ" },
  { id: "5-6", label: "ft_irc" },
  { id: "5-7", label: "Inception" },
];

const circleSix = [{ id: "6-0", label: "ft-transcendence" }];

export default function Feedback() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const [circleBtn, setCircleBtn] = useState<string>("0");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subjectBtn, setSubjectBtn] = useState<string>("");

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

  const circleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCircleBtn(e.target.value);
  };

  const subjectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const subjectId = e.target.value;
    setSubjectBtn(subjectId);
  };

  //   const getFeedbackInfoHandler = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/feedback");
  //       setFeedback(res.data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  useEffect(() => {
    // getFeedbackInfoHandler();
    sungwookFeedback();
  }, []);

  useEffect(() => {
    if (circleBtn === "0") {
      setSubjects([]);
    } else if (circleBtn === "1") {
      setSubjects(circleZero);
    } else if (circleBtn === "2") {
      setSubjects(circleOne);
    } else if (circleBtn === "3") {
      setSubjects(circleTwo);
    } else if (circleBtn === "4") {
      setSubjects(circleThree);
    } else if (circleBtn === "5") {
      setSubjects(circleFour);
    } else if (circleBtn === "6") {
      setSubjects(circleFive);
    } else {
      setSubjects(circleSix);
    }
  }, [circleBtn]);

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
                  onChange={circleHandler}
                  checked={circleBtn === circle.id}
                />
                <div className={styles.radioBtn}>{circle.label}</div>
              </label>
            );
          })}
        </div>
        <div className={styles.subjectWrap}>
          <div className={styles.subjectBtns}>
            {subjects.map((subject, index) => {
              return (
                <label
                  key={index}
                  htmlFor={subject.id}
                >
                  <input
                    type="radio"
                    name="subject"
                    id={subject.id}
                    value={subject.id}
                    onChange={subjectHandler}
                    checked={subjectBtn === subject.id}
                  />
                  <div className={styles.subjectBtn}>{subject.label}</div>
                </label>
              );
            })}
          </div>
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
