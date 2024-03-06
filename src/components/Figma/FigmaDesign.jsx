import React, { useState } from "react";
import "../Figma/FigmaDesign.css";
const FigmaDesign = () => {
    const [active, setActive]=useState("All Reviews");
    function handleClick(tabName){
        console.log(tabName);
        if(tabName == "All Reviews" || tabName == "Recent" || tabName == "Positive"){
            setActive(tabName);
        }
      
        else{
            setActive(false)
        }
    }
  return (
    <div className="main-container">
      <div className="head-div">
        <div id="headH1">Summarizing Customer Reviews</div>
        <div id="subHead">Based on 48 Reviews</div>
      </div>
        <div className="tab-flex">
          <div className="tab-div" id="tab-1" style={{background:"#000", color:"#fff"}} >All Reviews</div>

          <div className="tab-div" style={{background:active=="Recent" && "#000", color:active=="Recent" ? "white" : "black"}} onMouseLeave={()=>handleClick("")} onMouseEnter={()=>handleClick("Recent")}>Recent</div>
          <div className="tab-div" id="tab-positive" style={{background:active=="Positive" && "#000", color:active=="Positive" ? "white" : "black"}} onMouseLeave={()=>handleClick("")} onMouseEnter={()=>handleClick("Positive")}>Positive</div>
        </div>
      <div className="content-div" >
        <div className="first-sub-content-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="25"
            viewBox="0 0 82 25"
            fill="none"
          >
            <path
              d="M40.3315 0L43.7633 5.84853L50.3454 7.329L45.8843 12.424L46.5204 19.1874L40.3315 16.4878L34.1426 19.1874L34.7791 12.424L30.3176 7.329L36.8997 5.84853L40.3315 0Z"
              fill="#FBC505"
            />
            <path
              d="M20.3566 4.36377L23.1179 9.06954L28.4139 10.2608L24.8244 14.3606L25.3365 19.8024L20.3566 17.6301L15.3771 19.8024L15.8888 14.3606L12.2993 10.2608L17.5953 9.06954L20.3566 4.36377Z"
              fill="#FBC505"
            />
            <path
              d="M60.3065 4.36377L63.0678 9.06954L68.3638 10.2608L64.7744 14.3606L65.2864 19.8024L60.3065 17.6301L55.3271 19.8024L55.8387 14.3606L52.2493 10.2608L57.5452 9.06954L60.3065 4.36377Z"
              fill="#FBC505"
            />
            <path
              d="M6.10068 12.1846L8.19146 15.7476L12.2018 16.6496L9.48351 19.7535L9.87116 23.8739L6.10068 22.2295L2.33019 23.8739L2.71785 19.7535L0 16.6496L4.00989 15.7476L6.10068 12.1846Z"
              fill="#FBC505"
            />
            <path
              d="M74.5623 12.1846L76.6531 15.7476L80.663 16.6496L77.9452 19.7535L78.3328 23.8739L74.5623 22.2295L70.7919 23.8739L71.1795 19.7535L68.4617 16.6496L72.4716 15.7476L74.5623 12.1846Z"
              fill="#FBC505"
            />
          </svg>
          <div id="percentage-text">95%</div>
          <div id="customer-title-div">
            <div id="customer-title">Customer's feel wow!</div>
          </div>
        </div>
        <div className="second-sub-content-div">
          <div id="customer-review-text">
            Zep Musty Odor spray was a game changer for me. It gets rid of dog
            odor, cigarette smoke, cooking smells, husband farts. Cleans the air
            with the smallest of sprays and the scent surprisingly not flowery
            or a horrible chemical smell.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaDesign;