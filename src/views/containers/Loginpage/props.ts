export interface LoginpageState {
  email: string;
  password: string;
  isEmptyEmail: any;
  isEmptyPassword: any;
  isValid: false;
}

export interface LoginpageProps {
  signInAction: (creds: any) => void;
  isErrors?: any;
}
