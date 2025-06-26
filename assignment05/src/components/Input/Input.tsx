import "./Input.scss";

interface InputProps {
  type: string;
  classes?: string;
  placeholder?: string;
  value?: string;
  disable?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  classes = "default",
  placeholder,
  value = "",
  disable = false,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disable}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
