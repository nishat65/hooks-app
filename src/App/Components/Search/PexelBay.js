import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { pexelBayGetAllData } from "../../Reducers/ActionsCreators/PexelBay/PexelBayActionsCreators";
import Card from "../../Styles/SearchPage/Card";
import ImageCard from "../Card/ImageCard";

const PexelBay = () => {
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.pexelBay.data);
  const dispatchPexelData = useCallback(() => dispatch(pexelBayGetAllData()), [
    pexelBayGetAllData,
  ]);
  useEffect(() => {
    dispatchPexelData();
  }, []);

  return (
    <Card>
      {imageData && imageData.length
        ? imageData.map((image) => {
            return (
              <ImageCard
                key={image.id}
                src={image.largeImageURL}
                downloads={image.downloads}
                favorites={image.favorites}
                likes={image.likes}
                tags={image.tags}
                type={image.type}
                user={image.user}
                userImageURL={image.userImageURL}
                width="278px"
                height="150"
              />
            );
          })
        : []}
    </Card>
  );
};

export default PexelBay;
