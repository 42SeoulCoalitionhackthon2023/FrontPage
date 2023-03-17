import instance from "axios";
import React, { useEffect, useState } from "react";
import styles from "/styles/feedback.module.scss";
import { Feedback, Subject } from "types";

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

export default function FeedbackComponent({ userId }: { userId: number }) {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const [circleBtn, setCircleBtn] = useState<string>("0");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subjectBtn, setSubjectBtn] = useState<string>("");

  const circleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCircleBtn(e.target.value);
    setSubjectBtn("");
  };

  const subjectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const subjectId = e.target.value;
    setSubjectBtn(subjectId);
    //ToDo : get요청 해당 과제 feedback 정보 받기
  };

  const getFeedbackInfoHandler = async () => {
    try {
      const res = await instance.get(`/comment/corrector=${userId}`);
      setFeedback(res?.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFeedbackInfoHandler();
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
    //ToDo : get요청 해당 써클 feedback 정보 받기
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
              <p>{log.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
