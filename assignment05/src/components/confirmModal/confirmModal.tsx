import React from "react";
import "./ConfirmModal.scss";
import Button from "../button/Button";
import { APP_CONSTANTS } from "../../constants/APP_CONSTANTS";

interface ConfirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="confirm-modal-overlay">
      <div className="confirm-modal">
        <p>{message}</p>
        <div className="confirm-modal-actions">
          <Button
            classes="confirm-modal-no-button"
            text={APP_CONSTANTS.CONFIRMATION.CANCEL}
            handleOnClick={onCancel}
          />
          <Button
            classes="confirm-modal-yes-button"
            text={APP_CONSTANTS.CONFIRMATION.CONFIRM}
            handleOnClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
