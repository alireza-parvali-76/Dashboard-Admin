import React from "react";
import './Feature.css'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Feature(){
    return(
        <div className="features">
            <div className="featureItem">
                <span className="featureTitle">Revanue</span>
                <div className="featureContainer">
                    <span className="featureMoney">$2,422</span>
                    <span className="featureRate">
                        -11.4 <FaArrowDown className="featureIcon negative" />
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
             <div className="featureItem">
                <span className="featureTitle">Revanue</span>
                <div className="featureContainer">
                    <span className="featureMoney">$2,422</span>
                    <span className="featureRate">
                        -11.4 <FaArrowDown className="featureIcon negative" />
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
             <div className="featureItem">
                <span className="featureTitle">Revanue</span>
                <div className="featureContainer">
                    <span className="featureMoney">$2,422</span>
                    <span className="featureRate">
                        -11.4 <FaArrowUp className="featureIcon " />
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
        </div>
    )
}