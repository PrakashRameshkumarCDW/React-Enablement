import { HEROS } from "./data";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import UserDetails from "./components/UserDetails/UserDetails";
import Div from "./components/Div/Div";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredHeroes = HEROS.filter((hero) =>
    hero.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  $:console.log(filteredHeroes);

  return (
    <>
      <Header onSearch={handleSearch} />
      <Div className="content">
        {filteredHeroes.map((hero, index) => (
          <UserDetails
            key={index}
            name={hero.name}
            location={hero.location}
            image={hero.image}
            tags={hero.tags}
          />
        ))}
      </Div>
    </>
  );
}

export default App;
