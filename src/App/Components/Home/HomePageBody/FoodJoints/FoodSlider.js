import React from "react";

import FoodImg from "./FoodJointsImg";

class FoodSlider extends React.Component {
  state = {
    imgArray: FoodImg,
    img: FoodImg[0],
  };

  nextImageQueue = () => {
    let { img } = this.state;
    let index = img.id + 1;
    this.setState({ img: FoodImg[index] });
  };

  previousImageQueue = () => {
    let { img } = this.state;
    let index = img.id - 1;
    this.setState({ img: FoodImg[index] });
  };

  render() {
    let { imgArray, img } = this.state;
    return (
      <div className="food-section">
        <div className="margin-five food-joint-section">
          <div
            className="food-joint-section"
            style={{
              transform: `translateX(-${
                Math.ceil(img.id * (100 / imgArray.length)) + 1
              }%)`,
            }}
          >
            {imgArray.map((item, index) => {
              return (
                <div className="p-relative" key={item.key}>
                  <img
                    src={item.require}
                    alt={item.alt}
                    height={item.height}
                    width={item.width}
                  />
                  <div className="section-image-description">{item.alt}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="image-display-block">
          <button
            className="image-display-btn"
            disabled={img.id === 0}
            onClick={this.previousImageQueue}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            className="image-display-btn"
            disabled={img.id === FoodImg.length - 4}
            onClick={this.nextImageQueue}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default FoodSlider;
