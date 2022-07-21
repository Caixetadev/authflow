export interface IState {
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  user: any;
}

export interface IUser {
  username: string;
  password: string;
}
