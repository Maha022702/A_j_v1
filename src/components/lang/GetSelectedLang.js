import { useDispatch } from "react-redux";
import {
  languageSelection,
  selectedlanguage,
} from "../../redux/slices/authSlice";
import { english } from "./English";
import { tamil } from "./Tamil";

export const useSelectedLanguage = () => {
  const dispatch = useDispatch();

  const getSelectedLanguage = () => {
    const selectedLanguageId = localStorage.getItem("setLanguage");
    // console.log(
    //   "selectedLanguageId",
    //   selectedLanguageId,
    //   "1st",
    //   selectedLanguageId === "English",
    //   "2",
    //   selectedLanguageId === "Tamil"
    // );

    if (selectedLanguageId === "English") {
      dispatch(selectedlanguage(selectedLanguageId));
      dispatch(languageSelection(english));
      return selectedLanguageId;
    } else if (selectedLanguageId === "Tamil") {
      dispatch(selectedlanguage(selectedLanguageId));
      dispatch(languageSelection(tamil));
      return selectedLanguageId;
    } else {
      dispatch(selectedlanguage("English"));
      dispatch(languageSelection(english));
      return "English";
    }
  };

  return getSelectedLanguage;
};

export const setSelectedLanguage = (dispatch, id) => {
  localStorage.setItem("setLanguage", id);
  dispatch(selectedlanguage(id));
  if (id === "English") {
    dispatch(languageSelection(english));
  } else if (id === "Tamil") {
    dispatch(languageSelection(tamil));
  }
};
