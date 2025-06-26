import "./Button.scss";

interface ButtonProps {
  text: string;
  classes?: string;
  disable?: boolean;
  handleOnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  classes = "default-btn",
  disable = false,
  handleOnClick,
}) => {
  return (
    <button
      className={`default-btn ${classes}`}
      onClick={handleOnClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
