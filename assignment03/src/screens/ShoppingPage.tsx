import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import CategoryContent from "../containers/CategoryContent/CategoryContent";

const ShoppingPage = () => {

    const { id } = useParams<{id?:string}>();

    return (
        <>
            <Header id={id}/>
            <CategoryContent id={id} />
        </>
    );

}

export default ShoppingPage;