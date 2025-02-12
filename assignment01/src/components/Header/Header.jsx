import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tabs from "../Tabs/Tabs";
import TabButton from "../TabButton/TabButton";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Div from "../Div/Div";
import "./Header.css";
export default function Header({onSearch}) {

  const [selectedTopic, setSelectedTopic] = useState("newUsers");
  function handleSelect(selected) {
    setSelectedTopic(selected);
  }

  return (
    <>
      <Heading title="Users" />
      <Div className="container">
        <Div className="search-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Input type="search" className="search" placeholder="Search users" onChange={onSearch}/>
        </Div>

        <Div className="navigations">
          <Tabs
            buttons={
              <>
                <TabButton
                  onClick={() => handleSelect("reputation")}
                  isSelected={selectedTopic === "reputation"}
                >
                  Reputation
                </TabButton>
                <TabButton
                  onClick={() => handleSelect("newUsers")}
                  isSelected={selectedTopic === "newUsers"}
                >
                  New Users
                </TabButton>
                <TabButton
                  onClick={() => handleSelect("voters")}
                  isSelected={selectedTopic === "voters"}
                >
                  Voters
                </TabButton>
                <TabButton
                  onClick={() => handleSelect("editors")}
                  isSelected={selectedTopic === "editors"}
                >
                  Editors
                </TabButton>
                <TabButton
                  onClick={() => handleSelect("moderators")}
                  isSelected={selectedTopic === "moderators"}
                >
                  Moderators
                </TabButton>
              </>
            }
          ></Tabs>
        </Div>
      </Div>
    </>
  );
}
