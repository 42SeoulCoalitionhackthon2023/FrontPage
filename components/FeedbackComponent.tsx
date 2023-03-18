import instance from "../axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/components/feedback.module.scss";
import { Feedback, Subject } from "../utils/types";

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

const circleZero = [{ id: "libft", label: "Libft" }];

const circleOne = [
  { id: "get_next_line", label: "get_next_line" },
  { id: "ft_printf", label: "ft_printf" },
  { id: "born2beroot", label: "Born2beroot" },
];

const circleTwo = [
  { id: "so_long", label: "so_long" },
  { id: "fdf", label: "FDF" },
  { id: "fract_ol", label: "fract_ol" },
  { id: "minitalk", label: "minitalk" },
  { id: "pipex", label: "pipex" },
  { id: "push_swap", label: "push_swap" },
];

const circleThree = [
  { id: "minishell", label: "minishell" },
  { id: "philosophers", label: "Philosophers" },
];

const circleFour = [
  { id: "cub3d", label: "cub3D" },
  { id: "minirt", label: "miniRT" },
  { id: "net_practice", label: "NetPractice" },
  { id: "cpp-00", label: "CPP_00" },
  { id: "cpp-01", label: "CPP_01" },
  { id: "cpp-02", label: "CPP_02" },
  { id: "cpp-03", label: "CPP_03" },
  { id: "cpp-04", label: "CPP_04" },
];

const circleFive = [
  { id: "cpp-05", label: "CPP_05" },
  { id: "cpp-06", label: "CPP_06" },
  { id: "cpp-07", label: "CPP_07" },
  { id: "cpp-08", label: "CPP_08" },
  { id: "cpp-module-09", label: "CPP_09" },
  { id: "webserv", label: "WebServ" },
  { id: "ft_irc", label: "ft_irc" },
  { id: "inception", label: "Inception" },
];

const circleSix = [{ id: "ft_transcendence", label: "ft-transcendence" }];

export default function FeedbackComponent({ userId }: { userId: number }) {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const [circleBtn, setCircleBtn] = useState<string>("0");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subjectBtn, setSubjectBtn] = useState<string>("");

const circleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
setCircleBtn(e.target.value);
setSubjectBtn("");
// getCircleFeedbackHandler(e.target.value);
};

const subjectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
const subjectId = e.target.value;
  setSubjectBtn(subjectId);
};

const getRecentFeedbackHandler = async () => {
  try {
  const res = await instance.get(
  `/comment/${toggle ? "corrected" : "corrector"}=${userId}`
  );
  setFeedback(res?.data);
  } catch (e) {
  console.error(e);
  }
};

// const getCircleFeedbackHandler = async (circleBtn: string) => {
// try {
// const res = await instance.get(
// `/comment/${ toggle ? "corrected" : "corrector" }=${userId}&circle=${circleBtn}`
// );
// setFeedback(res?.data);
// } catch (e) {
// console.error(e);
// }
// };

const getSubjectFeedbackHandler = async () => {
  try {
    const res = await instance.get(
    `/comment/${toggle ? "corrected" : "corrector"}=${userId}/${subjectBtn}`
    );
    setFeedback(res?.data);
    } catch (e) {
    console.error(e);
  }
};

// useEffect(() => {
//   getRecentFeedbackHandler();
// }, []);

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

useEffect(() => {
  if (subjectBtn && toggle) {
  getSubjectFeedbackHandler();
  } else {
  getRecentFeedbackHandler();
  }
}, [toggle, subjectBtn, userId]);


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
        {feedback[0] ? (
          feedback.map((log, index) => {
            return (
              <div className={styles.feedbackLog}>
                <div className={styles.text}>
                  <div className={styles.color1}>{`evaluated `}</div>{" "}
                  <div className={styles.color2}>{`${log.corrected} `}</div>
                  <div>{log.finalMark}%</div>
                </div>
                <div className={styles.text}>
                  <div className={styles.color1}>{`scheduled on `}</div>
                  <div className={styles.color2}>
                    {new Date(log.createdAt).toLocaleDateString("en-us", {
                      day: "numeric",
                      year: "numeric",
                      month: "long",
                    })}
                    {` `}
                    {new Date(log.createdAt).toLocaleTimeString()}
                  </div>
                </div>
                <div className={styles.text}>
                  <div className={styles.color1}>{`과제: `}</div>
                  <div className={styles.color2}>{log.projectName}</div>
                </div>
                <p>{log.comment}</p>
              </div>
            );
          })
        ) : (
          <div className={styles.blankFeedback}>피드백이 없습니다</div>
        )}
      </div>
    </div>
  );
}