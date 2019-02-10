import { Reducer } from "redux";
import { LettersState, LettersActions } from "./props";

const LetterReducer: Reducer<LettersState, LettersActions> = (
  state = {
    letters: undefined,
    isErrors: undefined
  },
  action
) => {
  switch (action.type) {
    case "LETTERS/GET_DATA":
      return {
        letters: action.payload,
        isErrors: undefined
      };
    case "LETTERS/GET_DATA_ERROR":
      return {
        letters: undefined,
        isErrors: "Get Data Failed"
      };
    case "LETTERS/POST_DATA":
      return {
        letters: undefined,
        isErrors: undefined
      };
    case "LETTERS/POST_DATA_ERROR":
      return {
        letters: undefined,
        isErrors: "Error sending data"
      };
    case "LETTERS/EDIT_DATA":
      return {
        letters: undefined,
        isErrors: undefined
      };
    case "LETTERS/EDIT_DATA_ERROR":
      return {
        letters: undefined,
        isErrors: "Edit Data Error"
      };
    case "SET_TO_DEFAULT":
      return {
        letters: undefined,
        isErrors: undefined
      };
    default:
      return state;
  }
};

export default LetterReducer;
