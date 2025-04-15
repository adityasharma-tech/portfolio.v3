type ProjectT = {
  id: string;
  thumbnail: string;
  name: string;
  about: string;
  url: string;
  tools: string[];
  embed?: string;
  openSource?: boolean;
  github?: string;
};

type LearnerT = {
  id: string;
  profilePicture: string;
  name: string;
  url: string;
  best: string;
};

export type { ProjectT, LearnerT };
