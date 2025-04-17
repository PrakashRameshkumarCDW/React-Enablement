import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  LOTTERY_INSTRUCTIONS,
  VALIDATION_MESSAGE,
  WINNING_MESSAGE,
  LOSING_MESSAGE,
  BUTTON_LABEL,
} from "../../Constants/APP_CONSTANTS";
import "./Lottery.scss";
const Lottery = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  };

  const checkLuck = () => {
    if (mobileNumber.length === 10) {
      const lastDigit = parseInt(mobileNumber[mobileNumber.length - 1], 10);
      if (lastDigit % 2 === 0) {
        setMessage(WINNING_MESSAGE);
      } else {
        setMessage(LOSING_MESSAGE);
      }
    } else {
      setMessage(VALIDATION_MESSAGE);
    }
  };
  return (
    <>
      <div className="lottery-container">
        {message && message != "" ? (
          <p className="lottery-message">{message}</p>
        ) : (
          <>
            <div className="lottery-instructions">{LOTTERY_INSTRUCTIONS}</div>

            <Input value={mobileNumber} onChange={handleChange} />

            <Button
              name={BUTTON_LABEL}
              className={"luck-check "}
              type="button"
              onClick={checkLuck}
              disabled={mobileNumber.length !== 10}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Lottery;
