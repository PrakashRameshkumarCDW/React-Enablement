import Image from "../../components/imageComponent/Image";
import "../member/Member.scss";

interface MembersProps {
  name: string;
  location: string;
  photo: string;
  lightMode: string;
}

const Members: React.FC<MembersProps> = ({
  name,
  location,
  photo,
  lightMode,
}) => {
  return (
    <div className="member-wrapper">
      <div className="image-wrapper">
        <Image classes="member" src={photo} alt={name} />
      </div>
      <div className={`name name-${lightMode}`}>{name}</div>
      <div className={`location location-${lightMode}`}>{location}</div>
    </div>
  );
};

export default Members;
