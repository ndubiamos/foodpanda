export type Navigation = {
  navigate: (scene: string) => void;
};

export type AuthDetails = {
  email: string;
  password: string;
  username?: string;
};
