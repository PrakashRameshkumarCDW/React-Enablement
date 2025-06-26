import { useCallback, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/Input/Input";
import TextArea from "../../components/textArea/TextArea";
import { SliceActions } from "../../store/sliceStore";
import { useDispatch, useSelector } from "react-redux";
import "./newBlogContainer.scss";
import ConfirmModal from "../../components/confirmModal/confirmModal";
import { APP_CONSTANTS } from "../../constants/APP_CONSTANTS";

interface NewBlogContainerProps {
  close: () => void;
}

const NewBlogContainer: React.FC<NewBlogContainerProps> = ({ close }) => {
  const lightMode = useSelector((state: any) => state.slice.themeMode);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);

  const addBlog = () => {
    dispatch(
      SliceActions.addBlog({
        title: blogTitle,
        details: blogDescription,
        type: "Local",
        photo: `https://picsum.photos/seed/${blogTitle}/300/300`,
      })
    );
    close();
  };

  const addTitle = useCallback((event: any) => {
    setBlogTitle(event.target.value);
  }, []);

  const addDescription = useCallback((event: any) => {
    setBlogDescription(event.target.value);
  }, []);

  const handleOutsideClick = () => {
    if (blogTitle || blogDescription) {
      setShowConfirm(true);
    } else {
      close();
    }
  };

  const handleConfirmClose = () => {
    setShowConfirm(false);
    close();
  };

  const handleCancelClose = () => {
    setShowConfirm(false);
  };

  return (
    <div className={"new-blog-main-wrapper"}>
      <div className={"left-section"} onClick={handleOutsideClick}></div>
      <div className={`right-section right-section-${lightMode}`}>
        <div className={"form-wrapper"}>
          <div className={`new-blog-title new-blog-title-${lightMode}`}>
            {APP_CONSTANTS.NEW_BLOG.TITLE}
          </div>
          <Input
            classes={`new-blog-title new-blog-title-${lightMode}`}
            type="text"
            placeholder={APP_CONSTANTS.NEW_BLOG.TITLE_PLACEHOLDER}
            value={blogTitle}
            onChange={addTitle}
          />
          <TextArea
            classes={`new-blog-details new-blog-details-${lightMode}`}
            placeHolder={APP_CONSTANTS.NEW_BLOG.DETAILS_PLACEHOLDER}
            value={blogDescription}
            valueChange={addDescription}
          />
          <Button
            classes="new-blog-add"
            text={APP_CONSTANTS.NEW_BLOG.ADD}
            handleOnClick={addBlog}
            disable={!(blogTitle.length && blogDescription.length)}
          />
        </div>
      </div>
      {showConfirm && (
        <ConfirmModal
          message={APP_CONSTANTS.CONFIRMATION.CONFIRMATION_MESSAGE}
          onConfirm={handleConfirmClose}
          onCancel={handleCancelClose}
        />
      )}
    </div>
  );
};

export default NewBlogContainer;
