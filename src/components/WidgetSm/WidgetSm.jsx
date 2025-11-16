import React from "react";
import './WidgetSm.css'
import { newMembers } from "../../data";
import { MdVisibility } from "react-icons/md";

export default function WidgetSm(){
    return(
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newMembers.map(user =>(
                <li key={user.id} className="widgetSmListItem">
                    <img src={user.img} className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">{user.username}</span>
                        <span className="widgetSmTilte">{user.title}</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdVisibility className="widgetSmIcon"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}