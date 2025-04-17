import "./Button.scss";

const Button = ({
  name,
  type,
  className,
  onClick,
  disabled = false,
}: {
  name: string;
  type?: "button" | "submit" | "reset";
  className: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
