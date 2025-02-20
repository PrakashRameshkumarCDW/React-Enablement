import { useEffect, useState } from "react";
import cover from "../../assets/cover.png";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { fetchUrl } from "../../Service/apiService";
import { useNavigate } from "react-router-dom";
import Destinations from "../Destinations/Destinations";
import "./PromoSection.css";


const PromoSection = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<{ place: string; city: string; shortDescription: string; fullDescription: string; relatedPlaces: string[] }[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchUrl("https://nijin-server.vercel.app/api/explorer");
      setPosts(data);
    };
    getPosts();

  }, []);

  const updatedPosts = posts.map(post => ({
    ...post,
    image: `/src/assets/${post.city}.png`,
  }));

  $:console.log(updatedPosts);

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };

  return (
    <>
    <div className="container">
      <div className="text-section">
        <h3 className="welcome-text">WELCOME TO EXPLORER</h3>
        <h1 className="description">
          Your Adventure Travel Expert in the <span className="highlight">SOUTH</span>
        </h1>
        <FormInput labelName="" name="places" inputType="select" className="overlay-select" options={posts.map(post => post.city)} onChange={handleCityChange} />
        <Button name="EXPLORE" className="explore-button" type="button" onClick={() => { navigate(`/details/${selectedCity}`); }} />
      </div>
      <div className="image-section">
        <img src={cover} alt="Adventure Illustration" />
      </div>
    </div>
    <Destinations data={updatedPosts}/>
    </>
  );
};

export default PromoSection;
