// Defining State Type
export interface LettersState {
  letters: any;
  isErrors?: any;
}
// Defining Action Type
export type LettersActions =
  | {
      type: "LETTERS/GET_DATA";
      payload: any;
    }
  | {
      type: "LETTERS/GET_DATA_ERROR";
      payload: any;
    }
  | {
      type: "LETTERS/POST_DATA";
      payload?: any;
    }
  | {
      type: "LETTERS/POST_DATA_ERROR";
      payload?: any;
    }
  | {
      type: "LETTERS/EDIT_DATA";
      payload?: any;
    }
  | {
      type: "LETTERS/EDIT_DATA_ERROR";
      payload?: any;
    }
  | {
      type: "SET_TO_DEFAULT";
      payload?: any;
    };
