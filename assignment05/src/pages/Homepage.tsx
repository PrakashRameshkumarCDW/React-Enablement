import BlogContent from "../containers/blogContent/BlogContent";
import BlogsList from "../containers/blogsList/BlogsList";
import SideMenu from "../containers/sideMenu/SideMenu";
import "./Homepage.scss";

interface HomepageProps {
  handleModeChange: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ handleModeChange }) => {
  return (
    <div className={"homepage-wrapper"}>
      <SideMenu handleModeChange={handleModeChange} />
      <BlogsList />
      <BlogContent />
    </div>
  );
};

export default Homepage;
