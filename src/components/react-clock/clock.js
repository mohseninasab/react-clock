import React from "react";
import "./clock.css";
import { SecondBar, MinuteBar, HourBar } from "./clock-bar";

//###########[ Clock Body ]#####################################################################
const Clock = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 296 296"
        >
          <defs>
          </defs>
          <title>clock</title>
          <circle style={{fill:props.frameColor}} className="cls-1" cx="148" cy="148" r="148" />
          <circle style={{fill:props.bgColor}} className="cls-2" cx="148" cy="148" r="117" />
          <rect x="148" y="42.5" height="11" />
          <path
            className="cls-4"
            d="M256,166.5a5,5,0,0,1-5-5v-11a5,5,0,0,1,10,0v11A5,5,0,0,1,256,166.5Z"
            transform="translate(-108 -108)"
          />
          <polygon points="195.26 66.16 195.26 66.16 200.76 56.64 200.76 56.64 195.26 66.16" />
          <path
            className="cls-4"
            d="M303.25,179.17a4.89,4.89,0,0,1-2.49-.68,5,5,0,0,1-2.51-4.33,5.06,5.06,0,0,1,.68-2.5l5.5-9.52a5,5,0,1,1,8.66,5l-5.5,9.52A5,5,0,0,1,303.25,179.17Z"
            transform="translate(-108 -108)"
          />
          <polygon points="229.85 100.76 229.85 100.76 239.37 95.26 239.37 95.26 229.85 100.76" />
          <path
            className="cls-4"
            d="M337.85,213.76a5,5,0,0,1-2.5-9.33l9.52-5.5a5,5,0,0,1,6.83,1.83,5,5,0,0,1-1.83,6.83l-9.52,5.5A4.94,4.94,0,0,1,337.85,213.76Z"
            transform="translate(-108 -108)"
          />
          <polygon points="242.5 148 242.5 148 253.5 148 253.5 148 242.5 148" />
          <path
            className="cls-4"
            d="M361.5,261h-11a5,5,0,0,1,0-10h11a5,5,0,0,1,0,10Z"
            transform="translate(-108 -108)"
          />
          <polygon points="229.83 195.27 229.83 195.27 239.35 200.78 239.35 200.78 229.83 195.27" />
          <path
            className="cls-4"
            d="M347.35,313.78a5,5,0,0,1-2.5-.67l-9.53-5.51a5,5,0,0,1-2.5-4.33,5.06,5.06,0,0,1,.68-2.5,5,5,0,0,1,6.83-1.83l9.52,5.51a5,5,0,0,1,2.5,4.33,5,5,0,0,1-5,5Z"
            transform="translate(-108 -108)"
          />
          <polygon points="195.22 229.86 195.22 229.86 200.72 239.38 200.72 239.38 195.22 229.86" />
          <path
            className="cls-4"
            d="M308.72,352.39a5,5,0,0,1-4.33-2.51l-5.5-9.53a5,5,0,0,1,8.66-5l5.5,9.53a5,5,0,0,1-1.83,6.83A5,5,0,0,1,308.72,352.39Z"
            transform="translate(-108 -108)"
          />
          <rect x="148" y="242.5" height="11" />
          <rect
            className="cls-4"
            x="143"
            y="237.5"
            width="10"
            height="21"
            rx="5"
            ry="5"
          />
          <polygon points="100.71 229.81 100.71 229.81 95.2 239.34 95.2 239.34 100.71 229.81" />
          <path
            className="cls-4"
            d="M203.2,352.34a5,5,0,0,1-5-5,5,5,0,0,1,.68-2.5l5.5-9.53a5,5,0,0,1,9.33,2.51,5,5,0,0,1-.67,2.5l-5.51,9.52A5,5,0,0,1,203.2,352.34Z"
            transform="translate(-108 -108)"
          />
          <polygon points="66.13 195.2 66.13 195.2 56.6 200.7 56.6 200.7 66.13 195.2" />
          <path
            className="cls-4"
            d="M164.61,313.7a5,5,0,0,1-2.5-9.33l9.53-5.5a5,5,0,0,1,5,8.66L167.1,313A5,5,0,0,1,164.61,313.7Z"
            transform="translate(-108 -108)"
          />
          <polygon points="53.5 148 53.5 148 42.5 148 42.5 148 53.5 148" />
          <path
            className="cls-4"
            d="M161.5,261h-11a5,5,0,1,1,0-10h11a5,5,0,1,1,0,10Z"
            transform="translate(-108 -108)"
          />
          <polygon points="66.19 100.69 66.19 100.69 56.67 95.18 56.67 95.18 66.19 100.69" />
          <path
            className="cls-4"
            d="M174.19,213.69a5,5,0,0,1-2.5-.67l-9.52-5.51a5,5,0,0,1-2.5-4.33,5,5,0,0,1,7.51-4.32l9.52,5.5a5,5,0,0,1,2.5,4.33,5,5,0,0,1-5,5Z"
            transform="translate(-108 -108)"
          />
          <polygon points="100.81 66.12 100.81 66.12 95.32 56.59 95.32 56.59 100.81 66.12" />
          <path
            className="cls-4"
            d="M208.82,179.12a5,5,0,0,1-4.34-2.5L199,167.09a5,5,0,1,1,8.67-5l5.49,9.53a5,5,0,0,1-4.33,7.49Z"
            transform="translate(-108 -108)"
          />
          <g className="cls-3">
            <path
              d="M259.91,373.43c-1.3.05-2.6.07-3.91.07a117.5,117.5,0,0,1,0-235q5.87,0,11.59.57a117.5,117.5,0,0,0-7.68,234.36Z"
              transform="translate(-108 -108)"
            />
          </g>
          <HourBar />
          <MinuteBar />
          <SecondBar />
          <circle className="cls-8" cx="148" cy="148" r="5" />
        </svg>
      </div>
    </div>
  );
};
export default Clock;
