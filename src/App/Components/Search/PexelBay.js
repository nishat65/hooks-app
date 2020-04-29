import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  pexelBayGetAllData,
  getSelectedData,
} from "../../Reducers/ActionsCreators/PexelBay/PexelBayActionsCreators";
import Card from "../../Styles/SearchPage/Card";
import Tab from "./Tab";
import ImageCard from "../Card/ImageCard";

let tabsArray = [
  { tabName: "Cities", activeClass: "" },
  { tabName: "Landscape", activeClass: "" },
  { tabName: "Animals", activeClass: "" },
  { tabName: "Abstract", activeClass: "" },
];

const PexelBay = () => {
  const [tabs, setTabs] = useState(tabsArray);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.pexelBay.isFetching);
  const imageData = useSelector((state) => state.pexelBay.data);
  const selectedData = useSelector((state) => state.pexelBay.selectedData);

  function onTabChange(e, index, tab) {
    let cancel;
    const cancelToken = new axios.CancelToken((c) => (cancel = c));
    dispatch(getSelectedData(tab, cancelToken));
    let tabsState = tabs.map((item, i) => {
      return index === i
        ? { ...item, activeClass: "active-class" }
        : { ...item, activeClass: "" };
    });
    setTabs(tabsState);
  }

  function onSearchImagesInput(e) {
    let cancel;
    const cancelToken = new axios.CancelToken((c) => (cancel = c));
    setInputValue(e.target.value);
    dispatch(getSelectedData(e.target.value, cancelToken)).then((res) => {
      return () => cancel();
    });
  }

  const dispatchPexelData = useCallback(() => dispatch(pexelBayGetAllData()), [
    pexelBayGetAllData,
  ]);

  useEffect(() => {
    dispatchPexelData();
  }, []);

  return (
    <div className="card-holder">
      <Tab
        tabs={tabs}
        value={inputValue}
        onSearchImagesInput={onSearchImagesInput}
        onTabChange={onTabChange}
      />
      <Card>
        {selectedData && selectedData.length
          ? selectedData.map((tabData, index) => {
              return (
                <ImageCard
                  key={tabData.id}
                  src={tabData.largeImageURL}
                  downloads={tabData.downloads}
                  favorites={tabData.favorites}
                  likes={tabData.likes}
                  tags={tabData.tags}
                  type={tabData.type}
                  user={tabData.user}
                  userImageURL={tabData.userImageURL}
                  width="330px"
                  height="150px"
                />
              );
            })
          : []}
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
                  width="330px"
                  height="150px"
                />
              );
            })
          : []}
      </Card>
    </div>
  );
};

export default PexelBay;
