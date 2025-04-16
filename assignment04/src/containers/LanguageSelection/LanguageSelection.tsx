import {
  OTHER_LANGUAGES_TEXT,
  LANGUAGE_SELECTION_IMAGE,
  LANGUAGE_SELECTION_IMAGE_ALT,
} from "../../Constants/APP_CONSTANTS";
import "./LanguageSelection.scss";

const LanguageSelection = () => {
  return (
    <>
      <div className="other-language-section">
        <div className="other-languages">{OTHER_LANGUAGES_TEXT}</div>
        <div className="language-selection">
          <img
            src={LANGUAGE_SELECTION_IMAGE}
            alt={LANGUAGE_SELECTION_IMAGE_ALT}
          />
        </div>
      </div>
    </>
  );
};
export default LanguageSelection;
