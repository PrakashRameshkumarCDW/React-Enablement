import "./TextArea.scss";

interface TextAreaProps {
  placeHolder?: string;
  classes: string;
  value: string;
  disable?: boolean;
  rows?: number;
  valueChange: (event: any) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeHolder = "",
  classes,
  value,
  disable = false,
  valueChange,
}) => {
  return (
    <textarea
      placeholder={placeHolder}
      className={classes}
      value={value}
      disabled={disable}
      onChange={valueChange}
    />
  );
};

export default TextArea;
