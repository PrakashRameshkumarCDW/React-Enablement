import "./Input.scss";

const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="input-container">
      <input
        type="tel"
        placeholder="Enter Mobile Number"
        className="custom-input"
        pattern="[0-9]*"
        maxLength={10}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
