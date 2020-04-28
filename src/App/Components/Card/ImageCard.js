import React from "react";
import ImageHolderCard from "../../Styles/SearchPage/ImageHolderCard";

const ImageCard = ({
  src,
  width,
  height,
  downloads,
  favorites,
  likes,
  tags,
  type,
  user,
  userImageURL,
}) => {
  const tagsArray = tags.split(",");
  let hashTags = tagsArray.map((tags, index) => {
    return <p key={index} className="hashtags">{`#${tags}`}</p>;
  });
  return (
    <ImageHolderCard>
      <div className="image-desc">
        <img src={src} width={width} height={height} alt={type} />
        <p className="image-type">{type}</p>
      </div>
      <div className="image-user-desc">
        <div className="margin-bottom-ten">Uploaded By</div>
        <p>
          <img src={userImageURL} alt={user} width="30px" height="30px" />
          {user}
        </p>
      </div>
      <div className="image-tags">
        <span className="downloads">
          <i className="fas fa-download"></i>
          <p className="margin-left-ten">{downloads}</p>
        </span>
        <span className="d-flex">{hashTags}</span>
      </div>
      <div className="border-image-hr"></div>
      <div className="image-likes">
        <span>
          <p className="margin-right">{likes}</p>
          <i className="far fa-heart"></i>
        </span>
        <span>
          <p className="margin-right">{favorites}</p>
          <i className="far fa-bookmark"></i>
        </span>
      </div>
    </ImageHolderCard>
  );
};

export default ImageCard;
