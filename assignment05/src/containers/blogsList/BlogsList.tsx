import Blog from "../../components/blog/Blog";
import Search from "../../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import "./BlogsList.scss";
import { fetchJson } from "../../service/service";
import { SliceActions } from "../../store/sliceStore";
import { APP_CONSTANTS } from "../../constants/APP_CONSTANTS";

const BlogsList: React.FC = () => {
  const lightMode = useSelector((state: any) => state.slice.themeMode);

  const [selectedByUserBlog, setSelectedByUserBlog] = useState(0);

  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const data = await fetchJson("blogs");
      dispatch(SliceActions.setFetchedBlogs(data));
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  }, [dispatch]);

  const fetchedBlogs = useSelector((state: any) => state.slice.fetchedBlogs);
  const blogs = useSelector((state: any) => state.slice.blogs || []);
  const editingBlog = useSelector((state: any) => state.slice.editingBlog);
  const selectedBlog = useSelector((state: any) => state.slice.selectedBlog);

  const selectBlog = (index: number) => {
    if (editingBlog) {
      setSelectedByUserBlog(index);
    } else {
      dispatch(SliceActions.selectBlog(index));
    }
  };

  useEffect(() => {
    if (!fetchedBlogs) {
      getData();
    }
  }, [fetchedBlogs, getData]);

  return (
    <div className={`blogsList-wrapper blogsList-wrapper-${lightMode}`}>
      <div className={"blogsList-content"}>
        <Search />
        <ul className={"blogsList"}>
          {blogs.length ? (
            blogs.map((blog: BlogInterface | any, index: number) => {
              return (
                <Blog
                  key={blog.title}
                  data={blog}
                  index={index}
                  selectedBlog={selectedBlog === index}
                  selectBlog={selectBlog}
                />
              );
            })
          ) : (
            <p className={`noblogs`}>
             {APP_CONSTANTS.BLOG_LISTS.NO_BLOGS}
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogsList;
