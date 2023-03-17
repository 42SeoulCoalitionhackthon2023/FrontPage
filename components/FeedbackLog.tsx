import styles from "/styles/feedbackLog.module.scss";

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

export default function FeedbackLog({ feedback }: Feedback[]) {
  return (
    <div className={styles.feedbackLog}>
      {feedback.map((log: Feedback, index: number) => {
        return (
          <div
            key={index}
            className={styles.feedback}
          >
            <div className={styles.feedbackTitle}>{log.title}</div>
            <div className={styles.feedbackContent}>{log.content}</div>
          </div>
        );
      })}
    </div>
  );
}
