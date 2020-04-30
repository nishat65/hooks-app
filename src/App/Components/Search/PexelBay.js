import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  pexelBayGetAllData,
  getSelectedData,
} from "../../Reducers/ActionsCreators/PexelBay/PexelBayActionsCreators";
import Loading from "../Loading/LazyLoading";
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
  const selectedData = useSelector((state) => state.pexelBay.selectedData);

  function onTabChange(e, index, tab) {
    let cancel;
    const cancelToken = new axios.CancelToken((c) => (cancel = c));
    dispatch(getSelectedData(tab, cancelToken)).then(() => {
      return () => cancel();
    });
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

  useEffect(() => {
    let cancel;
    const cancelToken = new axios.CancelToken((c) => (cancel = c));
    dispatch(getSelectedData("illustrations", cancelToken));
    return () => cancel();
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
                  width="330px"
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
