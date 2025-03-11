import './Button.css';

const Button = ({name,type,className,onClick}:{
    name:string;
    type?: "button" | "submit" | "reset";
    className:string;
    onClick?:()=> void;
}) =>{


return(<button type={type} className={className} onClick={onClick}>
    {name}
  </button>);
}

export default Button;