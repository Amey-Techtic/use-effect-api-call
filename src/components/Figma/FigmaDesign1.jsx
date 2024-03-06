import React, { useState } from "react";
import "../Figma/FigmaDesign1.css";

const FigmaDesign1 = () => {
  const [active, setActive] = useState("All Reviews");
  function handleClick(tabName) {
    console.log(tabName);
    if (
      tabName == "All Reviews" ||
      tabName == "Recent" ||
      tabName == "Positive"
    ) {
      setActive(tabName);
    } else {
      setActive(false);
    }
  }
  return (
    <div className="main-container">
      <div id="head-title">Summarizing Customer Reviews</div>
      <div className="tab-container">
        <div className="tab" style={{ background: "#000", color: "#FFF" }}>
          <div id="tab-title-1">All Reviews</div>
        </div>
        <div
          className="tab"
          style={{
            background: active == "All Reviews" && "#000",
            color: active == "All Reviews" && "white",
          }}
          onMouseLeave={() => handleClick("")}
          onMouseEnter={() => handleClick("Recent")}
        >
          {/* <div id="tab-title-2" > */}
            Recent
            {/* </div> */}
        </div>
        <div
          className="tab"
          style={{
            background: active == "All Reviews" && "#000",
            color: active == "All Reviews" && "white",
          }}
        >
          {/* <div id="tab-title-3" 
          onMouseLeave={() => handleClick("")}
          onMouseEnter={() => handleClick("Positive")}>
          */}
        Positive
        {/*} 
          </div> */}
        </div>
      </div>
      <div className="review-container">
        <svg viewBox="0 0 162 47">
          <path
            d="M82.4432 1.01497L88.2322 11.2415L88.3403 11.4324L88.5538 11.4822L99.6959 14.08L92.1322 23.0345L91.9974 23.1941L92.0163 23.4023L93.0923 35.2634L82.6492 30.5415L82.4432 30.4483L82.2372 30.5415L71.7941 35.2634L72.8708 23.4023L72.8897 23.1941L72.7548 23.0344L65.1904 14.08L76.3325 11.4822L76.546 11.4324L76.6541 11.2415L82.4432 1.01497Z"
            fill="#FBC505"
            stroke="white"
          />
          <path
            d="M44.7107 9.21906L49.2837 17.2973L49.3917 17.4881L49.6052 17.5379L58.4149 19.5919L52.4319 26.6756L52.297 26.8353L52.3159 27.0434L53.1671 36.4197L44.9167 32.6893L44.7107 32.5961L44.5047 32.6893L36.255 36.4197L37.1054 27.0434L37.1243 26.8352L36.9895 26.6756L31.0065 19.5919L39.8161 17.5379L40.0297 17.4881L40.1377 17.2973L44.7107 9.21906Z"
            fill="#FBC505"
            stroke="white"
          />
          <path
            d="M118.671 9.21906L123.244 17.2973L123.352 17.4881L123.566 17.5379L132.376 19.5919L126.393 26.6756L126.258 26.8353L126.277 27.0434L127.128 36.4197L118.877 32.6893L118.671 32.5961L118.465 32.6893L110.216 36.4197L111.066 27.0434L111.085 26.8352L110.95 26.6756L104.967 19.5919L113.777 17.5379L113.99 17.4881L114.098 17.2973L118.671 9.21906Z"
            fill="#FBC505"
            stroke="white"
          />
          <path
            d="M15.0483 19.8147L18.4052 25.7446L18.5132 25.9354L18.7268 25.9852L25.2045 27.4955L20.8017 32.7066L20.6668 32.8663L20.6857 33.0745L21.3112 39.9669L15.2543 37.2287L15.0483 37.1356L14.8423 37.2287L8.78533 39.9669L9.41089 33.0745L9.42978 32.8663L9.2949 32.7067L4.89279 27.4955L11.3698 25.9852L11.5834 25.9354L11.6914 25.7446L15.0483 19.8147Z"
            fill="#FBC505"
            stroke="white"
          />
          <path
            d="M148.333 19.8147L151.69 25.7446L151.798 25.9354L152.011 25.9852L158.488 27.4955L154.086 32.7067L153.951 32.8663L153.97 33.0745L154.596 39.9669L148.539 37.2287L148.333 37.1356L148.127 37.2287L142.07 39.9669L142.696 33.0745L142.714 32.8663L142.58 32.7067L138.177 27.4955L144.654 25.9852L144.868 25.9354L144.976 25.7446L148.333 19.8147Z"
            fill="#FBC505"
            stroke="white"
          />
        </svg>
        <div className="curved-container">
          <div id="customer-react-percentage-div">
            <div id="percentage-text"> 95% </div>
            <div id="customer-reaction-text"> Customer's feel wow! </div>
          </div>
          <div>
            <div id="review-text">Based on 48 reviews</div>
          </div>
        </div>
        <div id="review-paragraph">
          Zep Musty Odor spray was a game changer for me. It gets rid of dog
          odor, cigarette smoke, cooking smells, husband farts. Cleans the air
          with the smallest of sprays and the scent surprisingly not flowery or
          a horrible chemical smell.
        </div>
      </div>
    </div>
  );
};

export default FigmaDesign1;
