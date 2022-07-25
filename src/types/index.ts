export interface IState {
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  accountCreatedSuccessfully: boolean;
  user: any;
}

export interface IUser {
  username: string;
  password: string;
}
