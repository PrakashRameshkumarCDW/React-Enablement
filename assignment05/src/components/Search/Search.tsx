import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import "./Search.scss";
import { SliceActions } from "../../store/sliceStore";
import NewBlogContainer from "../../containers/newBlogContainer/NewBlogContainer";
import { APP_CONSTANTS } from "../../constants/APP_CONSTANTS";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const lightMode = useSelector((state: any) => state.slice.themeMode);

  const [searchText, setSearchText] = useState<string>("");
  const [newBlogModal, setNewBlogModal] = useState<boolean>(false);
  const openNewBlogModal = () => setNewBlogModal(true);
  const closeNewBlogModal = () => setNewBlogModal(false);


  return (
    <div className={`search-wrapper search-wrapper-${lightMode}`}>
      <Input
        type="text"
        classes={`search search-${lightMode}`}
        placeholder={APP_CONSTANTS.SEARCH.SEARCH_BLOGS}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(SliceActions.filterBlogs(searchText));
          }
        }}
      />
      <Button
        classes="blog-create-btn"
        text={APP_CONSTANTS.SEARCH.NEW}
        handleOnClick={openNewBlogModal}
      />
      {newBlogModal && <NewBlogContainer close={closeNewBlogModal} />}
    </div>
  );
};

export default Search;
