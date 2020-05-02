import React from "react";

const Tabs = ({
  tabs,
  onTabChange,
  value,
  onDisplayOrderedBy,
  onSearchImagesInput,
}) => {
  return (
    <>
      <div className="tab-card">
        <h4 className="tab-header">Categories</h4>
        <div className="tab-header-search">
          <input
            type="text"
            name="search"
            value={value}
            onChange={onSearchImagesInput}
            placeholder="Type to search"
          />
          <div>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <ul>
          {tabs.map((tab, index) => {
            let { tabName, activeClass, activeSelection } = tab;
            return (
              <li
                className={activeClass}
                key={index}
                onClick={(e) => onTabChange(e, index, tabName)}
                data-tab-target={`#${tabName}`}
              >
                <div>{tabName}</div>
                <div
                  onClick={onDisplayOrderedBy}
                  className={`group-by-selections ${activeSelection}`}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tabs;
