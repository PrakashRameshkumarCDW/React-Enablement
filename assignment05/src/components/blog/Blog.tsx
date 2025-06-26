import { memo } from "react";
import "./Blog.scss";
import { useSelector } from "react-redux";

interface BlogProps {
  data: {
    title: string;
    details: string;
    photo?: string;
    type: string;
  };
  index: number;
  selectedBlog?: boolean;
  selectBlog: (index: number) => void;
}

const Blog: React.FC<BlogProps> = ({
  data,
  index,
  selectedBlog = false,
  selectBlog,
}) => {
  const lightMode = useSelector((state: any) => state.slice.themeMode);

  return (
    <li
      className={`blog-wrapper blog-wrapper-${lightMode} ${
        selectedBlog ? `selected-${lightMode}` : ""
      }`}
      onClick={() => selectBlog(index)}
    >
      <div className={`blogTitle blogTitle-${lightMode}`}>{data.title}</div>
      <div className={`blog-type`}>{data.type}</div>
      <div className={`blog-details blog-details-${lightMode}`}>
        {data.details}
      </div>
    </li>
  );
};

export default memo(Blog);
