import Image from "../../components/imageComponent/Image";
import Button from "../../components/button/Button";
import Input from "../../components/Input/Input";
import TextArea from "../../components/textArea/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { SliceActions } from "../../store/sliceStore";
import "./BlogContent.scss";
import { APP_CONSTANTS } from "../../constants/APP_CONSTANTS";

const BlogContent: React.FC = () => {
  const dispatch = useDispatch();
  const lightMode = useSelector((state: any) => state.slice.themeMode);
  const selectedBlog = useSelector(
    (state: any) => state.slice.selectedBlogData
  );
  const editContent = useSelector((state: any) => state.slice.editingBlog);
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogDescription, setBlogDescreption] = useState<string>("");

  useEffect(() => {
    if (selectedBlog && selectedBlog.title && selectedBlog.details) {
      setSelectedBlog();
    }
  }, [selectedBlog]);

  const setSelectedBlog = () => {
    setBlogTitle(selectedBlog.title);
    setBlogDescreption(selectedBlog.details);
  };

  const handleEditContent = () => {
    dispatch(SliceActions.editingBlog(!editContent));
  };

  const saveBlog = () => {
    handleEditContent();
    dispatch(
      SliceActions.updateBlog({
        blogData: {
          title: blogTitle,
          details: blogDescription,
        },
      })
    );
  };

  const cancelEdit = () => {
    setSelectedBlog();
    handleEditContent();
  };

  const editDescription = useCallback(
    (event: any) => {
      setBlogDescreption(event.target.value);
    },
    [blogDescription]
  );

  const editTitle = useCallback(
    (event: any) => {
      setBlogTitle(event.target.value);
    },
    [blogTitle]
  );

  return (
    selectedBlog &&
    selectedBlog.title &&
    selectedBlog.details && (
      <div className={"blogContent-wrapper"} key={selectedBlog.photo}>
        <div className={"blogContent-image"}>
          <Image
            classes="blogContent-image"
            src={
              selectedBlog.photo ||
              `https://picsum.photos/seed/${selectedBlog.title}/300/300`
            }
            alt={selectedBlog.title}
          />
        </div>
        {editContent ? (
          <Input
            type="text"
            classes={`blog-title blog-title-${lightMode}`}
            value={blogTitle}
            disable={!editContent}
            onChange={editTitle}
          />
        ) : (
          <div className="blog-content-blog-title">{blogTitle}</div>
        )}
        <TextArea
          classes={`blog-content blog-content-${lightMode}`}
          value={blogDescription}
          disable={!editContent}
          valueChange={editDescription}
        />
        {editContent ? (
          <>
            <Button
              classes="cancel-button"
              text={APP_CONSTANTS.BLOG_DETAILS.CANCEL_BUTTON_TEXT}
              handleOnClick={cancelEdit}
            />
            <Button
              classes="save-button"
              text={APP_CONSTANTS.BLOG_DETAILS.SAVE_BUTTON_TEXT}
              disable={!(blogDescription.length && blogTitle.length)}
              handleOnClick={saveBlog}
            />
          </>
        ) : (
          <Button
            classes="edit-blog-button"
            text={APP_CONSTANTS.BLOG_DETAILS.EDIT_BUTTON_TEXT}
            handleOnClick={handleEditContent}
          />
        )}
      </div>
    )
  );
};

export default BlogContent;
