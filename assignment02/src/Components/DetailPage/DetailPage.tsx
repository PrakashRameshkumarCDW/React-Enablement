import { useEffect, useState } from "react";
import { fetchUrl } from "../../Service/apiService";
import "./DetailPage.css";
import PropTypes from "prop-types";
import Destinations from "../Destinations/Destinations";
const DetailPage = ({ city }: { city?: string }) => {
    const [allPosts, setAllPosts] = useState<
        {
            place: string;
            city: string;
            shortDescription: string;
            fullDescription: string;
            relatedPlaces: string[];
        }[]
    >([]);

    const [post, setPost] = useState<{
        place: string;
        city: string;
        shortDescription: string;
        fullDescription: string;
        relatedPlaces: string[];
        image?: string;
    } | null>(null);

    useEffect(() => {
        const getPost = async () => {
            const data = await fetchUrl(
                `https://nijin-server.vercel.app/api/explorer/places/${city}`
            );
            setPost({
                ...data,
                image: `/src/assets/${data.city}.png`,
            });
        };
        getPost();
    }, [city]);

    useEffect(() => {
        const getAllPosts = async () => {
            const data = await fetchUrl(
                "https://nijin-server.vercel.app/api/explorer"
            );
            setAllPosts(data);
        };
        getAllPosts();
    }, []);

    const updatedAllPosts = allPosts.map((post) => ({
        ...post,
        image: `/src/assets/${post.city}.png`,
    }));

    const filteredposts = updatedAllPosts.filter((item) =>
        post?.relatedPlaces.includes(item.city)
    );
    return (
        <>
            <div className="container">
                <div className="text-section">
                    <h3 className="city">{post?.city}</h3>
                    <div className="place-container">
                        <p className="place-text">{post?.place}</p>
                    </div>
                    <div className="temperature">32°C</div>
                </div>

                <div className="image-section">
                    <img src={post?.image} alt={post?.image} />
                </div>
            </div>
            <p className="fullDescription">{post?.fullDescription}</p>
            <Destinations data={filteredposts} city={city} />
        </>
    );
};

DetailPage.PropTypes = {
    city: PropTypes.string.isRequired,
};
export default DetailPage;
