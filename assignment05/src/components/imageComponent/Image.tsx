import { useState } from "react";
import "./Image.scss";

interface ImageProps {
  src: string;
  alt: string;
  classes?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, classes }) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  const handleError = () => {
    const fallback = `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(
      alt
    )}`;
    setImgSrc(fallback);
  };
  return (
    <img
      src={imgSrc}
      className={classes}
      alt={alt}
      width="100%"
      height="100%"
      onError={handleError}
    />
  );
};

export default Image;
