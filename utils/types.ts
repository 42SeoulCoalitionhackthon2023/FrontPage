export type UserInfo = {
  userId: number;
  intraId: string;
  image: string;
  blackhole: string;
  level: number;
};

export type Feedback = {
  corrector: string;
  corrected: string;
  finalMark: number;
  comment: string;
  feedback: string;
  flag: boolean;
  projectName: string;
  createdAt: string;
  pid: number;
};

export type Subject = {
  id: string;
  label: string;
};
