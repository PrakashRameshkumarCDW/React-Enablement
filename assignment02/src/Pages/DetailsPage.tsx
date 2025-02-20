import { useParams } from "react-router-dom";
import ContactForm from "../Components/ContactForm/ContactForm";
import DetailPage from "../Components/DetailPage/DetailPage";
import Header from "../Components/Header/Header";

const DetailsPage = () => {

    const { city } = useParams();
    return (
        <>
            <Header />
            <DetailPage city={city}/>
            <ContactForm />
        </>
    );
}
export default DetailsPage;