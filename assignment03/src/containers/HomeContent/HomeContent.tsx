import Card from "../../components/Card/Card";
import {useState, useEffect} from "react";
import { fetchUrl } from "../../services/apiService";
import loader from "../../assets/loader.gif";
import { API_ENDPOINTS } from "../../constants/API_CONSTANTS";
import './HomeContent.css'; 
import { HOME_CONTENT_TEXT } from "../../constants/APP_CONSTANTS";

const Content = () => {
    const [allCategories, setAllCategories] = useState<
    {   id: string;
        photo: string;
        category: string;
        description: string;
    }[]>([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => { 
        localStorage.clear();
    }, []);
    useEffect(() => {
        const getAllCategories = async () => {
            setLoading(true);
            const data = await fetchUrl(API_ENDPOINTS.CATEGORIES);
            setAllCategories(data);
            setLoading(false);
        };
        getAllCategories();
    }, []);
    return (
        <>
            <div className="content"> 
                <h1>{HOME_CONTENT_TEXT.TITLE}</h1>
                <h3>{HOME_CONTENT_TEXT.SUBTITLE}</h3>
                {loading ? ( 
                    <div className="loader-container">
                    <img src={loader} alt="Loading..." className="loader" />
                    </div>
                ) : (

                <div className="card-container">
                    {allCategories && allCategories.length!=0 && allCategories.map((category, index) => (
                    <Card key={index} id={category.id} type={category.category} image={category.photo} description={category.description}/>
                    ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Content;