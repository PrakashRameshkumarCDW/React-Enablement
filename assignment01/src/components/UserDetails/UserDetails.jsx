import "./UserDetails.css";
export default function UserDetails({ name, location, tags, image }) {
  return (
    <>
      <div className="profile-card">
        <div className="profile-image-container">
          <img src={image} alt={image} className="profile-image" />
        </div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p className="location">{location}</p>

          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
