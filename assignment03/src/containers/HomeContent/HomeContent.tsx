import Card from "../../components/Card/Card";
import {useState, useEffect} from "react";
import { fetchUrl } from "../../services/apiService";
import loader from "../../assets/loader.gif";
import './HomeContent.css'; 

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
            const data = await fetchUrl(
                "https://jsonmockserver.vercel.app/api/shopping/furniture/categories"
            );
            setAllCategories(data);
            setLoading(false);
        };
        getAllCategories();
    }, []);
    return (
        <>
            <div className="content"> 
                <h1>Your Home, With Love</h1>
                <h3>Come, Choose from millions of products</h3>
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