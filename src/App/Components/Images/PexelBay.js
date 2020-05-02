import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getSelectedData } from "../../Reducers/ActionsCreators/PexelBay/PexelBayActionsCreators";
import Loading from "../Loading/LazyLoading";
import Card from "../../Styles/SearchPage/Card";
import Tab from "./Tab";
import ImageCard from "../Card/ImageCard";

let tabsArray = [
  { tabName: "Cities", activeClass: "", activeSelection: "" },
  { tabName: "Landscape", activeClass: "", activeSelection: "" },
  { tabName: "Animals", activeClass: "", activeSelection: "" },
  { tabName: "Abstract", activeClass: "", activeSelection: "" },
];

const PexelBay = () => {
  const [tabs, setTabs] = useState(tabsArray);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.pexelBay.isFetching);
  const selectedData = useSelector((state) => state.pexelBay.selectedData);

  function onTabChange(e, index, tab) {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    dispatch(getSelectedData(tab, source));
    let tabsState = tabs.map((item, i) => {
      return index === i
        ? {
            ...item,
            activeClass: "active-class",
            activeSelection: "active-selection",
          }
        : { ...item, activeClass: "", activeSelection: "" };
    });
    setTabs(tabsState);
  }

  function onSearchImagesInput(e) {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    console.log(source.token, "source.token");
    setInputValue(e.target.value);
    dispatch(getSelectedData(e.target.value, source));
  }

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    dispatch(getSelectedData("illustrations", source));
  }, []);

  return (
    <div className="card-holder">
      <Tab
        tabs={tabs}
        value={inputValue}
        onSearchImagesInput={onSearchImagesInput}
        onTabChange={onTabChange}
      />
      {isFetching ? <Loading /> : null}
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
                  width="326px"
                  height="150px"
                />
              );
            })
          : !isFetching && <p className="no-result-text">No Results found</p>}
      </Card>
    </div>
  );
};

export default PexelBay;
