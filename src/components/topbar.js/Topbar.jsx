import React from "react";
import './Topbar.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export default function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">AliP76</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcon">
                        <IoIosNotificationsOutline />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIcon">
                       <MdLanguage />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIcon"> 
                        <IoMdSettings />
                    </div>
                    <img src="images/nature-3082832_1920.jpg" className="avatar" alt="" />
                </div>
            </div>
        </div>
    )
    
}