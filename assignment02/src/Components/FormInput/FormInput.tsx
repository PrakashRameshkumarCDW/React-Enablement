import "./FormInput.css";
import { useState } from 'react';


const FormInput = ({ labelName, name, inputType, className,options=[],onChange, }: {
    labelName?: string;
    name: string;
    inputType: string;
    className: string;
    options?: string[];
    onChange?: (value: string) => void;
}) => {

    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = (event: { target: { value: string; }; }) => {
        setSelectedValue(event.target.value);
        if (onChange) {
          onChange(event.target.value);
        }
      };
    
    return (
        <>
            <label className="form-label">{labelName}</label>

            {inputType === "select" ? (
                <select
                    name={name}
                    value={selectedValue}
                    className={className}
                    required
                    onChange={handleChange}
                >
                    <option value="" disabled>Choose</option>
                    {options.map((option,index) => (
                    <option key={index} value={option}>{option}</option>
                    ))}
                </select>
             ) : (
                <input
                    type={inputType}
                    name={name}
                    className={className}
                    required
                    value={selectedValue}
                    onChange={handleChange}
                />

            )}
        </>
    );

}

export default FormInput;