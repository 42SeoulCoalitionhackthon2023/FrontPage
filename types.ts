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
  final_mark: number;
  comment: string;
  feedback: string;
  flag: boolean;
  project_name: string;
  created_at: string;
};

export type Subject = {
  id: string;
  label: string;
};
