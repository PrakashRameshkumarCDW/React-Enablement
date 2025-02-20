import { useState } from "react";
import Acknowledgement from "../Acknowledgement/Acknowledgement";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./ContactForm.css";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    homeTown: "",
    destination: "",
    contactNumber: "",
    submitted: false,
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      submitted: true, 
    }));
  };
  return (
    <>
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Contact Us</h1>
        <p className="form-subtitle">Our Sales Team will reach out to you ASAP!</p>

        <FormInput  labelName="Name" name="name" inputType="text" className="form-input" onChange={(value) => handleChange("name", value)}/>
        <FormInput  labelName="Your Home Town" name="homeTown" inputType="select" className="form-select" options={["New York", "Los Angeles", "Chicago"]} onChange={(value) => handleChange("homeTown", value)} />
        <FormInput  labelName="Where would you like to go?" name="destination" inputType="select" className="form-select" options={["Paris", "Tokyo", "Sydney"]} onChange={(value) => handleChange("destination", value)}/>
        <FormInput  labelName="Contact Number" name="contactNumber" inputType="tel" className="form-input" onChange={(value) => handleChange("contactNumber", value)}/>

        <Button name="SUBMIT INTEREST" className="form-button" type="submit" onClick={()=>{handleSubmit}}/>
      </form>
    </div>  

      {formData.submitted && <Acknowledgement name={formData.name} from={formData.homeTown} to={formData.destination} />}
      
    </>
  );
};

export default ContactForm;
