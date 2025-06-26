import React from "react";
import "./Checkbox.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (arg0: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="checkmark" />
      <span className="label-text">{label}</span>
    </label>
  );
};

export default Checkbox;
